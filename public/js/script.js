d = new Date();
month = d.getMonth();
//check that they entered all the required info


function printMousePos(e) {
    var cursorX = e.pageX;
    var cursorY = e.pageY;
    console.log(cursorX);
    console.log(cursorY);
}
const location1 = document.getElementById("location");
location1.addEventListener('click', printMousePos);

