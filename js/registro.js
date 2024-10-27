document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombres = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;
    const confirmarContraseña = document.getElementById(
      "confirmar contraseña"
    ).value;

    if (contraseña == confirmarContraseña && (correo.includes("@gmail.com") || correo.includes("@hotmail.com") || correo.includes("@outlook.com"))) {
      console.log("Datos enviados.");
      alert("REGISTRO EXITOSO")
      try {
        await fetch("http://127.0.0.1:3000/register", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: nombres + " " + apellidos,
            email: correo,
            password: contraseña
          }),
        }).then((response) => {
          if (response.status == 200) {
            console.log("Registro exitoso");
            window.location.href = "../index.html";
          } else {
            console.log("Error al registrar");
          }
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert(
        "Algunos datos pueden estar erroneos o en un formato incorrecto"
      )
      console.log(
        "Algunos datos pueden estar erroneos o en un formato incorrecto"
      );
      const correo = (document.getElementById("correo").value = "");
      const contraseña = (document.getElementById("contraseña").value = "");
      const confirmarContraseña = (document.getElementById("confirmar contraseña").value = "");
    }
  });
});

