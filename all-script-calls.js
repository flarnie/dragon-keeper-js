
//New and better than document.onready 

function addEvent(to, type, fn){  
    if(document.addEventListener){  
        to.addEventListener(type, fn, false);  
    } else if(document.attachEvent){  
        to.attachEvent('on'+type, fn);  
    } else {  
        to['on'+type] = fn;  
    }  
};

   addEvent(window, 'load', function(){ 
    //all our code that runs after the page is ready goes here

    tameTheDragons();
}); 
