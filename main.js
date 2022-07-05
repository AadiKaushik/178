let latitude = 28.028273
let longitude = 73.336809

mapboxgl.accessToken  = "pk.eyJ1IjoiYWFkaS1rYXVzaGlrIiwiYSI6ImNsNTgyNDRiMzF5b3UzZXBwYTY4dG8xa2kifQ.G3vohSNZGTCuEKhP3n9Hew"
var map = new mapboxgl.Map(
    {
        container:'map',
        style:'mapbox://styles/mapbox/streets-v11',
        center:[longitude,latitude],
        zoom : 16
    }
)
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions : {
            enableHighAccuracy: true
        },
        trackUserLocation : true
    })
)