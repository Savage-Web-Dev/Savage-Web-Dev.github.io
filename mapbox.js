var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iaW51c21heGltdXMiLCJhIjoiY2pzbm5qY2doMGU5dzQ0bjU2eWZiZWJkeCJ9.Cm0M0FhRGX6dnLhQB6wa7g';
var map = new mapboxgl.Map({
	container: 'YOUR_CONTAINER_ELEMENT_ID',
	style: 'mapbox://styles/mapbox/streets-v11'
});