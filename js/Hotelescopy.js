var i = -1;
var k = 0;
var activo = false;
var nombre;
function HotelesVistaAntes() {
  axios({
    method: "GET",
    url: "http://127.0.0.1:3000/Hoteles",
  })
    .then(function (response) {
      var NombreUsuario = window.localStorage.getItem("nombreUsuario");
      console.log("a a a ", NombreUsuario);

      j = k;

      console.log("final", i);
      if (j > 0) {
        console.log(i);
        console.log("k:", k);

        console.log("1:", k);
        k = k - 1;
        i = k;
        document.getElementById("nombre3").innerText = response.data[k].Hotel;
        document.getElementById("direccion3").innerText =
          response.data[k].Direccion;
        document.getElementById("descripcion3").innerText =
          response.data[k].Descripcion;
        document.getElementById("reserva3").innerHTML =
          '<a class="btn btn-primary" data-toggle="modal" data-target="#myModaReser" onclick="reservar2(\'' +
          NombreUsuario +
          "', '" +
          response.data[k].Hotel +
          "')\">RESERVAR</a>";
        const V_Valoracion3 = response.data[k].Valoracion;

        contador3 = V_Valoracion3; //captura el primer digito de la id sea desde 1 a 5 dejando estrella
        let nombre3 = "estrella3"; //captura el nombre, el numero fue capturado arriba xd
        for (let i = 0; i < 5; i++) {
          if (i < contador3) {
            document.getElementById(i + 1 + nombre3).style.color = "#0d6efd";
          } else {
            document.getElementById(i + 1 + nombre3).style.color = "gray";
          }
        }

        k = k - 1;

        document.getElementById("nombre2").innerText = response.data[k].Hotel;
        document.getElementById("direccion2").innerText =
          response.data[k].Direccion;
        document.getElementById("descripcion2").innerText =
          response.data[k].Descripcion;
        document.getElementById("reserva2").innerHTML =
          '<a class="btn btn-primary" data-toggle="modal" data-target="#myModaReser" onclick="reservar2(\'' +
          NombreUsuario +
          "', '" +
          response.data[k].Hotel +
          "')\">RESERVAR</a>";
        const V_Valoracion2 = response.data[k].Valoracion;

        contador2 = V_Valoracion2; //captura el primer digito de la id sea desde 1 a 5 dejando estrella
        let nombre2 = "estrella2"; //captura el nombre, el numero fue capturado arriba xd
        for (let i = 0; i < 5; i++) {
          if (i < contador2) {
            document.getElementById(i + 1 + nombre2).style.color = "#0d6efd";
          } else {
            document.getElementById(i + 1 + nombre2).style.color = "gray";
          }
        }

        k = k - 1;

        document.getElementById("nombre").innerText = response.data[k].Hotel;
        document.getElementById("direccion").innerText =
          response.data[k].Direccion;
        document.getElementById("descripcion").innerText =
          response.data[k].Descripcion;
        document.getElementById("reserva").innerHTML =
          '<a class="btn btn-primary" data-toggle="modal" data-target="#myModaReser" onclick="reservar2(\'' +
          NombreUsuario +
          "', '" +
          response.data[k].Hotel +
          "')\">RESERVAR</a>";
        const V_Valoracion = response.data[k].Valoracion;

        contador = V_Valoracion; //captura el primer digito de la id sea desde 1 a 5 dejando estrella
        let nombre = "estrella1"; //captura el nombre, el numero fue capturado arriba xd
        for (let i = 0; i < 5; i++) {
          if (i < contador) {
            document.getElementById(i + 1 + nombre).style.color = "#0d6efd";
          } else {
            document.getElementById(i + 1 + nombre).style.color = "gray";
          }
        }

        console.log(i);

        console.log(response);
      }
    })
    .catch((err) => console.log("Error: ", err));

  document.getElementById("nombre").value = "";
}

