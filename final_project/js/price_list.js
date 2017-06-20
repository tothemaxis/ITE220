window.onload = function(){
	var vehicleList ={
		ids : [
			"vehh1",
			"vehh2",
			"vehh3",
			"vehh4",
			"vehh5"
		],
		names : [
			"Ehang",
			"Terrafugia",
			"Jetson",
			"PAL-V",
			"Aeromobil 3.0"
		],
		pics : [
			"images/ehang.png",
			"images/Terrafugia.jpg",
			"images/Jetson.jpg",
			"images/PAL-V.jpg",
			"images/Aeromobil3.0.jpg"
		],
		prices : [
			["150","100"],
			["160","110"],
			["170","115"],
			["170","115"],
			["180","120"]
		],
	
		displayVehiclesPrice: function() {
			for(var i = 0; i<this.names.length;i++) {
			var media = document.getElementById(this.ids[i]);
			var body = document.getElementById(this.ids[i]+"-body");

			var mediaList =  "<img src='"+this.pics[i]+"'class='media-object' style='width: 100px; height: 70px'>";
			media.innerHTML = mediaList;	

			var bodyList =  "<h4 class='media-heading'>"+this.names[i]+"</h4>"+
				"Starting from "+this.prices[i][0]+" Baht/KM, next KM charge only "+this.prices[i][1]+" Baht/KM."
			body.innerHTML = bodyList;		
				};
			
		}
	};

	vehicleList.displayVehiclesPrice();
};
