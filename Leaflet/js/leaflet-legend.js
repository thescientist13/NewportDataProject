// source https://www.npmjs.com/package/leaflet-legend
// add legend for marker colors
/* global L*/
/* global map*/
/* global $*/

var Legend =  new L.Control.Legend({
        position: 'topleft',
        collapsed: true,
        controlButton: {
            title: "Legend"
        }});
map.addControl( Legend );
 
$(".legend-container").append( $("#legend") );
$(".legend-toggle").append( "<i class='legend-toggle-icon fa fa-info fa-2x' style='color: #000'></i>" );