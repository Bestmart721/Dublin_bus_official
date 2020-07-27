//Author: Stacy
//This file powers the tourism panel, by giving the geolocation of the user and then routing them to a desired, 
// preselected, tourist destination! There are three parts to the logic, 1. Getting the current position of the user.
// 2. diplaying the current location on the map. and 3. calculating the route between the current location and the destination .  


// The section below initiates the direction service and some variables for the route to the guinness store house
directionsService = new google.maps.DirectionsService();
directionsDisplay = new google.maps.DirectionsRenderer();
let start_marker;
let end_marker;
const Guinness = document.querySelector('#Guinness');
let destination = new google.maps.LatLng(53.3419905,-6.2954444);
Guinness.addEventListener('click', getLocation);

// this function uses geolocation to find an approximate location of the user.
function getLocation(){
    navigator.geolocation.getCurrentPosition(function(position){
        var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); // this is the user's location! 
        initMap(pos); // the location is then passed to the initMap function to be found on the map! 
    });
}

//Below is the function for putting the user's location on our map. 
function initMap(location){ 
    map = new google.maps.Map(document.querySelector("#map"),{
        center: location,
        zoom: 16,
    });

    directionsDisplay.setMap(map);
    

    calcRoute(location, destination); // this call the calcRoute function and passes the current location and desired destination to the function
}


// Here is the calculation function that creates the path on the map between the user and the destination 
function calcRoute(start,destination){
    let request = {
        origin: start, //lat lng of user
        destination: destination,
        travelMode: google.maps.TravelMode.TRANSIT,
        transitOptions: {
            modes: ['BUS'],
            routingPreference: 'FEWER_TRANSFERS'
        },
    };
    directionsService.route(request, function(response, status){
        if(status == 'OK'){
            directionsDisplay.setDirections(response);
                start_marker = new google.maps.Marker({
                position: start,
                map: map,
                label: 'you are here',
            });
                end_marker = new google.maps.Marker({
                position: destination,
                map: map,
                label: 'Here you will go',
            });
        }
    })

}