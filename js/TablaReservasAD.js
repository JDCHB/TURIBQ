let inform = {}
let tabla = document.getElementById("tablaHotelReserva");
console.log(tabla)

function lista() {
    ////////////////////////////////////////////////////////////////////////
    //////////////////////// CONSULTA TODOS ///////////////////////////////

    axios({
        method: 'GET',
        url: 'http://127.0.0.1:3000/getlistaRESERVAS',

    }).then(function (response) {
        let tabla = $('#tablaHotelReserva').DataTable();//

        tabla.clear();
        console.log(response)
        console.log(response.data.length)

        for (let i = 0; i < response.data.length; i++) {
            console.log(tabla3)

            tabla.row.add([
                response.data[i].Nombre_turista, /// primer elemento

                response.data[i].Nombre_hotel, /// segundo elemento

                response.data[i].Fecha_entrada, /// tercer elemento

                response.data[i].Fecha_salida, /// cuarto elemento

                response.data[i].Cantidad_persona /// quinto elemento
    
            ]);
        }

        tabla.draw();
    }).catch(err => console.log('Error: ', err))

}
