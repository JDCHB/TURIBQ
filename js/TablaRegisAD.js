let inform2 = {}
let tabla2 = document.getElementById("tablacontacs");
console.log(tabla2)

function lista2() {
    ////////////////////////////////////////////////////////////////////////
    //////////////////////// CONSULTA TODOS ///////////////////////////////

    axios({
        method: 'GET',
        url: 'http://127.0.0.1:3000/getlista',

    }).then(function (response) {
        let tabla2 = $('#tablacontacs').DataTable();

        tabla2.clear();
        console.log(response)
        console.log(response.data.length)

        for (let i = 0; i < response.data.length; i++) {
            console.log(tabla2)

            tabla2.row.add([
                response.data[i].id, /// primer elemento

                response.data[i].nombre, /// segundo elemento
    
                response.data[i].correo  /// tercer elemento
            ]);
        }

        tabla2.draw();
    }).catch(err => console.log('Error: ', err))

}

