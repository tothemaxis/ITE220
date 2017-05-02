window.onload = function(){
	function render (){
		var bangkok = document.getElementById("bangkok");
		var london = document.getElementById("london");
		var seoul = document.getElementById("seoul");

		bangkok.addEventListener("click",function(){
			// alert("bangkok");

			var url1 = "http://api.openweathermap.org/data/2.5/weather?q=bangkok&appid=bda6b58acb90f398c2d0c012e0a274cf";
			$.ajax({
				type: "GET",
				url : url1,
				success:function(data){
					var temp = data.main.temp-273.15;
					var tempp = temp.toFixed(2);
					var humid = data.main.humidity;
					var ele = document.getElementById("temp");
					var ele1 = document.getElementById("humid")
					var icon = data.weather[0].icon;
					var ele2 = document.getElementById("icon");
					// console.log(data);
					// console.log(temp);
					ele.innerHTML = "Temperature<br/>"+ tempp+"'C";
					ele1.innerHTML = "Humidity<br/>"+humid+"%";
					ele2.innerHTML = "<img src='http://openweathermap.org/img/w/"+icon+".png'/>";
				}
			});
		});

		london.addEventListener("click",function(){
			var url2 = "http://api.openweathermap.org/data/2.5/weather?q=london&appid=bda6b58acb90f398c2d0c012e0a274cf";
			$.ajax({
				type: "GET",
				url : url2,
				success:function(data){
					var temp = data.main.temp-273.15;
					var tempp = temp.toFixed(2);
					var humid = data.main.humidity;
					var ele = document.getElementById("temp");
					var ele1 = document.getElementById("humid")
					var icon = data.weather[0].icon;
					var ele2 = document.getElementById("icon");
					// console.log(data);
					// console.log(temp);
					ele.innerHTML = "Temperature<br/>"+ tempp+"'C";
					ele1.innerHTML = "Humidity<br/>"+humid+"%";
					ele2.innerHTML = "<img src='http://openweathermap.org/img/w/"+icon+".png'/>";
				}
			});
		});

		seoul.addEventListener("click",function(){
			var url3 = "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=bda6b58acb90f398c2d0c012e0a274cf";
			$.ajax({
				type: "GET",
				url : url3,
				success:function(data){
					var temp = data.main.temp-273.15;
					var tempp = temp.toFixed(2);
					var humid = data.main.humidity;
					var ele = document.getElementById("temp");
					var ele1 = document.getElementById("humid")
					var icon = data.weather[0].icon;
					var ele2 = document.getElementById("icon");
					// console.log(data);
					// console.log(temp);
					ele.innerHTML = "Temperature<br/>"+ tempp+"'C";
					ele1.innerHTML = "Humidity<br/>"+humid+"%";
					ele2.innerHTML = "<img src='http://openweathermap.org/img/w/"+icon+".png'/>";
				}
			});
		});
	}
	render();
};