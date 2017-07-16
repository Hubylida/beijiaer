        var page = document.querySelectorAll('.page');            
        var prev = document.querySelector('#prev'),
             next = document.querySelector('#next');
        var currentPn = document.getElementById('currentPage').innerHTML;
        var pic = document.querySelectorAll('.product_pic');       
        var pageNum = page.length;
        var pageArray = [0];
         (function createArray(){
                     for(var i = 0; i < pageNum; i++){
                        if(i == 0){
                            page[0].style.display = "block";
                        }else{
                            page[i].style.display = "none";
                        }
                        pageArray.push(page[i]);
                     };
                     
                  })();
        console.log(pageArray);
        prev.addEventListener('click',pageBack);
        next.addEventListener('click',pageNext);
        function pageBack(){
            if(currentPn > 1){
                pageArray[currentPn].style.display = "none";
                pageArray[--currentPn].style.display = "block";
                document.querySelector('#currentPage').innerHTML = currentPn;
            }
            
        }
        function pageNext(){
            if(currentPn < pageNum){       
                pageArray[currentPn].style.display = "none";
               pageArray[++currentPn].style.display = "block";
                document.querySelector('#currentPage').innerHTML = currentPn;
            } 
        }