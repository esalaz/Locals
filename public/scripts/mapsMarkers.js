console.log("ready?!");
function initMap() {

  var markerIcons = {
    flag: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    otherflag: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
  };
  var homeCity = {
    lat: 37.77493,
    lng: -122.419416
  };
  //
//This needs to me change by users input from his form
  var myLatLng = [{
    lat: 37.741162,
    lng: -122.417838
  },{
    lat: 37.759392,
    lng: -122.510734
  },{
    lat: 37.799263,
    lng: -122.397673
  }];
  var map = new google.maps.Map(document.getElementById('map'), {
    center: homeCity,
    zoom: 12,
  });
  var usersMarker = new google.maps.Marker({
    position: myLatLng[0],
    map: map,
    title: "Home!",
    icon: markerIcons.flag
  });
  var usersMarker2 = new google.maps.Marker({
    position: myLatLng[1],
    map: map,
    title: "Home!",
    icon: markerIcons.otherflag
  });
  var usersMarker3 = new google.maps.Marker({
    position: myLatLng[2],
    map: map,
    title: "Home!"
  });

  var infoWindow = new google.maps.InfoWindow({
    content: '<h1>Bernal Heights</h1><p> Come out and enjoy the amazing views of the city with a local!</p>'
  });
  usersMarker.addListener('click', function(){
    infoWindow.open(map, usersMarker);
  });
}
