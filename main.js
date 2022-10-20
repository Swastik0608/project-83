var canvas =document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouse_event="";
var xlast="";
var ylast="";
var color1=document.getElementById("color").value;
var width1=document.getElementById("width").value;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouse_event="mousedown happend";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(){
    mouse_event="mouseup happend";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(){
    mouse_event="mouseleave happend";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    var current_xposition=e.clientX-canvas.offsetLeft;
    var current_yposition=e.clientY-canvas.offsetTop;
 color1=document.getElementById("color").value;
 width1=document.getElementById("width").value;
//window.alert('color:' + color1);
    if( mouse_event=="mousedown happend"){
        ctx.beginPath();
        ctx.strokeStyle = color1;
        ctx.lineWidth = width1;
        console.log("last of x and y coordinates")
        console.log("x="+xlast+"y="+ylast);
        ctx.moveTo(xlast,ylast);
        console.log("current position of x and y coordinates")
        console.log("x="+current_xposition+"y="+current_yposition);
        ctx.lineTo(current_xposition,current_yposition);
        ctx.stroke()
        }
        xlast=current_xposition;
        ylast=current_yposition;
}
  function cleer(){
        console.log("clear");
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
