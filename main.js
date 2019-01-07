
mapboxgl.accessToken = "pk.eyJ1IjoibmFvZnVtaS1mdWppaSIsImEiOiJjanE0eTVzYnExeXZtNDRzYnFtNWxkYTIwIn0.64rj32UqyAVCoUK8nl5TbA"
var map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/mapbox/streets-v9",
	center: [139.716053, 35.664586],
	zoom: 15
})

map.on("load", function () {

	map.addLayer({
		"id": "points",
		"type": "symbol",
		"source": {
			"type": "geojson",
			"data": {
				"type": "FeatureCollection",
				"features": [
					{
						"type": "Feature",
						"geometry": {
							"type": "Point",
							"coordinates": [139.716053, 35.664586]
						},
						"properties": {
							"title": "株式会社Gisuco",
						}
					}
				]
			}
		},
		"layout": {
			"icon-image": "{icon}-15",
			"text-field": "{title}",
			"text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
			"text-offset": [0, 0.6],
			"text-anchor": "top"
		}
	})
})

