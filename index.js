var outImage ="original-image";
var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');
// canvas.width = $('#imagenFondo').width();


canvas.crossOrigin = "Anonymous";
canvas.width = 300;
canvas.height =300;
var image_ele=document.getElementById(outImage);
var image_container=document.querySelector(".image-container");
console.log(image_container);
ctx.drawImage(image_ele, 0, 0,image_ele.width,image_ele.height);
ctx.font = "36pt Impact";


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
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(image_ele, 0, 0,image_ele.width,image_ele.height);
    // //refill text
    // ctx.fillStyle = "black";
    // ctx.fillText($(this).val(),50,50);
	var top_inp=document.querySelector(".drag-top");
	top_inp.innerHTML=$(this).val();
});
$(document).on('input','#inp-bot',function(){
    // //redraw image
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(image_ele, 0, 0,image_ele.width,image_ele.height);
    // //refill text
    // ctx.fillStyle = "white";
    // ctx.fillText($(this).val(),50,350);

	var bot_inp=document.querySelector(".drag-bot");
	bot_inp.innerHTML=$(this).val();
});



var formObj=document.querySelector('.formSelector');
console.log(formObj);
$('button').click(function(){
    // console.log(ctx.getImageData(50, 50, 100, 100));
    event.preventDefault();
	console.log(document.getElementById(outImage));
});

function preview_2(obj)
{
	if (FileReader)
	{
		var reader = new FileReader();
		reader.readAsDataURL(obj.files[0]);
		reader.onload = function (e) {
		var image=new Image();
		image.src=e.target.result;
		image.onload = function () {
			image_ele.src=image.src;
		};
		}
	}
}