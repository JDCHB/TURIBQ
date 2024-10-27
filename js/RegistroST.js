document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
  
    formulario.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const hotel = document.getElementById("Nombre_sitioT").value;
      const direccion = document.getElementById("direccion").value;
      const descripcion = document.getElementById("descripcion").value;

        console.log("Datos enviados.");
        try {
          await fetch("http://127.0.0.1:3000/registerST", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre_hotel: hotel,
                direccion: direccion,
                Descripcion: descripcion,
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
  
  