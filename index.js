

var go_up = document.querySelector('.go-up');
var qsCode = document.querySelector('.qsCode');
var modules = document.querySelector('.three-modules');
var time;
window.onscroll = function(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    var clientHeight = document.documentElement.clientHeight;
    if (currentScroll > clientHeight){
        go_up.style.display = "inline-block";
        qsCode.style.display = "inline-block";
    }else{
        go_up.style.display = "none";
        qsCode.style.display = "none";
    }
}
go_up.addEventListener('click',scrollBack);
var timer;
function scrollBack(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(currentScroll != 0){
        window.scrollBy(0,-50);
        timer = setTimeout('scrollBack()',16.7)
    }else {
        clearTimeout(timer)
    }
}
