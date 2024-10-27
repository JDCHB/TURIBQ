document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formularioAD");

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombres = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;
    const confirmarContraseña = document.getElementById(
      "confirmar_contraseña"
    ).value;
    const tipoUsuario = document.querySelector(
      'input[name="tipoUsuario"]:checked'
    ).value;

    if (contraseña == confirmarContraseña && (correo.includes("@gmail.com") || correo.includes("@hotmail.com") || correo.includes("@outlook.com"))) {
      console.log("Entrando a la seleccion.");

      try {
        if (tipoUsuario === "administrador") {
          await axios.post("http://127.0.0.1:3000/registerAD", {
            nombre: nombres + " " + apellidos,
            email: correo,
            password: contraseña,
          });
          console.log("Registro de administrador exitoso");
          alert("Registro de administrador exitoso");
        } else if (tipoUsuario === "turista") {
          console.log("TURISTA");
          await axios.post("http://127.0.0.1:3000/register", {
            nombre: nombres + " " + apellidos,
            email: correo,
            password: contraseña
          });
          console.log("Registro de turista exitoso");
          alert("Registro de turista exitoso");
        } else {
          console.log("Tipo de usuario no reconocido");
        }
      } catch (error) {
        console.log("Error al registrar:", error);
      }
    } else {
      alert(
        "La contraseña no es la misma, por favor vuelva a ingresar la confirmación"
      );
      console.log(
        "La contraseña no es la misma, por favor vuelva a ingresar la confirmación"
      );
      document.getElementById("confirmar_contraseña").value = "";
    }
  });
});
