############# importar librerias o recursos#####
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin

# initializations
app = Flask(__name__)
CORS(app)

# Mysql Connection EN LA NUBE
# app.config['MYSQL_HOST'] = 'containers-us-west-46.railway.app'
# app.config['MYSQL_USER'] = 'root'
# app.config['MYSQL_PASSWORD'] = 'wN3EqKoqyEnMM29lXYi7'
# app.config['MYSQL_DB'] = 'railway'
# app.config['MYSQL_PORT'] = 8067
# mysql = MySQL(app)

# Mysql Connection LOCAL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'turismo'
mysql = MySQL(app)

# settings A partir de ese momento Flask utilizará esta clave para poder cifrar la información de la cookie
app.secret_key = "mysecretkey"

# Registro de turista


@app.route('/register', methods=['POST'])
def register():
    try:
        name = request.json['nombre']  # email
        email = request.json['email']  # email
        password = request.json['password']  # password

        cur = mysql.connection.cursor()
        cur.execute(
            "INSERT INTO turista (name, email, password) VALUES (%s, %s, %s)", (name, email, password))
        mysql.connection.commit()
        return jsonify({"informacion": "Registro exitoso"})

    except Exception as e:
        print(e)
        return jsonify({"informacion": e})

# Registro de Administrador


@app.route('/registerAD', methods=['POST'])
def registerAD():
    try:
        name = request.json['nombre']  # email
        email = request.json['email']  # email
        password = request.json['password']  # password

        cur = mysql.connection.cursor()
        cur.execute(
            "INSERT INTO admin (name, correo, password) VALUES (%s, %s, %s)", (name, email, password))
        mysql.connection.commit()
        return jsonify({"informacion": "Registro exitoso"})

    except Exception as e:
        print(e)
        return jsonify({"informacion": e})


# Reservar
@cross_origin
@app.route('/Reservar', methods=['POST'])
def Reservar():
    try:
        Nombre_turista = request.json['Nombre_turista']
        Nombre_hotel = request.json['Nombre_hotel']
        Entrada = request.json['Fecha_entrada']
        Salida = request.json['Fecha_salida']
        Cantidad = request.json['Cantidad']

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO hotel_turista (Nombre_turista, Nombre_hotel, Fecha_entrada, Fecha_salida, Cantidad_persona) VALUES (%s, %s, %s, %s, %s)",
                    (Nombre_turista, Nombre_hotel, Entrada, Salida, Cantidad))
        mysql.connection.commit()
        return jsonify({"informacion": "Ha Reservado con exitoso"})

    except Exception as e:
        print(e)
        return jsonify({"informacion": e})


# VISITAR SITIO TURISTICO
@cross_origin()
@app.route('/Visitar', methods=['POST'])
def Visitar():
    try:
        Nombre_turista = request.json['Nombre_turista']
        Nombre_sitioT = request.json['Nombre_sitioT']

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO visita_sitioturistico (Nombre_turista, Nombre_sitioT) VALUES (%s, %s)",
                    (Nombre_turista, Nombre_sitioT))
        mysql.connection.commit()
        return jsonify({"informacion": "Ha Reservado con exitoso"})

    except Exception as e:
        print(e)
        return jsonify({"informacion": e})


# Inicio de Sesion
@app.route('/login', methods=['POST'])
def login():
    try:
        email = request.json['email']  # email
        password = request.json['password']  # password

        cur = mysql.connection.cursor()
        cur.execute(
            "SELECT name, email from turista WHERE email = %s AND password = %s", (email, password))
        turista = cur.fetchone()
        mysql.connection.commit()

        return jsonify({"name": turista[0], "email": turista[1]})

    except Exception as e:
        print(e)
        return jsonify({"informacion": e})


# Registro de hotel
@cross_origin()
@app.route('/registerH', methods=['POST'])
def registerH():
    try:
        Hotel = request.json['nombre_hotel']  # full name
        Direccion = request.json['direccion']  # email
        Valoracion = request.json['Valoracion']  # password
        Descripcion = request.json['Descripcion']  # password

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO hoteles (nombre_hotel, direccion, Valoracion, Descripcion) VALUES (%s, %s, %s, %s)",
                    (Hotel, Direccion, Valoracion, Descripcion))
        mysql.connection.commit()
        return jsonify({"informacion": "Registro exitoso"})

    except Exception as e:
        print(e)
        return jsonify({"informacion": e})


