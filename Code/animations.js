var menue_items = document.getElementsByClassName("menue_content");

var header_menue = document.querySelector(".header-menue");

window.addEventListener("scroll", function(){
	var rectObject = header_menue.getBoundingClientRect();
	
	console.log("reach " + rectObject.y);
	if(rectObject.y <= 0){
		header_menue.style.position = "fixed";
		header_menue.style.top = "0";
	}
	if(window.pageYOffset < 50){
		header_menue.style.position = "absolute";
		header_menue.style.top = "50px";
	}
});
