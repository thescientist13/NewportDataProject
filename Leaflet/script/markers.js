// tutorial
/*global L*/
/*global mymap*/

var marker0 = L.marker([41.721074, -71.45695]).addTo(mymap);

// tutorial

var marker1 = L.marker([41.72805, -71.47554]).addTo(mymap);
var marker2 = L.marker([41.72796, -71.46052]).addTo(mymap);
var marker3 = L.marker([41.72296, -71.46670]).addTo(mymap);

marker0.bindPopup("I am a marker 0.");
marker1.bindPopup("I am a marker 1.");
marker2.bindPopup("I am a marker 2.");
marker3.bindPopup("I am a marker 3.");


// tutorial http://leafletjs.com/examples/custom-icons/
var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});

// var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'}),
//     redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
//     orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});

var greenIcon = L.icon({
    iconUrl: 'leaf-green.png',
    shadowUrl: 'leaf-shadow.png',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var redIcon = L.icon({
    iconUrl: 'leaf-red.png',
    shadowUrl: 'leaf-shadow.png',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var orangeIcon = L.icon({
    iconUrl: 'leaf-orange.png',
    shadowUrl: 'leaf-shadow.png',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
// L.marker([41.728056, -71.475549], {icon: greenIcon}).addTo(mymap);
// L.marker([41.727961, -71.460528], {icon: redIcon}).addTo(mymap);
// L.marker([41.722963, -71.466708], {icon: orangeIcon}).addTo(mymap);

greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'}),
redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});
    
    
// map center [41.721074, -71.45695]
L.marker([41.728056, -71.475549], {icon: greenIcon}).addTo(mymap).bindPopup("I am a green leaf icon.");
L.marker([41.727961, -71.460528], {icon: redIcon}).addTo(mymap).bindPopup("I am a red leaf.");
L.marker([41.722963, -71.466708], {icon: orangeIcon}).addTo(mymap).bindPopup("I am an orange leaf.");

// polygon coordinates
// [41.728056, -71.475549]
// [41.727961, -71.460528]
// [41.722963, -71.466708]
// [41.723844, -71.473575]