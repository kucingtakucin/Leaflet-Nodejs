// Initialize leaflet.js
let L = require('leaflet');
let $ = require('jquery');

// Initialize the map
let map = L.map('map', {
	center: [-7.60773230, 110.98023906],
	zoom: 13,
	layers: [
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			id: 'basemap',
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}),
		L.marker().setLatLng([-7.60773230, 110.98023906])
		.bindPopup("<b>Hello world!</b><br>I am a popup.")
		.openPopup()
	]
});

map.on('click', function (event) {
	L.popup().setLatLng(event.latlng)
		.setContent("You clicked the map at " + event.latlng.toString())
		.openOn(map);
})

fetch(`https://raw.githubusercontent.com/AdamArthurF/Leaflet-Nodejs/main/examples/001-Leaflet-BaseLayers/map-kab-kra.geojson`)
	.then(response => response.json())
	.then(response => {
		L.geoJSON(response).addTo(map)
	})

fetch(`https://raw.githubusercontent.com/AdamArthurF/Leaflet-Nodejs/main/examples/001-Leaflet-BaseLayers/kecamatan.json`)
	.then(response => response.json())
	.then(response => {
		console.log(response)
	})