function init_map(){
  var myOptions = {
  		zoom:10,
   		center:new google.maps.LatLng(13.7563309,100.50176510000006),
  		mapTypeId: google.maps.MapTypeId.ROADMAP
    	};

  var map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
  var marker = new google.maps.Marker({map: map,animation: google.maps.Animation.DROP,position: new google.maps.LatLng(13.7563309,100.50176510000006)});
      infowindow = new google.maps.InfoWindow({content:'<strong>You are Here</strong>'});
      google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
      marker.addListener('click', toggleBounce);
      infowindow.open(map,marker);

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
};      

  var iconBase = 'http://maps.google.com/mapfiles/kml/paddle/';
  var icons = {
  	ehang: {
      icon: iconBase + 'blu-stars.png'
    	},
    	terrafugia: {
      icon: iconBase + 'grn-stars.png'
    	},
    	jetson: {
      icon: iconBase + 'pink-stars.png'
    	},
    	palV: {
      icon: iconBase + 'purple-stars.png'
    	},
    	aeromobil: {
      icon: iconBase + 'ylw-stars.png'
    	}
  };	
  var feature1 = [
        {
        	position: new google.maps.LatLng(13.77906809745881,100.47237396240234),
          type: 'ehang'
        }, {
        	position: new google.maps.LatLng(13.744054025072476,100.45967102050781),
          type: 'ehang'
        }, {
        	position: new google.maps.LatLng(13.707367001939167,100.63270568847656),
          type: 'ehang'
        }
      ];
      var feature2 = [ 
        {	
        	position: new google.maps.LatLng(13.696693336737656,100.40473937988281),
          type: 'terrafugia'
        }, {
        	position: new google.maps.LatLng(13.864747046142286,100.71990966796875),
          type: 'terrafugia'
        }, {
        	position: new google.maps.LatLng(13.900076247460317,100.54618835449219),
          type: 'terrafugia'
        }
      ];
      var feature3 = [
        {
        	position: new google.maps.LatLng(13.842080197940826,100.63751220703125),
          type: 'jetson'
        }, {
        	position: new google.maps.LatLng(13.766730403317952,100.57777404785156),
          type: 'jetson'
        }, {
        	position: new google.maps.LatLng(13.951393970006746,100.45280456542969),
          type: 'jetson'
        }
      ]; 
      var feature4 = [	
        {
        	position: new google.maps.LatLng(13.6306392705155,100.53794860839844),
          type: 'palV'
        }, {
       	  position: new google.maps.LatLng(13.678013256725489,100.67115783691406),
          type: 'palV'
        }, {
        	position: new google.maps.LatLng(13.828745725363335,100.52078247070312),
          type: 'palV'
        }
      ];
      var feature5 = [
       {
        	position: new google.maps.LatLng(13.690022049868016,100.7501220703125),
          type: 'aeromobil'
        }, {
        	position: new google.maps.LatLng(13.71270365269818,100.44662475585938),
          type: 'aeromobil'
        }, {
        	position: new google.maps.LatLng(13.644652285403883,100.469970703125),
          type: 'aeromobil'
        }
      ];    	

  // var ids = ["veh1","veh2","veh3","veh4","veh5"];
  // var features = ["feature1","feature2","feature3","feature4","feature5"];

 
  var locateV1 =document.getElementById("veh1");
    google.maps.event.addDomListener(locateV1, 'click', function(){
      setMarkers = feature1.forEach(function(feature) {
            var marker = new google.maps.Marker({
                  position: feature.position,
                  icon: icons[feature.type].icon,
                  map: map,
                  visible : true
                });
      });
    });

  var locateV2 =document.getElementById("veh2");
    google.maps.event.addDomListener(locateV2, 'click', function(){
      setMarkers = feature2.forEach(function(feature) {
            var marker = new google.maps.Marker({
                  position: feature.position,
                  icon: icons[feature.type].icon,
                  map: map,
                  visible : true
                });
      });
    }); 

  var locateV3 =document.getElementById("veh3");
    google.maps.event.addDomListener(locateV3, 'click', function(){
      setMarkers = feature3.forEach(function(feature) {
            var marker = new google.maps.Marker({
                  position: feature.position,
                  icon: icons[feature.type].icon,
                  map: map,
                  visible : true
                });
      });
    }); 
    
  var locateV4 =document.getElementById("veh4");
    google.maps.event.addDomListener(locateV4, 'click', function(){
      setMarkers = feature4.forEach(function(feature) {
            var marker = new google.maps.Marker({
                  position: feature.position,
                  icon: icons[feature.type].icon,
                  map: map,
                  visible : true
                });
      });
    }); 
    
  var locateV5 =document.getElementById("veh5");
    google.maps.event.addDomListener(locateV5, 'click', function(){
      setMarkers = feature5.forEach(function(feature) {
            var marker = new google.maps.Marker({
                  position: feature.position,
                  icon: icons[feature.type].icon,
                  map: map,
                  visible : true
                });
      });
    });       

   // 	for(var i = 0; i<ids.length;i++){
			// var markers =  document.getElementById(ids[i]).onclick = function(){
					// markers = features[i].forEach(function(feature) {
			  //        	var marker = new google.maps.Marker({
  			//             	position: feature.position,
  			//             	icon: icons[feature.type].icon,
  			//             	map: map,
  			//             	visible : true
			  //         	  });
     //      });
				
		 //  };
   //  };

	// var location1 = document.getElementById("veh1").onclick = function(){
	//    	location1 = feature1.forEach(function(feature) {
 //         	var marker = new google.maps.Marker({
 //            	position: feature.position,
 //            	icon: icons[feature.type].icon,
 //            	map: map,
 //            	visible : true
 //          	});
 //        });
 //    };
 //    var location2 = document.getElementById("veh2").onclick = function(){
	//    	location2 = feature2.forEach(function(feature) {
 //         	var marker = new google.maps.Marker({
 //            	position: feature.position,
 //            	icon: icons[feature.type].icon,
 //            	map: map
 //          	});
 //        });
 //    };
};

google.maps.event.addDomListener(window, 'load', init_map);

