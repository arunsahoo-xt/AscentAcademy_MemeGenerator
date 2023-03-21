var outImage =".original-image";
// var canvas = document.getElementById('canvas'),
//         ctx = canvas.getContext('2d');
// canvas.width = $('#imagenFondo').width();


// canvas.crossOrigin = "Anonymous";
// canvas.width = 300;
// canvas.height =300;
var image_ele=document.querySelector(outImage);
var image_container=document.querySelector(".image-container");
// console.log(image_container);
// ctx.drawImage(image_ele, 0, 0,image_ele.width,image_ele.height);
// ctx.font = "36pt Impact";



/********* Handling checkbox and toggle textbox *********/
var checkbox1=document.querySelector(".textbox1 input");
var checkbox2=document.querySelector(".textbox2 input");

checkbox1.addEventListener("click",(event)=> hide_textbox(".drag-top",event));
checkbox2.addEventListener("click",(event)=> hide_textbox(".drag-bot",event));


function hide_textbox(textbox_name,checkbox_name){
	var check=document.querySelector(textbox_name);
	// var wrapper=document.querySelector(".wrapper");
	if(checkbox_name.target.checked){
		check.style.display="none";
		
	}
	else{
		check.style.display="block";
		
	}
}
/* **************************************************** */


$(document).on('input','#inp-top',function(){
    // //redraw image
    // ctx.clearRect(0,0,canvas.width,canvas.height);
    // ctx.drawImage(image_ele, 0, 0,image_ele.width,image_ele.height);
    // //refill text
    // ctx.fillStyle = "black";
    // ctx.fillText($(this).val(),50,50);
	var top_inp=document.querySelector(".top-h4");
	top_inp.innerHTML=$(this).val();
});
$(document).on('input','#inp-bot',function(){
    // //redraw image
    // ctx.clearRect(0,0,canvas.width,canvas.height);
    // ctx.drawImage(image_ele, 0, 0,image_ele.width,image_ele.height);
	var bot_inp=document.querySelector(".bot-h4");
	bot_inp.innerHTML=$(this).val();
});




//**************code to download meme********************

$('button').click(function(event){
	event.preventDefault();
	printToFile();
});


function printToFile() {
	var wrapper = document.getElementById('#wrapperid');


		html2canvas(wrapper).then(canvas => {
			canvas.crossOrigin = "Anonymous";
			var myImage = canvas.toDataURL("image/png");//it actually returns a canvas then converted to DataURI
            //Then download file
            downloadURI("data:" + myImage, "yourMeme.png");
		  });
		  
	  
}
//Creating dynamic link that automatically click
function downloadURI(uri, name) {
	var link = document.createElement("a");
	link.download = name;
	link.href = uri;
	link.click();
	//after creating link you should delete dynamic link
	//clearDynamicLink(link); 
}
// *******************************************************


// window.addEventListener("load", (event) => {
// 	var copy_image=document.querySelector(".copy-image");
// 	var image=new Image();
// 	image.src="yourMeme (9).png";
// 	copy_image.src=image.src;
//   });


function preview_1(obj){
	console.log(obj);
	var copy_image=document.querySelector(".copy-image");
	
	var image=new Image();
	image.src=obj.src;
		image.onload = function () {
			image_ele.src=image.src;
			
			copy_image.src=image.src;
		};
}
function preview_2(obj)
{
	var copy_image=document.querySelector(".copy-image");
	if (FileReader)
	{
		var reader = new FileReader();
		reader.readAsDataURL(obj.files[0]);
		reader.onload = function (e) {
		var image=new Image();
		image.src=e.target.result;
		image.onload = function () {
			image_ele.src=image.src;
			copy_image.src=image.src;
			
		};
	}
}
}

$( function() {
	$(".top-h4").draggable({
		containment:".wrapper"
	});
  } );
$( function() {
	$( ".bot-h4" ).draggable({
		containment:".wrapper"
	});
	
  } );

// var draggable=document.querySelector(".drag-box");
// let isResizing=false;
// // var draggable=document.querySelector(".drag-box");
// draggable.addEventListener("mousedown",mousedown);

// function mousedown(e){
// 	if(!isResizing){
// 		window.addEventListener("mousemove",mousemove);
// 		window.addEventListener("mouseup",mouseup);
// 		let prevX=e.clientX;
// 		let prevY=e.clientY;
		
// 		function mousemove(e){
// 			let newX=prevX-e.clientX;
// 			let newY=prevY-e.clientY;
	
// 			const rect=draggable.getBoundingClientRect();
// 			draggable.style.left=rect.left-newX+"px";
// 			draggable.style.top=rect.top-newY+"px";
	
// 			prevX=e.client;
// 			prevY=e.clientY;
	
// 		}
// 		function mouseup(){
// 			window.removeEventListener("mousemove",mousemove);
// 			window.removeEventListener("mouseup",mouseup);
// 		}
// 	}
// }


// const resizers=document.querySelectorAll(".resizer");
// let currentResizer;
// for(let resizer of resizers){
// 	console.log("resizer");
// 	resizer.addEventListener("mousedown",mousedown);
// 	function mousedown(e){
// 		isResizing=true;
// 		currentResizer=e.target;
// 		let prevX=e.clientX;
// 		let prevY=e.clientY;
// 		console.log("insisde 1");
// 		window.addEventListener("mousemove",mousemove);
// 		window.addEventListener("mouseup",mouseup);
// 		function mousemove(){
// 			console.log("inside 2");
// 			const rect=resizer.getBoundingClientRect();
// 			if(currentResizer.classList.contains('se')){
// 				resizer.style.width=rect.width-(prevX-e.clientX)+"px";
// 				resizer.style.height=rect.height-(prevY-e.clientY)+"px";	
// 			}
// 			else if(currentResizer.classList.contains('sw')){
// 				resizer.style.width=rect.width+(prevX-e.clientX)+"px";
// 				resizer.style.height=rect.height-(prevY-e.clientY)+"px";
// 				resizer.style.left=rect.left-(prevX-e.clientX)+"px";	
// 			}
// 			else if(currentResizer.classList.contains('ne')){
// 			resizer.style.width=rect.width-(prevX-e.clientX)+"px";
// 			resizer.style.height=rect.height+(prevY-e.clientY)+"px";
// 			resizer.style.top=rect.top-(prevY-e.clientY)+"px";	
// 		}
// 		else if(currentResizer.classList.contains('nw')){
// 			resizer.style.width=rect.width+(prevX-e.clientX)+"px";
// 			resizer.style.height=rect.height+(prevY-e.clientY)+"px";
// 			resizer.style.left=rect.left-(prevX-e.clientX)+"px";
// 			resizer.style.top=rect.top-(prevY-e.clientY)+"px";		
// 		}
// 		prevX=e.clientX;
// 		prevY=e.clientY;
// 	}
// 	function mouseup(){
// 		window.removeEventListener("mousemove",mousemove);
// 		window.removeEventListener("mouseup",mouseup);
// 		isResizing=false;
// 	}
// }
// }
