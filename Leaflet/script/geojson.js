//

/*global L*/

/*
example .geojson file
{
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
    { "type": "Feature", "properties": { "layer": 0, "highway": "footway", "footway": "crossing" }, "geometry": { "type": "LineString", "coordinates": [ [ -122.034302600000018, 37.30423540000001 ], [ -122.0342822, 37.3040975 ] ] } },
    { "type": "Feature", "properties": { "layer": 0, "highway": "footway", "footway": "crossing" }, "geometry": { "type": "LineString", "coordinates": [ [ -122.033809750159989, 37.303760214562843 ], [ -122.033748607028969, 37.303882324886331 ] ] } }
] } 

*/

var places_geojson={
    "type": "FeatureCollection",
    "crs": {"type": "name", "properties": {"name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    
    "features": [
        {"type": "Feature", "properties": {name: "marker1"}, "geometry": {"type": "Point", "coordinates": [41.728056, -71.475549] }},
        {"type": "Feature", "properties": {name: "marker2"}, "geometry": {"type": "Point", "coordinates": [41.727961, -71.460528] }},
        {"type": "Feature", "properties": {name: "marker3"}, "geometry": {"type": "Point", "coordinates": [41.722963, -71.466708] }}
        ]
};

L.geoJSON(places_geojson,{
        pointToLayer: function (feature, latlng){
            return L.marker(latlng);
        }
    }).addTo(mymap);
    
    
