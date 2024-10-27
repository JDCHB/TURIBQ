function login() {
  const formulario = document.getElementById("login-form");

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe por defecto
    // Obtener los valores de usuario y contraseña ingresados
    var correo = document.getElementById("correo-input").value;
    var contraseña = document.getElementById("contraseña-input").value;

    await fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: correo,
        password: contraseña,
      }),
    })
      .then((response) => {
        if (response.status == 200) return response.text();
        
      })
      .then((data) => {
        const tourist = JSON.parse(data);
        alert("Inicio de sesion exitoso");
        localStorage.setItem("usuario", correo);
        localStorage.setItem("nombreUsuario", tourist.name);
        window.location.href = "../html/Usuario.html"
        console.log(tourist);
      })
      .catch((error) => {
        alert("ERROR AL INICIAR SESION")
        console.error("Error al iniciar sesion", error);
      });
  });
}


if (document.title !== "VISITANTE") {
  // Comprobar el estado de inicio de sesión al acceder mediante la URL
  if (!localStorage.getItem("usuario") && window.title !== "Iniciar Sesión") {
    // El usuario no ha iniciado sesión y está intentando acceder a una página sin credenciales
    alert("Debes iniciar sesión para acceder a esta página");
    window.location.href = "../html/index.html";
  }
}

function logout() {
  // Limpiar los datos de inicio de sesión en el LocalStorage
  localStorage.clear();
  window.location.href = "../html/index.html";
}

