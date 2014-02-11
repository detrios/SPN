function onDeviceReady() {
    navigator.splashscreen.hide();
}
document.addEventListener("deviceready", onDeviceReady, false);

$(document).ready(function (){


$.ajax({
   type: 'GET',
    url: 'http://www.starpirates.fr/API/API.php',
    jsonpCallback: 'API_SC2',
    contentType: "application/json",
    dataType: 'jsonp',
    data:'action=ship',
    async:true,
    success: function(data) {
      
    },
    error: function(e) {
       console.log(e.message);
    }
});

});
