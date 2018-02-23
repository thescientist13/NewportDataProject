// video tutorial https://youtu.be/fDfkjx-VhLI
// js and Leaflet stuff

/*global onMapClick*/
/*global L*/
/*global newport_hotels*/
/*global bpac_survey_2014*/


// center: [41.489805, -71.318002],

var map = L.map('map', {
    center: [41.488509, -71.315153],
    zoom: 15
});

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
}).addTo(map);

// add markers

// blue marker for hotels
var blueMarker = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.marker([51.5, -0.09], {icon: blueMarker}).addTo(map);

// green marker for walking
var greenMarker = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.marker([51.5, -0.09], {icon: greenMarker}).addTo(map);

// red marker for Newport Crosswalk Safety Survey (2014) dataset
// source https://github.com/NewportDataPortal/newport-crosswalk-survey-2014
var redMarker = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.marker([51.5, -0.09], {icon: redMarker}).addTo(map);



// add some data
// nice leaflet-ajax plugin
// https://github.com/calvinmetcalf/leaflet-ajax
var items = [];
// var geojsonLayer = L.geoJson.ajax('data/newport_hotels.geojson', {
//   onEachFeature: function(feature, layer) {
//     items.push(layer);
//     // layer.bindPopup('<h3>' + feature.properties.name + '</h3>');
//     layer.bindPopup("<strong>" + feature.properties.name + "</strong><br/>" +
//                 feature.properties.street + "<br/>" +
//                 feature.properties.city + ", " +
//                 feature.properties.state
//                 );
//   }
// });

function newportHotels(feature, layer){
    layer.bindPopup("<strong>" + feature.properties.name + "</strong><br/>" +
                    feature.properties.street + "<br/>" +
                    feature.properties.city + ", " +
                    feature.properties.state
                    );
    layer.setIcon(blueMarker);
}

var geojsonLayer = L.geoJson.ajax('data/newport_hotels.geojson', {
  onEachFeature: newportHotels
});

geojsonLayer.addTo(map);


/*
id: 1,
Safe: "17",
Unsafe: "114",
"I don't know.": "112",
score: "0.1297709923664122",
n: "131",
size: "14.30131004366812"
feature.properties.id + "<br/>" +
feature.properties.Safe + "<br/>" +
feature.properties.Unsafe
*/

// function name similar to data file but must not be the same
function bpacSurvey2014(feature, layer){
    layer.bindPopup("<table id='t01'>" +
                        "<tr>" +
                            "<th>Key</th>" +
                            "<th>Value</th>" + 
                        "</tr>" +
                        "<tr>" +
                            "<td>ID</td>" +
                            "<td>" + feature.properties.id + "</td>" + 
                        "</tr>" +
                        "<tr>" +
                            "<td>Safe</td>" +
                            "<td>" + feature.properties.Safe + "</td>" + 
                        "</tr>" +
                        "<tr>" +
                            "<td>Unsafe</td>" +
                            "<td>" + feature.properties.Unsafe + "</td>" + 
                        "</tr>" +
                        "<tr>" +
                            "<td>I don't know</td>" +
                            "<td>" + feature.properties.Idontknow + "</td>" + 
                        "</tr>" +
                        "<tr>" +
                            "<td>Score</td>" +
                            "<td>" + feature.properties.score + "</td>" + 
                        "</tr>" +
                        "<tr>" +
                            "<td>n</td>" +
                            "<td>" + feature.properties.n + "</td>" + 
                        "</tr>" +
                        "<tr>" +
                            "<td>Size</td>" +
                            "<td>" + feature.properties.size + "</td>" + 
                        "</tr>" +
                    "</table>"
                    );
    layer.setIcon(redMarker);
}

L.geoJSON(bpac_survey_2014, {
    onEachFeature: bpacSurvey2014
}).addTo(map);
