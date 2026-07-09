// 47.3744 N 8.5411 E
var coordinates = [47.3744, 8.5411];
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.marker(coordinates, {"title": "Hello from Zurich, Switzerland!"}).bindPopup("<p>Hello From Zurich, Switzerland!</p>").addTo(map);
