//var = 変数

var map = L.map('map').setView([35.680899409847584, 139.76712226867676], 5);
L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a>'})
.addTo(map);
L.control.scale()
.addTo(map);
//function = 関数の定義
//return = 引数を返すように指示する


//日本
$.getJSON("15-0101.geojson", function(data) {
var point = L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
    return L.marker(latlng,100, {
    color: 'green'
    })},
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.施設名称);
}
});
point.addTo(map)
});
