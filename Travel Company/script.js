function slideleft(id){
//    alert("working");
//    for(var i = 0 ; i < 100 ; i++)
    {
        var myEl = document.getElementById(id);

        var transformation = window.getComputedStyle(myEl).getPropertyValue("transform").match(/(-?[0-9\.]+)/g);
        
        var width = 0.70 * window.innerWidth;
        
        var max_width = 0.75 * window.innerWidth;
        
        var X = +transformation[4];
        var newX = X - max_width;
        
        
        console.log(newX);
        console.log(myEl.offsetWidth);
        
        if((-1 * newX) > myEl.offsetWidth/2)
        {
            ;
        }
        else
        {
            myEl.style.transform = "translateX(" + newX + "px)";
        }
    }
}

function slideRight(id){
//    alert("working");
//    for(var i = 0 ; i < 100 ; i++)
    {
        var myEl = document.getElementById("" + id);

        var transformation = window.getComputedStyle(myEl).getPropertyValue("transform").match(/(-?[0-9\.]+)/g);
        
        var width = 0.70 * window.innerWidth;
        var max_width = 0.75 * window.innerWidth;

        var X = +transformation[4];
        var newX = X + max_width;
        
        
        console.log(newX);
        console.log(myEl.offsetWidth);
        
        if((newX) > 0)
        {
            ;
        }
        else
        {
            myEl.style.transform = "translateX(" + newX + "px)";
        }
    }
}
    
    