var NombreHotel = "";
function HotelesVistaDespues() {
  console.log("aqui entra");
  var NombreUsuario = window.localStorage.getItem("nombreUsuario");
  console.log("a a a ", NombreUsuario);

  axios({
    method: "GET",
    url: "http://127.0.0.1:3000/Hoteles",
  })
    .then(function (response) {
      if (activo == false) {
        console.log("dfsd");
        let i2 = 0;

        document.getElementById("nombre").innerText = response.data[i2].Hotel;
        // NombreHotel=response.data[i2].Hotel;
        document.getElementById("direccion").innerText =
          response.data[i2].Direccion;
        document.getElementById("descripcion").innerText =
          response.data[i2].Descripcion;
        const V_Valoracion = response.data[i2].Valoracion;
        document.getElementById("reserva").innerHTML =
          '<a class="btn btn-primary" data-toggle="modal" data-target="#myModaReser" onclick="reservar2(\'' +
          NombreUsuario +
          "', '" +
          response.data[i2].Hotel +
          "')\">RESERVAR</a>";

        // onclick="reservar(\'' + NombreUsuario + '\', \'' + response.data[i2].Hotel + '\')"

        contador = V_Valoracion; //captura el primer digito de la id sea desde 1 a 5 dejando estrella
        let nombre = "estrella"; //captura el nombre, el numero fue capturado arriba xd
        for (let i = 0; i < 5; i++) {
          if (i < contador) {
            document.getElementById(i + 1 + nombre).style.color = "#0d6efd";
          } else {
            document.getElementById(i + 1 + nombre).style.color = "gray";
          }
        }

        i2 = i2 + 1;

        document.getElementById("nombre2").innerText = response.data[i2].Hotel;
        document.getElementById("direccion2").innerText =
          response.data[i2].Direccion;
        document.getElementById("descripcion2").innerText =
          response.data[i2].Descripcion;
        document.getElementById("reserva2").innerHTML =
          '<a class="btn btn-primary" data-toggle="modal" data-target="#myModaReser" onclick="reservar2(\'' +
          NombreUsuario +
          "', '" +
          response.data[i2].Hotel +
          "')\">RESERVAR</a>";

        const V_Valoracion2 = response.data[i2].Valoracion;

        let contador2 = V_Valoracion2; //captura el primer digito de la id sea desde 1 a 5 dejando estrella
        let nombre2 = "estrella2"; //captura el nombre, el numero fue capturado arriba xd
        for (let i = 0; i < 5; i++) {
          if (i < contador2) {
            document.getElementById(i + 1 + nombre2).style.color = "#0d6efd";
          } else {
            document.getElementById(i + 1 + nombre2).style.color = "gray";
          }
        }

        i2 = i2 + 1;

        document.getElementById("nombre3").innerText = response.data[i2].Hotel;
        document.getElementById("direccion3").innerText =
          response.data[i2].Direccion;
        document.getElementById("descripcion3").innerText =
          response.data[i2].Descripcion;
        document.getElementById("reserva3").innerHTML =
          '<a class="btn btn-primary" data-toggle="modal" data-target="#myModaReser" onclick="reservar2(\'' +
          NombreUsuario +
          "', '" +
          response.data[i2].Hotel +
          "')\">RESERVAR</a>";

        const V_Valoracion3 = response.data[i2].Valoracion;

        let contador3 = V_Valoracion3; //captura el primer digito de la id sea desde 1 a 5 dejando estrella
        console.log("s", contador3);
        let nombre3 = "estrella3"; //captura el nombre, el numero fue capturado arriba xd
        for (let i = 0; i < 5; i++) {
          if (i < contador3) {
            document.getElementById(i + 1 + nombre3).style.color = "#0d6efd";
          } else {
            document.getElementById(i + 1 + nombre3).style.color = "gray";
          }
        }

        activo = true;
      } else {
        console.log("ñ", i);

        j = i;

        if (j < 0) {
          i = 2;
        }

        console.log("j", response.data.length);
        while (i + 1 < response.data.length) {
          console.log("HOLA");
          i = i + 1;
          k = i;

          document.getElementById("nombre").innerText = response.data[i].Hotel;
          document.getElementById("direccion").innerText =
            response.data[i].Direccion;
          document.getElementById("descripcion").innerText =
            response.data[i].Descripcion;
          const V_Valoracion = response.data[i].Valoracion;
          document.getElementById("reserva").innerHTML =
            '<a class="btn btn-primary" data-toggle="modal" data-target="#myModaReser" onclick="reservar2(\'' +
            NombreUsuario +
            "', '" +
            response.data[i].Hotel +
            "')\">RESERVAR</a>";

          contador = V_Valoracion; //captura el primer digito de la id sea desde 1 a 5 dejando estrella
          let nombre = "estrella"; //captura el nombre, el numero fue capturado arriba xd
          for (let i = 0; i < 5; i++) {
            if (i < contador) {
              document.getElementById(i + 1 + nombre).style.color = "#0d6efd";
            } else {
              document.getElementById(i + 1 + nombre).style.color = "gray";
            }
          }

          i = i + 1;

          document.getElementById("nombre2").innerText = response.data[i].Hotel;
          document.getElementById("direccion2").innerText =
            response.data[i].Direccion;
          document.getElementById("descripcion2").innerText =
            response.data[i].Descripcion;
          const V_Valoracion2 = response.data[i].Valoracion;
          document.getElementById("reserva2").innerHTML =
            '<a class="btn btn-primary" data-toggle="modal" data-target="#myModaReser" onclick="reservar2(\'' +
            NombreUsuario +
            "', '" +
            response.data[i].Hotel +
            "')\">RESERVAR</a>";

          contador2 = V_Valoracion2; //captura el primer digito de la id sea desde 1 a 5 dejando estrella
          let nombre2 = "estrella2"; //captura el nombre, el numero fue capturado arriba xd
          for (let i = 0; i < 5; i++) {
            if (i < contador2) {
              document.getElementById(i + 1 + nombre2).style.color = "#0d6efd";
            } else {
              document.getElementById(i + 1 + nombre2).style.color = "gray";
            }
          }

          i = i + 1;

          document.getElementById("nombre3").innerText = response.data[i].Hotel;
          document.getElementById("direccion3").innerText =
            response.data[i].Direccion;
          document.getElementById("descripcion3").innerText =
            response.data[i].Descripcion;
          const V_Valoracion3 = response.data[i].Valoracion;
          document.getElementById("reserva3").innerHTML =
            '<a class="btn btn-primary" data-toggle="modal" data-target="#myModaReser" onclick="reservar2(\'' +
            NombreUsuario +
            "', '" +
            response.data[i].Hotel +
            "')\">RESERVAR</a>";

          contador3 = V_Valoracion3; //captura el primer digito de la id sea desde 1 a 5 dejando estrella
          let nombre3 = "estrella3"; //captura el nombre, el numero fue capturado arriba xd
          for (let i = 0; i < 5; i++) {
            if (i < contador3) {
              document.getElementById(i + 1 + nombre3).style.color = "#0d6efd";
            } else {
              document.getElementById(i + 1 + nombre3).style.color = "gray";
            }
          }

          console.log(i);

          console.log(response);
          break; //
        }
      }
    })
    .catch((err) => console.log("Error: ", err));

  document.getElementById("nombre").value = "";
}

