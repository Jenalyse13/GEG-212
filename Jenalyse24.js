// Initialize Leaflet map
var map = L.map('nymap').setView([40.682611238292886, -73.97565749401414], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 1A Add a marker to the map for New York City
var baraclays_pizza = L.marker([40.683311452523625, -73.97619537068677]).addTo(map);

// 1B Add a popup to the marker
baraclays_pizza.bindPopup("<b>Fini Pizza Barclays Plaza Downtown Brooklyn</b><br>This is a Leaflet map.").openPopup();

// 2A Add a marker to the map for New York City
var paneorama = L.marker([40.69426080526414, -73.84961585947472]).addTo(map);

// 2B Add a popup to the marker
paneorama.bindPopup("<b>Paneorama Bakery & Pastry Shop</b><br>This is a Leaflet map.").openPopup();


// 3A Add a marker to the map for New York City
var south_ferry = L.marker([40.70139399691619, -74.01330340207514]).addTo(map);

// 3B Add a popup to the marker
south_ferry.bindPopup("<b>Staten Island South Ferry</b><br>This is a Leaflet map.").openPopup();

// 4A Add a marker to the map for New York City
var battery_park = L.marker([40.70294229941433, -74.01536271731277]).addTo(map);

// 4B Add a popup to the marker
battery_park.bindPopup("<b>The Battery Park</b><br>This is a Leaflet map.").openPopup();



// Load the GeoJSON line file
fetch('https://jenalyse13.github.io/GEG-212/Jenalyse_daytimeroute.geojson')
    .then(response => response.json())
    .then(geojson => {
        // Customize the style of the line
        var lineStyle = {
            color: 'red', // Change color as neededFDR ?
"

            weight: 5, // Change weight as needed
            opacity: 0.7 // Change opacity as needed
        };

        // Add the GeoJSON line to the map
        L.geoJSON(geojson, {
            style: lineStyle
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error loading GeoJSON file:', error);
    });


// Load the GeoJSON line file
fetch('https://jenalyse13.github.io/GEG-212/Jenalyse_nighttimeroute.geojson')
    .then(response => response.json())
    .then(geojson => {
        // Customize the style of the line
        var lineStyle = {
            color: 'red', // Change color as needed
            weight: 5, // Change weight as needed
            opacity: 0.7 // Change opacity as needed
        };

        // Add the GeoJSON line to the map
        L.geoJSON(geojson, {
            style: lineStyle
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error loading GeoJSON file:', error);
    });

