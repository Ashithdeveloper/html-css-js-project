const hourhand = document.getElementById("hour-hand");
const sechand = document.getElementById("sec-hand");
const minhand = document.getElementById("min-hand");

function clockTick() {
    const date = new Date();
    const sec = date.getSeconds() /60;
    const min = (sec + date.getMinutes()) /60;
    const hour = (min + date.getHours()) /12;

    rotateClockHand(sechand, sec);
    rotateClockHand(hourhand, hour);
    rotateClockHand(minhand, min);
}
function rotateClockHand(element,rotation){
    element.style.setProperty('--rotate', rotation * 360 );
}
setInterval(clockTick,1000);