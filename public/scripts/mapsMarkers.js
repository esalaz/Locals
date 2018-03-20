
console.log("ready?!");
function initMap() {

  // Zoom restriction
  var minZoomLevel = 12;

  // Marker icons
  var markerIcons = {
    flag: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    nightLife: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
  };
  var homeCity = {lat: 37.77493,lng: -122.419416};

   var map = new google.maps.Map(document.getElementById('map'), {
     center: homeCity,
     zoom: minZoomLevel,
     maxZoom: 14,
     gestureHandling: 'greedy'
   });




      // Adding Marker Function

      addMarker({
        coords:{lat: 37.741162, lng: -122.419416},
        iconImage: markerIcons.flag
      });
      addMarker({coords:{lat: 37.799263, lng: -122.397673}});
      addMarker({coords:{lat: 37.741162, lng: -122.417838}});

      function addMarker(props){
        var marker = new google.maps.Marker({
          position: props.coords,
          map: map,
          //icon: props.iconImage
        });
        if(props.iconImage){
          marker.setIcon(props.iconImage);
        }
        //Adding markers

      }//Ends addMarker function
      // Creating array of markers
      // var markers = [
      //   {
      //     location:{lat: 37.741162, lng:-122.419416},
      //     markerIcons: props.markerIcons.flag,
      //     content: '<h1>San Francisco</h1>'
      //   },
      //   {
      //     location:{lat: 37.741162, lng:-122.419416},
      //     markerIcons: props.markerIcons.flag,
      //     content: '<h1>San Francisco</h1>'
      //   }
      // ];
  }//Ends initMap









  //This needs to be change by users input from his form
  //   var myLatLng = [{
  //     lat: 37.741162,
  //     lng: -122.417838
  //   },{
  //     lat: 37.759392,
  //     lng: -122.510734
  //   },{
  //     lat: 37.799263,
  //     lng: -122.397673
  //   }];


  //   var usersMarker = new google.maps.Marker({
  //     position: myLatLng[0],
  //     map: map,
  //     title: "Home!",
  //     icon: markerIcons.flag
  //   });
  //   var usersMarker2 = new google.maps.Marker({
  //     position: myLatLng[1],
  //     map: map,
  //     title: "Home!",
  //     icon: markerIcons.otherflag
  //   });
  //   var usersMarker3 = new google.maps.Marker({
  //     position: myLatLng[2],
  //     map: map,
  //     title: "Home!"
  //   });
  //
  //   var infoWindow = new google.maps.InfoWindow({
  //     content: '<h1>Bernal Heights</h1><img src="../public/images/erik.jpg" alt=""><p> Come out and enjoy the amazing views of the city with a local!</p>'
  //   });
  //   usersMarker.addListener('click', function(){
  //     infoWindow.open(map, usersMarker);
  //   });
