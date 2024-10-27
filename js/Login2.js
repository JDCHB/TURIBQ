function loginAD() {
    const correo = document.getElementById("correo-AD").value;
    const contraseña = document.getElementById("contraseña-AD").value;
    console.log("response")

    axios({
        method: 'POST',
        url: 'http://127.0.0.1:3000/loginAD',
        data: {
            correo: correo,
            password: contraseña,
        }
    }).then(function (response) {
        console.log("hola")
        alert("Inicio de sesion exitoso");
        localStorage.setItem("usuario", correo);
        window.location.href = "../html/EleccionAD.html"
        console.log(response.data.length)
        if (response.data.length > 0) {
            window.location.href = "../html/EleccionAD.html"
        }
    }).catch(err => console.log('Error: ', err))

}