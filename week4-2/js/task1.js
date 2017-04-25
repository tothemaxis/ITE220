window.onload = function(){
var task1 = {
	render: function(){
		var word ="Web 2 is Awesome!";
		document.getElementById("screenX").textContent = window.screenX;
		document.getElementById("screenY").textContent = window.screenY;
		document.getElementById("screenWidth").textContent = window.innerWidth;
		document.getElementById("screenHeight").textContent = window.innerHeight;
		document.getElementById("location").textContent = window.location.pathname;
		document.getElementById("lastmod").textContent = document.lastModified;
		document.getElementById("myword").textContent = word;
		
		var result = "";
		if(word.indexOf("Awesome")>=0){
			result = "yes";
		}else
			result = "No";
		document.getElementById("find").textContent = result;		
	},
	resize: function(){
		window.addEventListener("resize",this.render);
	},
	devInfo : function(){
		var ele = document.getElementById("dev-info");
		var info = document.getElementById("myinfo");
		ele.addEventListener("click",function(){
			info.innerHTML = "Siras Sethapakdi<br/>IT Student<br/><a href='https://github.com/tothemaxis/ITE220' target = '_blank'>https://github.com/tothemaxis/ITE220</a>";
		});
	}
};
task1.render();
task1.resize();	
task1.devInfo();
}
