var map;
var marker;
const seoul = {lat: 37.563128240087636, lng: 126.98991986638902};
const tokyo = {lat: 35.696918456946136, lng: 139.76791730924373}

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: seoul,
        zoom: 10
    });

    // Feature 1: Marker and Marker location changing
    // Place a heart marker on Seoul
    marker = new google.maps.Marker({
        map: map,
        position: seoul,
        animation: google.maps.Animation.BOUNCE,
        icon: {
            url: 'images/heartMarker.webp',
            scaledSize: new google.maps.Size(50, 50)
        }
    });

    function changeLocation() {

        if (marker.getPosition() == seoul) {

            marker.setPosition(tokyo);

        } else {

            marker.setPosition(seoul);
        }
    }

    // // Feature 2: Transit Layer
    // const transit = new google.maps.TransitLayer();
    // transit.setMap(map);

    // const traffic = new google.maps.TrafficLayer();
    // traffic.setMap(map);

    // const bike = new google.maps.BicyclingLayer();
    // bike.setMap(map);

    // Feature 2: Info window of specific locations
    const infowindow = new google.maps.InfoWindow({
        content: "Seoul is one of the many places I would like to visit later on in life.",
        ariaLabel: "Seoul",
      });

    marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
        });
    });
}