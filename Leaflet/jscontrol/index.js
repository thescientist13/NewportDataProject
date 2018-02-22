/*global L*/

var map = L.map('map').setView([34.0531, -118.2321], 14);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
}).addTo(map);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     maxZoom: 22,
//     // choose streets, satellite, or both   
//     id: 'mapbox.streets',
//     // id: 'mapbox.satellite',
//     // id: 'mapbox.streets-satellite',
//     accessToken: 'pk.eyJ1IjoiZWR3ZDQyIiwiYSI6ImNqY3oyMG5lbjFjZ3czNG5zdW0wcjc1cTMifQ.N_St7yHopIDrk4ln9aKtWA'
// }).addTo(map);

var items = [];

// nice leaflet-ajax plugin
// https://github.com/calvinmetcalf/leaflet-ajax
var geojsonLayer = L.geoJson.ajax('parks.geojson', {
  onEachFeature: function(data, layer) {
    items.push(layer);
    layer.bindPopup('<h3>' + data.properties.park + '</h3>');
  }
});

geojsonLayer.addTo(map);

L.control.search({
  data: items
}).addTo(map);

