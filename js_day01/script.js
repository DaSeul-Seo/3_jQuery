document.write('<button id="btnLeft">Left</button>');
document.write('<button id="btnRight">Right</button>');
document.write('<button id="btnUp">Up</button>');
document.write('<button id="btnDown">Down</button>');
document.write('<hr>');
document.write('<div id="box">Box</div>');

var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var btnUp = document.getElementById('btnUp');
var btnDown = document.getElementById('btnDown');
var box = document.getElementById('box');
var x = 100;
var y = 100;
/*console.log(btn);*/
function move(){
    switch (this) {
        case btnLeft : a = 180; x = x - 50; break;
        case btnRight : a = 0; x = x + 50; break;
        case btnUp : a = 270; y = y - 50; break;
        case btnDown : a = 90; y = y + 50; break;
    }
    box.style.transform = 'rotate('+a+'deg)';
    box.style.left = x + 'px';
    box.style.top = y + 'px';
}
btnLeft.onclick = move;
btnRight.onclick = move;
btnUp.onclick = move;
btnDown.onclick = move;