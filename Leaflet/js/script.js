// video tutorial https://youtu.be/fDfkjx-VhLI
// js and Leaflet stuff

/*global onMapClick*/
/*global L*/
/*global $*/
/*global polyline*/
/*global latlng*/

var map = L.map('map', {
    center: [41.488509, -71.315153],
    zoom: 15
});

// this is the map
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
}).addTo(map);

/*global map*/
var popup = L.popup();

// map.on('click', onMapClick);

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent(e.latlng.toString())
//         .openOn(map);
// }


// add markers

// gren marker for hotels
var blueMarker = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.marker([0,0], {icon: blueMarker}).addTo(map);

// blue marker for sidewalks
var greenMarker = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.marker([0,0], {icon: greenMarker}).addTo(map);

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

L.marker([0,0], {icon: redMarker}).addTo(map);



// add some data
// nice leaflet-ajax plugin
// https://github.com/calvinmetcalf/leaflet-ajax
var items = [];

function newportHotels(feature, layer){
    layer.bindPopup("<strong>" + feature.properties.name + "</strong><br/>" +
                    feature.properties.street + "<br/>" +
                    feature.properties.city + ", " +
                    feature.properties.state
                    );
    layer.setIcon(blueMarker);
}

// .setContent(e.latlng.toString());

var hotelsLayer = L.geoJson.ajax('data/newport_hotels.geojson', {
  onEachFeature: newportHotels
}).addTo(map);

// Newport Crosswalk Safety Survey (2014) 
// https://github.com/NewportDataPortal/newport-crosswalk-survey-2014
function bpacSurvey2014(feature, layer){
    layer.bindPopup("<table id='t01'>" +
                        "<tr>" +
                            "<th colspan='2'>" +
                                "<a href=https://github.com/NewportDataPortal/newport-crosswalk-survey-2014 target='_blank'>" +
                                    "Newport Crosswalk Safety Survey (2014)" + 
                                "</a>" + 
                            "</th>" +
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

var crosswalksLayer = L.geoJson.ajax('data/bpac_survey_2014.geojson', {
  onEachFeature: bpacSurvey2014
}).addTo(map);


// add sidewalks layer
// npt-sidewalks.geojson is a map of all sidewalks.

var sidewalks = [];

var sidewalksLayer = L.geoJson.ajax('data/npt-sidewalks.geojson', {
  onEachFeature: function(data, layer) {
    sidewalks.push(layer);
  }
}).addTo(map);



// add legend for marker colors
// var Legend =  new L.Control.Legend({
//         position: 'topleft',
//         collapsed: true,
//         controlButton: {
//             title: "Legend"
//         }});
// map.addControl( Legend );
 
// $(".legend-container").append( $("#legend") );
// $(".legend-toggle").append( "<i class='legend-toggle-icon fa fa-info fa-2x' style='color: #000'></i>" );

$(document).ready(function (e) {
    $("#sidewalksButton").show();
    $("#sidewalksButton").click(function(){
        if(map.hasLayer(sidewalksLayer)){
            map.removeLayer(sidewalksLayer);
        } else {
            map.addLayer(sidewalksLayer);
        }
    });
    
    $("#crosswalksButton").show();
    $("#crosswalksButton").click(function(){
        if(map.hasLayer(crosswalksLayer)){
            map.removeLayer(crosswalksLayer);
        } else {
            map.addLayer(crosswalksLayer);
        }
    });
    
    $("#hotelsButton").show();
    $("#hotelsButton").click(function(){
        if(map.hasLayer(hotelsLayer)){
            map.removeLayer(hotelsLayer);
        } else {
            map.addLayer(hotelsLayer);
        }
    });
    e.preventDefault();
})