var main = document.querySelector("#box");
var winW = window.innerWidth;
var winH =window.innerHeight;

var desW = 640;
var desH = 960;
if(desW/desH<winW/winH){
    main.style.webkitTransform = 'scale('+winW/desW+')';
}else{
    main.style.webkitTransform = 'scale('+winH/desH+')';
}