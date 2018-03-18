console.log("ready?!");
function initMap() {
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
    zoom: 12
  });
  var usersMarker = new google.maps.Marker({
    position: myLatLng[0],
    map: map,
    title: "Home!"
  });
  var usersMarker2 = new google.maps.Marker({
    position: myLatLng[1],
    map: map,
    title: "Home!"
  });
  var usersMarker3 = new google.maps.Marker({
    position: myLatLng[2],
    map: map,
    title: "Home!"
  });

}
