function initMap() {

    const seoul = {lat: 37.563128240087636, lng: 126.98991986638902};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: seoul,
        zoom: 10
    });

    // Feature 1: Marker
    // Place a heart marker on Seoul
    var marker = new google.maps.Marker({
        map: map,
        position: seoul,
        animation: google.maps.Animation.BOUNCE,
        icon: {
            url: 'images/heartMarker.webp',
            scaledSize: new google.maps.Size(50, 50)
        }
    });

    // Feature 2: Transit Layer
    var transit = new google.maps.TransitLayer();
    transit.setMap(map);
}
  
//google.maps.event.addDomListener(window, 'load', initMap);