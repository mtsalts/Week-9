var highlighter = document.getElementById("highlighter");
var image = document.getElementById('image-1');
var currentIndex = -1; 
var imagesArray = document.querySelectorAll("div img");
console.log(imagesArray);

imagesArray.forEach(function(image, i){
	//console.log(image, i);
	image.addEventListener("mouseover", function(){
	//console.log(this);
	var rect = this.getBoundingClientRect();
	//console.log(rect);
	currentIndex=i;
	highlighter.style.opacity = 1;
	highlighter.style.width = rect.width+"px";
	highlighter.style.height = rect.height+"px";
	highlighter.style.top = rect.top+"px";
	highlighter.style.left = rect.left+"px";
	console.log(rect.top+"px", rect.left+"px");
});
});
	
	window.addEventListener("keydown", function(e){
		console.log(e);
		if (e.keyCode == 37) {
			currentIndex--;
			}
		if (e.keyCode == 39){
			currentIndex++;
		}
		if (currentIndex >= images.Array.length){
		currentIndex = 0;
	} else if (currentIndex <0) {
		currentIndex = imagesArray.length-1;
	}
		var image = imagesArray[currentIndex];
		var rect = image.getBoundingClientRect();
		highlighter.style.opacity = 1;
	highlighter.style.width = rect.width+"px";
	highlighter.style.height = rect.height+"px";
	highlighter.style.top = rect.top+"px";
	highlighter.style.left = rect.left+"px";
	console.log(rect.top+"px", rect.left+"px");
	});



//for (var i=0; i<imagesArray.length; i++){
//	var image = imagesArray[i];
	//image.addEventListener("mouseover", function(){
//	console.log(this);
//	var rect = this.getBoundingClientRect();
//	console.log(rect);
//	highlighter.style.opacity = 1;
//	highlighter.style.width = rect.width+"px";
//	highlighter.style.height = rect.height+"px";
//	highlighter.style.top = rect.top+"px";
//	highlighter.style.left = rect.left+"px";
//	console.log(rect.top+"px", rect.left+"px");
//});
//}



//var array = [0, 1, 2, 3, 4];

//var i=0;
//while (i<10) {
//	console.log("output", i);
//	i=i+1;
//}

//var sum = 0;
//for (var j = 5; j>0; j--) {
	//sum = sum + j;
	//console.log("output from for", j);
//}
//console.log("Sum: ", sum);






















