        var page = document.querySelectorAll('.page');            
        var prev = document.querySelector('#prev'),
             next = document.querySelector('#next');
        var currentPages = document.querySelectorAll('.page_num');
        var currentPn = 1;
        var pageNum = page.length;
        var pageArray = [0], currentpagesArray = [0];
         (function createArray(){
                     for(var i = 0; i < pageNum; i++){
                        if(i == 0){
                            page[0].style.display = "block";
                            currentPages[0].style.backgroundColor = "#eee";
                        }else{
                            page[i].style.display = "none";
                        }
                        pageArray.push(page[i]);
                        currentpagesArray.push(currentPages[i]);
                     };                     
                  })();
        prev.addEventListener('click',pageBack);
        next.addEventListener('click',pageNext);
        function pageBack(){
            if(currentPn > 1){
                pageArray[currentPn].style.display = "none";
                currentpagesArray[currentPn].style.backgroundColor = "#fff";
                pageArray[--currentPn].style.display = "block";
                currentpagesArray[currentPn].style.backgroundColor = "#eee";
            }
            
        }
        function pageNext(){
            if(currentPn < pageNum){       
                pageArray[currentPn].style.display = "none";
                currentpagesArray[currentPn].style.backgroundColor = "#fff";
                pageArray[++currentPn].style.display = "block";
                currentpagesArray[currentPn].style.backgroundColor = "#eee";
            } 
        }