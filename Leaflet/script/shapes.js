// shapes
/*global L*/
var circle0 = L.circle([41.721074, -71.45695], {
    color: 'grey',
    // fillColor: '#f03',
    fillOpacity: 0.1,
    radius: 500
}).addTo(mymap);

var polygon0 = L.polygon([
    [41.728056, -71.475549],
    [41.727961, -71.460528],
    [41.722963, -71.466708],
    [41.723844, -71.473575]
]).addTo(mymap);

// marker0.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle0.bindPopup("I am a circle.");
polygon0.bindPopup("I am a polygon.");
