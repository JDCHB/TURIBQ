
let map = L.map('map').setView([4.639386, -74.082412], 6);

const barranquillaCoords = [10.9878, -74.7889];

const TuriCoords = {
    Sitio1: [10.979958, -74.7800531, 17],
    Sitio2: [11.0090764,-74.7841874,17],
    Sitio3: [10.9983322,-74.7855228,15],
    Sitio4: [10.9880227,-74.793792,17],
    Sitio5: [11.0113213,-74.8013249,17],
    Sitio6: [10.9947781,-74.8087497,17],
    Sitio7: [10.9927943,-74.7903783,17],
    Sitio8: [11.0331249,-74.8339863,17],
    Sitio9: [10.9502218,-74.7590973,17]
};

const hotelCoords = {
    hotel1: [11.0141961, -74.8382542,17.5],
    hotel2: [11.0044903, -74.8211484,17],
    hotel3: [11.0038456, -74.8248181,17],
    hotel4: [11.0140649, -74.8395167,17],
    hotel5: [11.0019473, -74.8218103,17],
    hotel6: [11.0053216, -74.822547,17]
};

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.setView(barranquillaCoords, 13);

let hotelMarker;
let turiMarker;

document.getElementById('select-Turi').addEventListener('change', function (e) {
    const selectedTuri = e.target.value;
    if (selectedTuri !== "-1") {
        map.flyTo(TuriCoords[selectedTuri], TuriCoords[selectedTuri][2]);

        if (turiMarker) {
            map.removeLayer(turiMarker);
        }
        turiMarker = L.marker([TuriCoords[selectedTuri][0], TuriCoords[selectedTuri][1]]).addTo(map);
    } else {
        map.removeLayer(turiMarker);
    }
});

document.getElementById('select-hotel').addEventListener('change', function (e) {
    const selectedHotel = e.target.value;
    if (selectedHotel !== "-1") {
        map.flyTo(hotelCoords[selectedHotel], hotelCoords[selectedHotel][2]);

        // Elimina marcadores previos si existen
        if (hotelMarker) {
            map.removeLayer(hotelMarker);
        }

        // Agrega un nuevo marcador en la ubicación del hotel seleccionado
        hotelMarker = L.marker([hotelCoords[selectedHotel][0], hotelCoords[selectedHotel][1]]).addTo(map);
    } else {
        map.removeLayer(hotelMarker);
    }
});