function reservar() {
  const entrada = document.getElementById("entrada-input").value;
  const salida = document.getElementById("salida-input").value;
  const cantidad = document.getElementById("personas-input").value;

  console.log("response");

  axios({
    method: "POST",
    url: "http://127.0.0.1:3000/Reservar",
    data: {
      Nombre_turista: varnombre,
      Nombre_hotel: varhotel,
      Fecha_entrada: entrada,
      Fecha_salida: salida,
      Cantidad: cantidad,
    },
  })
    .then(function (response) {
      alert("SE HA RESERVADO CON EXITO");
    })
    .catch((err) => console.log("Error: ", err));
}

var varnombre = "";
var varhotel = "";

function reservar2(nombre, hotel) {
  varnombre = nombre;
  varhotel = hotel;
}

function fecha() {
  fecha = new Date();

  let entrada = document.getElementById("entrada-input");

  dia = fecha.getDate().toString().padStart(2, "0"); // Asegura dos caracteres en el día
  mes = (fecha.getMonth() + 1).toString().padStart(2, "0"); // Asegura dos caracteres en el mes
  year = fecha.getFullYear();
  console.log(dia);
  console.log(mes);
  console.log(year);
  //calcular min de entrada
  s = "";
  s += year + "-" + mes + "-" + dia;

  entrada.setAttribute("min", s);
  console.log(entrada);
  //calcular min de salida

  HotelesVistaDespues();
}

const fechaSalidaInput = document.getElementById("entrada-input");

fechaSalidaInput.addEventListener("input", function () {
  const fechaElegida =  new Date(fechaSalidaInput.value);
  console.log("Fecha elegida:", fechaElegida);


  vdia = fechaElegida.getDate()+1;
  console.log("--------------",vdia)

  let salida = document.getElementById("salida-input");

  dia = fecha.getDate().toString().padStart(2, "0"); // Asegura dos caracteres en el día
  mes = (fecha.getMonth() + 1).toString().padStart(2, "0"); // Asegura dos caracteres en el mes
  year = fecha.getFullYear();

  dia2 = parseInt(vdia) + parseInt(1);
  z = "";
  z += year + "-" + mes + "-" + dia2;

  salida.setAttribute("min", z);
  console.log(salida);

  // Aquí puedes agregar cualquier lógica que desees realizar cuando el usuario elige una fecha.
});

/*let salida = document.getElementById("salida-input");
  dia2 = parseInt(dia) + parseInt(1)
  z = "";
  z += year + "-" + mes + "-" + dia2;
  
  salida.setAttribute("min", z);
  console.log(salida);  
  */
