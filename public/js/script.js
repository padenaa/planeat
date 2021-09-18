d = new Date();
month = d.getMonth();
//check that they entered all the required info


function printMousePos(e) {
    var cursorX = e.clientX;
    var cursorY = e.clientY;
    var el = document.getElementById("pin");
    var country = 0;
    if (cursorY < 390){
        country = 1;
        el.style.left = 0;
    }else if (cursorY < 450){
        country = 2;
    } else {
        country = 3;
    }
    
    
    el.style.top = cursorY;
    el.style.left = cursorX;
    return country;
}

const location1 = document.getElementById("location");
var country = location1.addEventListener('click', printMousePos);

