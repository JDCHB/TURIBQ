
let inform3 = {}
let tabla3 = document.getElementById("tablaVisitaX");
console.log(tabla3)

function lista3() {
    ////////////////////////////////////////////////////////////////////////
    //////////////////////// CONSULTA TODOS ///////////////////////////////

    axios({
        method: 'GET',
        url: 'http://127.0.0.1:3000/getlistaReser',

    }).then(function (response) {
        let tabla3 = $('#tablaVisitaX').DataTable();

        tabla3.clear();
        console.log(response)
        console.log(response.data.length)

        for (let i = 0; i < response.data.length; i++) {
            console.log(tabla3)

            tabla3.row.add([
                response.data[i].Nombre_turista, /// primer elemento

                response.data[i].Nombre_sitioT /// segundo elemento

            ]);
        }

        tabla3.draw();
    }).catch(err => console.log('Error: ', err))

}




