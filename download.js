var main = document.querySelector("#box");
/*var loc = document.querySelector("#loc");*/
var winW = window.innerWidth;
var winH =window.innerHeight;


var desW = 640;
var desH = 960;
if(desW/desH<winW/winH){
    main.style.webkitTransform = 'scale('+winW/desW+')';
}else{
    main.style.webkitTransform = 'scale('+winH/desH+')';
}

/*loc.addEventListener("touchstart",function(){window.location="https://itunes.apple.com/us/app/guo-shang-yi-gou/id1098039649?mt=8&uo=4";
});*/
document.body.addEventListener('touchmove', function (event) {
    event.preventDefault();
}, false);


