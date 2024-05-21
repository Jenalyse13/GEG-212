// Initialize Leaflet map
var map = L.map('nymap').setView([40.682611238292886, -73.97565749401414], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 1A Add a marker to the map for New York City
var baraclays_pizza = L.marker([40.683311452523625, -73.97619537068677]).addTo(map);

// 1B Add a popup to the marker
baraclays_pizza.bindPopup(`
                          <b>Fini Pizza Barclays Plaza Downtown Brooklyn</b><br>
                          <img src="https://jenalyse13.github.io/GEG-212/GEG212 Images/Fini Pizza.jpg.webp" style="width: 100px; height: auto;">
                          `).openPopup();

// 2A Add a marker to the map for New York City
var paneorama = L.marker([40.69426080526414, -73.84961585947472]).addTo(map);

// 2B Add a popup to the marker
paneorama.bindPopup(`
                    <b>Paneorama Bakery & Pastry Shop</b><br>
                    <img src="https://jenalyse13.github.io/GEG-212/GEG212 Images/Paneorama.jpg" style="width: 100px; height: auto;">
                          `).openPopup();


// 3A Add a marker to the map for New York City
var south_ferry = L.marker([40.70139399691619, -74.01330340207514]).addTo(map);

// 3B Add a popup to the marker
south_ferry.bindPopup(`
                      <b>Staten Island South Ferry</b><br>
                       <img src="https://jenalyse13.github.io/GEG-212/GEG212 Images/Staten_Island_South_Ferry.jpg" style="width: 100px; height: auto;">
                          `).openPopup();

// 4A Add a marker to the map for New York City
var battery_park = L.marker([40.70294229941433, -74.01536271731277]).addTo(map);

// 4B Add a popup to the marker
battery_park.bindPopup(`
                      <b>The Battery Park</b><br>
                       <img src="https://jenalyse13.github.io/GEG-212/GEG212 Images/Battery-Park-Manhattan.jpg" style="width: 100px; height: auto;">
                          `).openPopup();


// Daytime: Load the GeoJSON line file
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


// Nighttime:Load the GeoJSON line file
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

// 1 Load the GeoJSON polygon file
fetch('https://jenalyse13.github.io/GEG-212/Fini Pizza Barclays Polygon.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the polygon
    var polygonStyle = {
        fillColor: 'black', // Fill color
        fillOpacity: 0.5, // Fill opacity
    };

    // Add the GeoJSON polygon to the map
    L.geoJSON(geojson, {
        style: polygonStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});

var categoryColors = {
    "1": "red",
    "2": "orange",
    "3": "yellow",
    "4": "green",
    "X": "gray" // Default color for other categories
};


// Function to set style based on category
function getFeatureStyle(feature) {
    var category = feature.properties.hurricane_; // Adjust property name
    var color = categoryColors[category] || "gray"; // Default color if category not found
    var fillOpacity = category === "X" ? 0 : 0.1; // Set fill opacity to 0 for "X" category
    return {
        fillColor: color,
        fillOpacity: fillOpacity,
    };
}

// 2 Load the GeoJSON polygon file
fetch('https://jenalyse13.github.io/GEG-212/Paneorama polygon.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the polygon
    var polygonStyle = {
        fillColor: 'black', // Fill color
        fillOpacity: 0.5, // Fill opacity
    };

    // Add the GeoJSON polygon to the map
    L.geoJSON(geojson, {
        style: polygonStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});

// 3 Load the GeoJSON polygon file
fetch('https://jenalyse13.github.io/GEG-212/Staten Island South Ferry Polygon.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the polygon
    var polygonStyle = {
        fillColor: 'black', // Fill color
        fillOpacity: 0.5, // Fill opacity
    };

    // Add the GeoJSON polygon to the map
    L.geoJSON(geojson, {
        style: polygonStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});

// 4 Load the GeoJSON polygon file
fetch('https://jenalyse13.github.io/GEG-212/Battery Park Polygon.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the polygon
    var polygonStyle = {
        fillColor: 'black', // Fill color
        fillOpacity: 0.5, // Fill opacity
    };

    // Add the GeoJSON polygon to the map
    L.geoJSON(geojson, {
        style: polygonStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});

