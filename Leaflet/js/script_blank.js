// js and Leaflet stuff

/*global onMapClick*/
/*global L*/
/*global newport_hotels*/


// center: [41.489805, -71.318002],

var map = L.map('map', {
    center: [41.488509, -71.315153],
    zoom: 15
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 22,
    // choose streets, satellite, or both   
    id: 'mapbox.streets',
    // id: 'mapbox.satellite',
    // id: 'mapbox.streets-satellite',
    accessToken: 'pk.eyJ1IjoiZWR3ZDQyIiwiYSI6ImNqY3oyMG5lbjFjZ3czNG5zdW0wcjc1cTMifQ.N_St7yHopIDrk4ln9aKtWA'
}).addTo(map);

// add marker
var teardrop = new L.Icon({iconUrl: 'marker-icon.png'});

// add some data

// function basementDweller(feature, layer){
function onEachFeature(feature, layer){
    layer.bindPopup("<h1>Hi, I'm an info window</h1>");
    layer.setIcon(teardrop);
}


L.geoJSON(newport_hotels, {
    onEachFeature: onEachFeature
}).addTo(map);

// L.geoJSON(newport_hotels,{
//         pointToLayer: function (feature, latlng){
//             return L.marker(latlng);
//         }
//     }).addTo(map);