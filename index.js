

// ............
var text = document.querySelectorAll('.text');
        var textValue = ["请填写您的真实姓名","请填写您的手机号码"];
            text[0].onfocus = function (){
                if(text[0].value == textValue[0]){
                    text[0].value = "";
                }
            }
            text[0].onblur = function (){
                if(text[0].value == ""){
                    text[0].value = textValue[0];
                }
            }
            text[1].onfocus = function (){
                if(text[1].value == textValue[1]){
                    text[1].value = "";
                }
            }
            text[1].onblur = function (){
                if(text[1].value == ""){
                    text[1].value = textValue[1];
                }
            }

        
var hoverPic  = document.querySelectorAll('.hoverPic');
var pictureL = hoverPic.length;
var hoverPicSrc = 
[
    "http://7868925.s61i.faiusr.com/2/AD0I-aPgAxACGAAg8Z69xgUo7rC07AEw7AE44gI.jpg",
    "http://7868925.s61i.faiusr.com/2/AD0I-aPgAxACGAAg8Z69xgUo6eWlvwMw7QE44gI.jpg",
    "http://7868925.s61i.faiusr.com/2/AD0I-aPgAxACGAAg8Z69xgUo4Kyq5gYw7AE44gI.jpg",
    "http://7868925.s61i.faiusr.com/2/AD0I-aPgAxACGAAg8p69xgUo8IzQLzDsATjiAg.jpg"
];
var hoverPicSrcF = 
[
    "http://7868925.s61i.faiusr.com/2/AD0I-aPgAxACGAAghIzcvwUo7YCdwQIw7AE44gI.jpg",
    "http://7868925.s61i.faiusr.com/2/AD0I-aPgAxACGAAghIzcvwUo9rz_jgUw7AE44gI.jpg",
    "http://7868925.s61i.faiusr.com/2/AD0I-aPgAxACGAAgg4zcvwUo4sOp3wMw7AE44gI.jpg",
    "http://7868925.s61i.faiusr.com/2/AD0I-aPgAxACGAAgg4zcvwUogPCxDzDsATjiAg.jpg"
];
   for(var i = 0; i < pictureL; i++){
        hoverPic[i].addEventListener('mouseover',(function(x){
            return function(){
                hoverPic[x].src = hoverPicSrc[x];           
            };
        })(i));
        hoverPic[i].addEventListener('mouseout',(function(x){
            return function(){
                hoverPic[x].src = hoverPicSrcF[x];
            };
        })(i));
    }

// ...........
var go_up = document.querySelector('.go-up');
var qsCode = document.querySelector('.qsCode');
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

