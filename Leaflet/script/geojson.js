//
/*global L*/

var places_geojson={
    "type": "FeatureCollection",
    "crs": {"type": "name", "properties": {"name": "urn:ogc:def:crs:OGC:1.3:CRS84"}},
    
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