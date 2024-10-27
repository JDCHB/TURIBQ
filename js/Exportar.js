function pdf_USUREGIS() {
    const { jsPDF } = window.jspdf;
    var doc = new jsPDF();

    axios({
        method: 'GET',
        url: 'http://127.0.0.1:3000/getlista',

    }).then(function (response) {

        var body=[]

        for (let i=0; i<response.data.length; i++) {
            body.push([response.data[i].id, response.data[i].nombre, response.data[i].correo]);
            
        }

        var pdf = new jsPDF();

        pdf.text(20, 20, "Reporte de turistas registrados en la pagina");

        var columns = ["Id", "Nombre", "Email"];

        pdf.autoTable(columns, body,

            { margin: { top: 25 } }

        );

        pdf.save('Reporte.pdf');

    }).catch(err => console.log('Error: ', err))

}


function pdf_USURYRESER() {
    const { jsPDF } = window.jspdf;
    var doc = new jsPDF();

    axios({
        method: 'GET',
        url: 'http://127.0.0.1:3000/getlistaRESERVAS',

    }).then(function (response) {

        var body=[]

        for (let i=0; i<response.data.length; i++) {
            body.push([response.data[i].Nombre_turista, response.data[i].Nombre_hotel]);
            
        }

        var pdf = new jsPDF();

        pdf.text(20, 20, "Reporte de donde reservaron los turistas");

        var columns = ["Nombre_turista", "Nombre_hotel"];

        pdf.autoTable(columns, body,

            { margin: { top: 25 } }

        );

        pdf.save('Reporte.pdf');

    }).catch(err => console.log('Error: ', err))

}

function pdf_USUVISITAS() {
    const { jsPDF } = window.jspdf;
    var doc = new jsPDF();

    axios({
        method: 'GET',
        url: 'http://127.0.0.1:3000/getlistaVisitas',

    }).then(function (response) {

        var body=[]

        for (let i=0; i<response.data.length; i++) {
            body.push([response.data[i].Nombre_turista, response.data[i].Nombre_hotel]);
            
        }

        var pdf = new jsPDF();

        pdf.text(20, 20, "Reporte de turistas y sus visitas");

        var columns = ["Nombre del Turista", "Nombre del sitio turistico"];

        pdf.autoTable(columns, body,

            { margin: { top: 25 } }

        );

        pdf.save('Reporte.pdf');

    }).catch(err => console.log('Error: ', err))

}