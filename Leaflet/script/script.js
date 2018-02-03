// tutorial http://leafletjs.com/examples/quick-start/
// initialize the map on the "map" div with a given center and zoom
// lat,lon  41.721074, -71.45695

/*global L*/
var mymap = L.map('mapid', {
    center: [41.721074, -71.45695],
    zoom: 16
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    // choose streets, satellite, or both   
    id: 'mapbox.streets',
    // id: 'mapbox.satellite',
    // id: 'mapbox.streets-satellite',
    accessToken: 'pk.eyJ1IjoiZWR3ZDQyIiwiYSI6ImNqY3oyMG5lbjFjZ3czNG5zdW0wcjc1cTMifQ.N_St7yHopIDrk4ln9aKtWA'
}).addTo(mymap);





    

// var popup = L.popup()
//     .setLatLng([41.725632, -71.477828])
//     .setContent("I am a standalone popup.")
//     .openOn(mymap);
    

/*global onMapClick*/



///////////////////////////////////////////////////////////////////////////////////////////////////
// http://leafletjs.com/examples/geojson/
///////////////////////////////////////////////////////////////////////////////////////////////////

var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates":[41.722963, -71.466808] 
    }
};

// var myLines = [{
//     "type": "LineString",
//     "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
// }, {
//     "type": "LineString",
//     "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
// }];

var myLayer = L.geoJSON().addTo(mymap);
myLayer.addData(geojsonFeature);

var myLines = [{
    "type": "LineString",
    "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(mymap);

var states = [{
    "type": "Feature",
    "properties": {"party": "Republican"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-104.05, 48.99],
            [-97.22,  48.98],
            [-96.58,  45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"party": "Democrat"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}];

L.geoJSON(states, {
    style: function(feature) {
        switch (feature.properties.party) {
            case 'Republican': return {color: "#ff0000"};
            case 'Democrat':   return {color: "#0000ff"};
        }
    }
}).addTo(mymap);

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

/*global someGeojsonFeature*/
L.geoJSON(someGeojsonFeature, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(mymap);

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

// var geojsonFeature = {
//     "type": "Feature",
//     "properties": {
//         "name": "Coors Field",
//         "amenity": "Baseball Stadium",
//         "popupContent": "This is where the Rockies play!"
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [-104.99404, 39.75621]
//     }
// };

L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
}).addTo(mymap);

// polygon coordinates
// [41.728056, -71.475549]
// [41.727961, -71.460528]
// [41.722963, -71.466708]
// [41.723844, -71.473575]
    
var someFeatures = [{
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "show_on_map": true
    },
    "geometry": {
        "type": "Point",
        "coordinates": [41.728056, -71.475549]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Busch Field",
        "show_on_map": true
    },
    "geometry": {
        "type": "Point",
        "coordinates": [41.727961, -71.460528]
    }
}];

L.geoJSON(someFeatures, {
    filter: function(feature, layer) {
        return feature.properties.show_on_map;
    }
}).addTo(mymap);

// polygon coordinates
// [41.728056, -71.475549]
// [41.727961, -71.460528]
// [41.722963, -71.466708]
// [41.723844, -71.473575]


// var marker1 = L.marker([41.72805, -71.47554]);
// var marker2 = L.marker([41.72796, -71.46052]);
// var marker3 = L.marker([41.72296, -71.46670]);

// var places_geojson={
//     "type": "FeatureCollection",
//     "crs": {"type": "name", "properties": {"name": "urn:ogc:def:crs:OGC:1.3:CRS84"}},
    
//     "features": [
//         {"type": "Feature", "properties": {name: "marker1"}, "geometry": {"type": "Point", "coordinates": [41.728056, -71.475549] }},
//         {"type": "Feature", "properties": {name: "marker2"}, "geometry": {"type": "Point", "coordinates": [41.727961, -71.460528] }},
//         {"type": "Feature", "properties": {name: "marker3"}, "geometry": {"type": "Point", "coordinates": [41.722963, -71.466708] }}
//         ]
// };

// L.geoJSON(places_geojson,{
//         pointToLayer: function (feature, latlng){
//             return L.marker(latlng);
//         }
//     }).addTo(mymap);