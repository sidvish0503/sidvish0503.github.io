// 47.3744 N 8.5411 E
var coordinates = [47.3744, 8.5411];
var popupcode = `<center>
<h3>Hello from Zurich, Switzerland!</h3>
<iframe width="200" height="100" src="https://www.youtube.com/embed/2C6O1_7ZSEw?si=T3BkqFVPBO45ZpcA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>`;
var marker1 = [46.5475, 7.9851];
var markercode = `<center>
<h3>Jungfraujoch Pass</h3>
<a href="travel.jpg">
<img src="travel.jpg" title="Jungfraujoch Pass" height="100" width="200"
</a>
<center>`
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.circle(coordinates, {"title": "Hello from Zurich, Switzerland!",
                      color: "black",
                      fillColor: "#ff96ef", 
                      radius: 100}).bindPopup(popupcode).addTo(map);
L.marker(marker1).bindPopup(markercode).addTo(map);
