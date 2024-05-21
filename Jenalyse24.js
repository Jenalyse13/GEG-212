// Initialize Leaflet map
var map = L.map('nymap').setView([40.682611238292886, -73.97565749401414], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Marker and popup data
var locations = [
    {
        coords: [40.683311452523625, -73.97619537068677],
        title: "Fini Pizza Barclays Plaza Downtown Brooklyn",
        imageUrl: "https://jenalyse13.github.io/GEG-212/GEG212 Images/Fini Pizza.jpg.webp"
    },
    {
        coords: [40.69426080526414, -73.84961585947472],
        title: "Paneorama Bakery & Pastry Shop",
        imageUrl: "https://jenalyse13.github.io/GEG-212/GEG212 Images/Paneorama.jpg"
    },
    {
        coords: [40.70139399691619, -74.01330340207514],
        title: "Staten Island South Ferry",
        imageUrl: "https://jenalyse13.github.io/GEG-212/GEG212 Images/Staten_Island_South_Ferry.jpg"
    },
    {
        coords: [40.70294229941433, -74.01536271731277],
        title: "The Battery Park",
        imageUrl: "https://jenalyse13.github.io/GEG-212/GEG212 Images/Battery-Park-Manhattan.jpg"
    }
];

// Add markers and popups
locations.forEach(function(location) {
    var marker = L.marker(location.coords).addTo(map);
    marker.bindPopup(`
        <b>${location.title}</b><br>
        <img src="${location.imageUrl}" style="width: 100px; height: auto;">
    `);
});

// Function to load GeoJSON files
function loadGeoJSON(url, style) {
    fetch(url)
        .then(response => response.json())
        .then(geojson => {
            L.geoJSON(geojson, {
                style: style
            }).addTo(map);
        })
        .catch(error => {
            console.error('Error loading GeoJSON file:', error);
        });
}

// Load daytime and nighttime routes
var lineStyle = {
    color: 'red',
    weight: 5,
    opacity: 0.7
};
loadGeoJSON('https://jenalyse13.github.io/GEG-212/Jenalyse_daytimeroute.geojson', lineStyle);
loadGeoJSON('https://jenalyse13.github.io/GEG-212/Jenalyse_nighttimeroute.geojson', lineStyle);

// Define polygon style
var polygonStyle = {
    fillColor: 'black',
    fillOpacity: 0.5
};

// Load polygons
loadGeoJSON('https://jenalyse13.github.io/GEG-212/Fini Pizza Barclays Polygon.geojson', polygonStyle);
loadGeoJSON('https://jenalyse13.github.io/GEG-212/Paneorama polygon.geojson', polygonStyle);
loadGeoJSON('https://jenalyse13.github.io/GEG-212/Staten Island South Ferry Polygon.geojson', polygonStyle);
loadGeoJSON('https://jenalyse13.github.io/GEG-212/Battery Park Polygon.geojson', polygonStyle);

// Function to set style based on category
function getFeatureStyle(feature) {
    var categoryColors = {
        "1": "red",
        "2": "orange",
        "3": "yellow",
        "4": "green",
        "X": "gray" // Default color for other categories
    };
    var category = feature.properties.hurricane_; // Adjust property name
    var color = categoryColors[category] || "gray"; // Default color if category not found
    var fillOpacity = category === "X" ? 0 : 0.1; // Set fill opacity to 0 for "X" category
    return {
        fillColor: color,
        fillOpacity: fillOpacity,
    };
}
// Load the GeoJSON polygon file
fetch('https://jenalyse13.github.io/GEG-212/Hurricane Evacuation Zones.geojson')
.then(response => response.json())
.then(geojson => {
    // Add the GeoJSON polygons to the map with customized style
    L.geoJSON(geojson, {
        style: getFeatureStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});