# Registro de Sitio Turistico
@cross_origin()
@app.route('/registerST', methods=['POST'])
def registerST():
    try:
        Hotel = request.json['nombre_hotel']  # full name
        Direccion = request.json['direccion']  # email
        Descripcion = request.json['Descripcion']  # password

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO sitio_turistico (descripcion, direccion, Nombre_sitioT) VALUES (%s, %s, %s)",
                    (Hotel, Direccion, Descripcion))
        mysql.connection.commit()
        return jsonify({"informacion": "Registro exitoso"})

    except Exception as e:
        print(e)
        return jsonify({"informacion": e})


# Inicio de Sesion Administrador
@cross_origin()
@app.route('/loginAD', methods=['POST'])
def getloginAD():
    try:
        email = request.json['correo']  # email
        password = request.json['password']  # password

        cur = mysql.connection.cursor()
        cur.execute(
            "SELECT password, correo from admin WHERE correo = %s AND password = %s", (email, password,))
        admin = cur.fetchall()
        cur.close()

        payload = []
        content = {}
        mysql.connection.commit()
        for result in admin:
            content = {'email': result[1], 'password': result[0]}
            payload.append(content)
            content = {}

        print("--------------------")
        print(payload)
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion": e})

# ---------------Revisar_lista Usuarios Resgistrados


@app.route('/getlista', methods=['GET'])
def getlista():
    try:
        cur = mysql.connection.cursor()  # conectar con la base de datos ↓
        cur.execute('SELECT * FROM turista')  # ejecutar el scrip
        rv = cur.fetchall()  # consultar todos los registros
        cur.close()  # cierra la conexion que abrimos arriba        ↑
        payload = []  # lista o array, arreglo, como quieran decirle
        content = {}  # estructura de tipo objeto
        for result in rv:
            content = {'id': result[0], 'nombre': result[1],
                       'correo': result[2]}  # numero de valoracion
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:

        print(e)
        return jsonify({"informacion": e})


