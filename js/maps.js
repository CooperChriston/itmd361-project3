var map;
var marker;
const seoul = {lat: 37.563128240087636, lng: 126.98991986638902};
const tokyo = {lat: 35.696918456946136, lng: 139.76791730924373};
var curLoc = seoul;
var info = 0;
var layers = 0;
var transit = new google.maps.TransitLayer();
var traffic = new google.maps.TrafficLayer();
var bike = new google.maps.BicyclingLayer();

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: curLoc,
        zoom: 10
    });

    // Feature 1: Marker and Marker location changing
    // Place a heart marker on Seoul
    marker = new google.maps.Marker({
        map: map,
        position: curLoc,
        animation: google.maps.Animation.BOUNCE,
        icon: {
            url: 'images/heartMarker.webp',
            scaledSize: new google.maps.Size(50, 50)
        }
    });

    document.getElementById('changeLocButton').addEventListener('click', function() {changeLocation()});

    // Feature 2: Info window of specific locations
    document.getElementById('showInfoButton').addEventListener('click', function() {showInfo()});

    // Feature 3: Layers
    document.getElementById('showLayerButton').addEventListener('click', function() {showLayers()});
    transit = new google.maps.TransitLayer();
    traffic = new google.maps.TrafficLayer();
    bike = new google.maps.BicyclingLayer();
}

function changeLocation() {

    if (curLoc == seoul) {
        curLoc = tokyo;
        marker.setPosition(tokyo);
        map.setCenter(curLoc);

    } else {
        curLoc = seoul;
        marker.setPosition(seoul);
        map.setCenter(curLoc);
    }
}

function showInfo() {

    if (info == 1) {

        infoWindow.close();
        info = 0;

    } else {

        if (curLoc == seoul) {

            infoWindow = new google.maps.InfoWindow({
                content: "Seoul is one of the many places I would like to visit later on in life.",
                ariaLabel: "Seoul",
            });
            
        } else {
    
            infoWindow = new google.maps.InfoWindow({
                content: "Tokyo is one of the many places I would like to visit later on in life.",
                ariaLabel: "Tokyo"
            });
        }

        infoWindow.open({
            anchor: marker,
            map: map,
        });

        info = 1;
    }
}

function showLayers() {

    if (layers == 1) {

        transit.setMap(null);
        traffic.setMap(null);
        bike.setMap(null);
        layers = 0;

    } else {
        
        transit.setMap(map);
        traffic.setMap(map);
        bike.setMap(map);
        layers = 1;
    }
}