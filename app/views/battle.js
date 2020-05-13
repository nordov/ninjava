

const battle = function() {

    const wrapContent = document.getElementById('wrap-content');
    wrapContent.innerHTML = `<canvas id='canvas'></canvas>`

    let canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");

    canvas.width = 900;
    canvas.height = 600;

    ctx.globalCompositeOperation = 'destination-over';

    let background = new Image();
    let bgNum = Math.floor(Math.random() * 5) + 1;
    background.src = "/images/bg0" + bgNum + ".png";

    let fighter = new Image();
    fighter.src = "/characters/hanzo/Idle_000.png";

    background.onload = function() {
        ctx.drawImage(background,0,0,900,600);
        ctx.drawImage(fighter, 10, 10);
    }

    ctx.drawImage(fighter,10,10);


};

module.exports = battle;