# ---------------Revisar_lista TABLA DE VISITAS
@app.route('/getlistaReser', methods=['GET'])
def getlistaReser():
    try:
        cur = mysql.connection.cursor()  # conectar con la base de datos ↓
        cur.execute('SELECT * FROM visita_sitioturistico')  # ejecutar el scrip
        rv = cur.fetchall()  # consultar todos los registros
        cur.close()  # cierra la conexion que abrimos arriba        ↑
        payload = []  # lista o array, arreglo, como quieran decirle
        content = {}  # estructura de tipo objeto
        for result in rv:
            # numero de valoracion
            content = {'Nombre_turista': result[0], 'Nombre_sitioT': result[1]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:

        print(e)
        return jsonify({"informacion": e})

    # ---------------revisar_lista Reservas de los Turistas


@app.route('/getlistaRESERVAS', methods=['GET'])
def getlistaRESERVAS():
    try:
        cur = mysql.connection.cursor()  # conectar con la base de datos ↓
        cur.execute('SELECT * FROM hotel_turista')  # ejecutar el scrip
        rv = cur.fetchall()  # consultar todos los registros
        cur.close()  # cierra la conexion que abrimos arriba        ↑
        payload = []  # lista o array, arreglo, como quieran decirle
        content = {}  # estructura de tipo objeto
        for result in rv:
            content = {'Nombre_turista': result[0], 'Nombre_hotel': result[1],
                       'Fecha_entrada': result[2], 'Fecha_salida': result[3], 'Cantidad_persona': result[4]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:

        print(e)
        return jsonify({"informacion": e})

# ---------------revisar_lista Visitas de los Turistas


@app.route('/getlistaVisitas', methods=['GET'])
def getlistaVisitas():
    try:
        cur = mysql.connection.cursor()  # conectar con la base de datos ↓
        cur.execute('SELECT * FROM visita_sitioturistico')  # ejecutar el scrip
        rv = cur.fetchall()  # consultar todos los registros
        cur.close()  # cierra la conexion que abrimos arriba        ↑
        payload = []  # lista o array, arreglo, como quieran decirle
        content = {}  # estructura de tipo objeto
        for result in rv:
            content = {'Nombre_turista': result[0], 'Nombre_hotel': result[1]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:

        print(e)
        return jsonify({"informacion": e})


# ---------------MOSTRAR HOTELES---------------#
@app.route('/Hoteles', methods=['GET'])
def Hoteles():
    try:
        cur = mysql.connection.cursor()  # conectar con la base de datos ↓
        cur.execute('SELECT * FROM hoteles')  # ejecutar el scrip
        rv = cur.fetchall()  # consultar todos los registros
        cur.close()  # cierra la conexion que abrimos arriba        ↑
        payload = []  # lista o array, arreglo, como quieran decirle
        content = {}  # estructura de tipo objeto
        for result in rv:
            content = {'Hotel': result[0], 'Direccion': result[2],
                       'Valoracion': result[3], 'Descripcion': result[4]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:

        print(e)
        return jsonify({"informacion": e})


# --------------- MOSTRAR SITIOS TURISTICOS---------------#
@app.route('/SitiosT', methods=['GET'])
def SitiosT():
    try:
        cur = mysql.connection.cursor()  # conectar con la base de datos ↓
        cur.execute('SELECT * FROM sitio_turistico')  # ejecutar el scrip
        rv = cur.fetchall()  # consultar todos los registros
        cur.close()  # cierra la conexion que abrimos arriba        ↑
        payload = []  # lista o array, arreglo, como quieran decirle
        content = {}  # estructura de tipo objeto
        for result in rv:
            content = {
                'descripcion': result[0], 'direccion': result[1], 'Nombre_sitioT': result[2]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:

        print(e)
        return jsonify({"informacion": e})


# ---------------ESTADISTICA Reservas de los hoteles
@app.route('/visitas_hoteles')
def visitas_hoteles():
    cur = mysql.connection.cursor()  # conectar con la base de datos ↓
    # ejecutar el scrip
    cur.execute("SELECT Nombre_hotel, COUNT(*) AS cantidad_visitas FROM hotel_turista GROUP BY Nombre_hotel ORDER BY cantidad_visitas DESC LIMIT 3")
    rv = cur.fetchall()  # consultar todos los registros
    cur.close()  # cierra la conexion que abrimos arriba        ↑
    payload = []  # lista o array, arreglo, como quieran decirle
    content = {}  # estructura de tipo objeto
    for result in rv:
        # numero de valoracion
        content = {'nombre_hotel': result[0], 'cantidad_visitas': result[1]}
        payload.append(content)
        content = {}
    return jsonify(payload)

# ---------------ESTADISTICA Sitios mas visitados


def visitas_sitios():
    cur = mysql.connection.cursor()  # conectar con la base de datos ↓
    # ejecutar el scrip
    cur.execute("SELECT Nombre_sitioT, COUNT(*) AS cantidad_visitas FROM visita_sitioturistico GROUP BY Nombre_sitioT ORDER BY cantidad_visitas DESC LIMIT 3")
    rv = cur.fetchall()  # consultar todos los registros
    cur.close()  # cierra la conexion que abrimos arriba        ↑
    payload = []  # lista o array, arreglo, como quieran decirle
    content = {}  # estructura de tipo objeto
    for result in rv:
        # numero de valoracion
        content = {'Nombre_sitioT': result[0], 'cantidad_visitas': result[1]}
        payload.append(content)
        content = {}
    return jsonify(payload)

# ---------------ESTADISTICA Turista con mayor cantidad de reservas


@app.route('/visitas_turista')
def visitas_turista():
    cur = mysql.connection.cursor()  # conectar con la base de datos ↓
    # ejecutar el scrip
    cur.execute("SELECT Nombre_turista, COUNT(*) AS cantidad_visitas FROM hotel_turista GROUP BY Nombre_turista ORDER BY cantidad_visitas DESC LIMIT 3")
    rv = cur.fetchall()  # consultar todos los registros
    cur.close()  # cierra la conexion que abrimos arriba        ↑
    payload = []  # lista o array, arreglo, como quieran decirle
    content = {}  # estructura de tipo objeto
    for result in rv:
        # numero de valoracion
        content = {'Nombre_turista': result[0], 'cantidad_visitas': result[1]}
        payload.append(content)
        content = {}
    return jsonify(payload)


# starting the app
if __name__ == "__main__":
    app.run(port=3000, debug=True)
