//
/*global L*/
/*global mymap*/
var popup = L.popup();

mymap.on('click', onMapClick);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
