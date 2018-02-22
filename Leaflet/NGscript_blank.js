// js and Leaflet stuff

/*global onMapClick*/
/*global L*/

var map = L.map('map', {
    center: [41.721074, -71.45695],
    zoom: 15
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    // choose streets, satellite, or both   
    id: 'mapbox.streets',
    // id: 'mapbox.satellite',
    // id: 'mapbox.streets-satellite',
    accessToken: 'pk.eyJ1IjoiZWR3ZDQyIiwiYSI6ImNqY3oyMG5lbjFjZ3czNG5zdW0wcjc1cTMifQ.N_St7yHopIDrk4ln9aKtWA'
}).addTo(map);