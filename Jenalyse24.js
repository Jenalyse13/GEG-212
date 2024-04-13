// Initialize Leaflet map
var map = L.map('nymap').setView([40.682611238292886, -73.97565749401414], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var marker = L.marker([40.683311452523625, -73.97619537068677]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Fini Pizza Barclays Plaza Downtown Brooklyn</b><br>This is a Leaflet map.").openPopup();
