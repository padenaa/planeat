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
        y = "80px";
        x = "130px";
    }else if (cursorY < 450){
        country = 2;
        y="130px";
        x= "130px";
    } else {
        country = 3;
        y="230px";
        x = "200px";
    }
    el.style.top = y;
    el.style.left = x;
    return country;
}

const location1 = document.getElementById("location");
var country = location1.addEventListener('click', printMousePos);

const prompt2a = document.getElementById("breakfast");
const prompt2b = document.getElementById("lunch");
const prompt2c = document.getElementById("dinner");
var meal;

prompt2a.addEventListener('click', ()=>{
    meal = "breakfast";
}); 
prompt2b.addEventListener('click', ()=>{
    meal = "lunch";
}); 
prompt2c.addEventListener('click', ()=>{
    meal = "dinner";
}); 

