
var i = -1
var k = 0
var activo = false
var nombre
function SitiosTVistaAntes() {



    axios({
        method: 'GET',
        url: 'http://127.0.0.1:3000/SitiosT',

    }).then(function (response) {
        var NombreUsuario = window.localStorage.getItem('nombreUsuario')
        console.log("a a a ", NombreUsuario)


        j = k

        console.log("final", i)
        if (j > 0) {
            console.log(i)
            console.log("k:", k)





            console.log("1:", k)
            k = k - 1
            i = k

            document.getElementById('descripcion3').innerText = response.data[k].descripcion;
            document.getElementById('direccion3').innerText = response.data[k].direccion;
            document.getElementById('nombre3').innerText = response.data[k].Nombre_sitioT;
            document.getElementById('Visita3').innerHTML = '<a class="btn btn-primary" onclick="Visitar(\'' + NombreUsuario + '\', \'' + response.data[k].Nombre_sitioT + '\')">Si</a>';



            k = k - 1










            document.getElementById('descripcion2').innerText = response.data[k].descripcion;
            document.getElementById('direccion2').innerText = response.data[k].direccion;
            document.getElementById('nombre2').innerText = response.data[k].Nombre_sitioT;
            document.getElementById('Visita2').innerHTML = '<a class="btn btn-primary" onclick="Visitar(\'' + NombreUsuario + '\', \'' + response.data[k].Nombre_sitioT + '\')">Si</a>';



            k = k - 1





            document.getElementById('descripcion').innerText = response.data[k].descripcion;
            document.getElementById('direccion').innerText = response.data[k].direccion;
            document.getElementById('nombre').innerText = response.data[k].Nombre_sitioT;
            document.getElementById('Visita').innerHTML = '<a class="btn btn-primary" onclick="Visitar(\'' + NombreUsuario + '\', \'' + response.data[k].Nombre_sitioT + '\')">Si</a>';




            //i = k



            console.log(i)

            console.log(response)
        }






    }).catch(err => console.log('Error: ', err))

    document.getElementById("nombre").value = ""
}


var NombreUsu = ""
function SitiosTVistaDespues() {
    console.log("aqui entra")
    var NombreUsuario = window.localStorage.getItem('nombreUsuario')
    console.log("a a a ", NombreUsuario)



    axios({
        method: 'GET',
        url: 'http://127.0.0.1:3000/SitiosT',

    }).then(function (response) {

        if (activo == false) {


            console.log("dfsd")
            let i2 = 0

            document.getElementById('descripcion').innerText = response.data[i2].descripcion;
            document.getElementById('direccion').innerText = response.data[i2].direccion;
            document.getElementById('nombre').innerText = response.data[i2].Nombre_sitioT;
            // NombreHotel=response.data[i2].Hotel;
            document.getElementById('Visita').innerHTML = '<a class="btn btn-primary" onclick="Visitar(\'' + NombreUsuario + '\', \'' + response.data[i2].Nombre_sitioT + '\')">Si</a>';



            i2 = i2 + 1


            document.getElementById('descripcion2').innerText = response.data[i2].descripcion;
            document.getElementById('direccion2').innerText = response.data[i2].direccion;
            document.getElementById('nombre2').innerText = response.data[i2].Nombre_sitioT;
            document.getElementById('Visita2').innerHTML = '<a class="btn btn-primary" onclick="Visitar(\'' + NombreUsuario + '\', \'' + response.data[i2].Nombre_sitioT + '\')">Si</a>';

            i2 = i2 + 1



            document.getElementById('descripcion3').innerText = response.data[i2].descripcion;
            document.getElementById('direccion3').innerText = response.data[i2].direccion;
            document.getElementById('nombre3').innerText = response.data[i2].Nombre_sitioT;
            document.getElementById('Visita3').innerHTML = '<a class="btn btn-primary" onclick="Visitar(\'' + NombreUsuario + '\', \'' + response.data[i2].Nombre_sitioT + '\')">Si</a>';






            activo = true //mano ya la dejo hasta aca, q quien esta logeando
        } else {


            console.log("ñ", i)




            j = i

            if (j < 0) {
                i = 2
            }

            console.log("j", response.data.length)
            while (i + 1 < response.data.length) {
                console.log("HOLA")
                i = i + 1
                k = i

                document.getElementById('descripcion').innerText = response.data[i].descripcion;
                document.getElementById('direccion').innerText = response.data[i].direccion;
                document.getElementById('nombre').innerText = response.data[i].Nombre_sitioT;

                document.getElementById('Visita').innerHTML = '<a class="btn btn-primary" onclick="Visitar(\'' + NombreUsuario + '\', \'' + response.data[i].Nombre_sitioT + '\')">Si</a>';








                i = i + 1


                document.getElementById('descripcion2').innerText = response.data[i].descripcion;
                document.getElementById('direccion2').innerText = response.data[i].direccion;
                document.getElementById('nombre2').innerText = response.data[i].Nombre_sitioT;

                document.getElementById('Visita2').innerHTML = '<a class="btn btn-primary" onclick="Visitar(\'' + NombreUsuario + '\', \'' + response.data[i].Nombre_sitioT + '\')">Si</a>';


                i = i + 1


                document.getElementById('descripcion3').innerText = response.data[i].descripcion;
                document.getElementById('direccion3').innerText = response.data[i].direccion;
                document.getElementById('nombre3').innerText = response.data[i].Nombre_sitioT;
                document.getElementById('Visita3').innerHTML = '<a class="btn btn-primary" onclick="Visitar(\'' + NombreUsuario + '\', \'' + response.data[i].Nombre_sitioT + '\')">Si</a>';




                console.log(i)

                console.log(response)
                break//

            }

        }








    }).catch(err => console.log('Error: ', err))

    document.getElementById("nombre").value = ""
}


function Visitar(nombre, Nombre_sitioT) {

    console.log("response")

    axios({
        method: 'POST',
        url: 'http://127.0.0.1:3000/Visitar',
        data: {
            Nombre_turista: nombre,
            Nombre_sitioT: Nombre_sitioT,
        }
    }).then(function (response) {
        alert("GRACIAS POR CONTESTAR")
    }).catch(err => console.log('Error: ', err))
}