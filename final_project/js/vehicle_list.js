window.onload = function(){
	var vehicleList ={
		ids : [
			"veh1",
			"veh2",
			"veh3",
			"veh4",
			"veh5"
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
	
		displayVehicles: function() {
			for(var i = 0; i<this.names.length;i++) {
			var vehicle = document.getElementById(this.ids[i]);
			var list =  "<img src='"+this.pics[i]+"'style='width: 100px; height: 70px'>"+" "+this.names[i];
			vehicle.innerHTML = list;		
				};
			
		},

	};
	vehicleList.displayVehicles();
};
