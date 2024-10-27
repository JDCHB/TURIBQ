document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
  
    formulario.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const hotel = document.getElementById("nombreH").value;
      const direccion = document.getElementById("Direccion").value;
      const valoracion = document.getElementById("valoracion").value;
      const Descripcion = document.getElementById("descripcion").value;

      console.log("Datos enviados.");
      try {
        await fetch("http://127.0.0.1:3000/registerH", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre_hotel: hotel,
            direccion: direccion,
            Valoracion: valoracion,
            Descripcion: Descripcion
            }),
          }).then((response) => {
            if (response.status == 200) {
                console.log("EL REGISTRO FUE EXITOSO")
                alert("REGISTRO EXITOSO")
              } else {
                console.log("Error al registrar");
              }
          });
        } catch (error) {
          console.log(error);
        }
    });
  });
  
  