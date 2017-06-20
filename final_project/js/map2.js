var map;
var marker, marker1, marker2, marker3, marker4, marker5;
var iconBase = "http://maps.google.com/mapfiles/kml/paddle/";

var markV1 = document.getElementById("veh1");
var markV2 = document.getElementById("veh2");
var markV3 = document.getElementById("veh3");
var markV4 = document.getElementById("veh4");
var markV5 = document.getElementById("veh5");
var feature1 = [[13.77906809745881,100.47237396240234], 
				[13.744054025072476,100.45967102050781], 
				[13.707367001939167,100.63270568847656]];
var feature2 = [[13.696693336737656,100.40473937988281], 
				[13.864747046142286,100.71990966796875], 
				[13.900076247460317,100.54618835449219]];
var feature3 = [[13.842080197940826,100.63751220703125], 
				[13.766730403317952,100.57777404785156], 
				[13.951393970006746,100.45280456542969]]; 
var feature4 = [[13.6306392705155,100.53794860839844], 
				[13.678013256725489,100.67115783691406], 
				[13.828745725363335,100.52078247070312]];
var feature5 = [[13.690022049868016,100.7501220703125], 
				[13.71270365269818,100.44662475585938], 
				[13.644652285403883,100.469970703125]];    

function init_map(){
	var myOptions = {
  		zoom:10,
   		center:new google.maps.LatLng(13.7563309,100.50176510000006),
  		mapTypeId: google.maps.MapTypeId.ROADMAP
    	};
	map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
	marker = new google.maps.Marker({map: map,animation: google.maps.Animation.DROP,position: new google.maps.LatLng(13.7563309,100.50176510000006)});
    infowindow = new google.maps.InfoWindow({content:'<strong>You are Here</strong>'});
    google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
    marker.addListener('click', toggleBounce);
    infowindow.open(map,marker);

    for(var i = 0; i<feature1.length;i++){
	    marker1 = new google.maps.Marker({
	    	position : new google.maps.LatLng(feature1[i][0], feature1[i][1]),
	   		map: map,
	   		icon: iconBase + 'blu-stars.png',
	   		visible : false
	  	});
	  	marker2 = new google.maps.Marker({
	    	position : new google.maps.LatLng(feature2[i][0], feature2[i][1]),
	   		map: map,
	   		icon: iconBase + 'grn-stars.png',
	   		visible : false
	  	});
	  	marker3 = new google.maps.Marker({
	    	position : new google.maps.LatLng(feature3[i][0], feature3[i][1]),
	   		map: map,
	   		icon: iconBase + 'pink-stars.png',
	   		visible : false
	  	});
	  	marker4 = new google.maps.Marker({
	    	position : new google.maps.LatLng(feature4[i][0], feature4[i][1]),
	   		map: map,
	   		icon: iconBase + 'purple-stars.png',
	   		visible : false
	  	});
	  	marker5 = new google.maps.Marker({
	    	position : new google.maps.LatLng(feature5[i][0], feature5[i][1]),
	   		map: map,
	   		icon: iconBase + 'ylw-stars.png',
	   		visible : false
	  	});  	  	
	};

google.maps.event.addDomListener(markV1, 'click', function() {
	if (marker1.getVisible() == false) {
		marker1.setVisible(true);
	} else {
		marker1.setVisible(false);
	};
});
google.maps.event.addDomListener(markV2, 'click', function() {
	if (marker2.getVisible() == false) {
		marker2.setVisible(true);
	} else {
		marker2.setVisible(false);
	};
});
google.maps.event.addDomListener(markV3, 'click', function() {
	if (marker3.getVisible() == false) {
		marker3.setVisible(true);
	} else {
		marker3.setVisible(false);
	};
});
google.maps.event.addDomListener(markV4, 'click', function() {
	if (marker4.getVisible() == false) {
		marker4.setVisible(true);
	} else {
		marker4.setVisible(false);
	};
});
google.maps.event.addDomListener(markV5, 'click', function() {
	if (marker5.getVisible() == false) {
		marker5.setVisible(true);
	} else {
		marker5.setVisible(false);
	};
});


	function toggleBounce() {
		if (marker.getAnimation() !== null) {
	    	marker.setAnimation(null);
	  	} else {
	    	marker.setAnimation(google.maps.Animation.BOUNCE);
	  	}
	};      
};

google.maps.event.addDomListener(window, 'load', init_map);

