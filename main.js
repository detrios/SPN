function onDeviceReady() {
    navigator.splashscreen.hide();
	window.plugin.notification.local.add({ message: 'SPN lancé!' });
	
}
document.addEventListener("deviceready", onDeviceReady, false);



$(document).ready(function (){

$('#test').click(function(){
	window.plugins.videoPlayer.play("http://www.youtube.com/watch?v=E0UV5i5jY50");
	alert('clicked');
});

/*$.ajax({
   type: 'GET',
    url: 'http://www.starpirates.fr/API/API.php',
    jsonpCallback: 'API_SC2',
    contentType: "application/json",
    dataType: 'jsonp',
    data:'action=ship',
    async:true,
    success: function(data) {
       $('#ship').html('');
		for(var i =0; i< data.ship.total; i++){
			$('#ship').append('<img width="90" onclick="location.href=this.src" src="https://robertsspaceindustries.com/rsi/static/images/game/ship-specs/'+data.ship[i].imageurl+'" style="float:left" />'+data.ship[i].manufacturer+' : '+data.ship[i].title+'<br style="clear:both" />');
		}
    },
    error: function(e) {
       console.log(e.message);
    }
});*/

});


