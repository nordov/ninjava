

const battle = function() {

    const wrapContent = document.getElementById('wrap-content');
    wrapContent.innerHTML = `<canvas id='canvas'></canvas>`

    let canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");

    canvas.width = 900;
    canvas.height = 600;

    let background = new Image();
    let bgNum = Math.floor(Math.random() * 5) + 1;
    background.src = "/images/bg0" + bgNum + ".png";

    background.onload = function() {
        ctx.drawImage(background,0,0,900,600);
    }


};

module.exports = battle;