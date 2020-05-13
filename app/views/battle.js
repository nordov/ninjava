// const battle = function() {

//     const wrapContent = document.getElementById('wrap-content');
//     wrapContent.innerHTML = `<canvas id='canvas'></canvas>`

//     let canvas = document.getElementById('canvas'),
//         ctx = canvas.getContext("2d");

//     canvas.width = 900;
//     canvas.height = 600;

//     ctx.globalCompositeOperation = 'destination-over';

//     let background = new Image();
//     let bgNum = Math.floor(Math.random() * 5) + 1;
//     background.src = "/images/bg0" + bgNum + ".png";

//     let fighter = new Image();
//     fighter.src = "/characters/hanzo/Idle_000.png";

//     background.onload = function() {
//         ctx.drawImage(background,0,0,900,600);
//         ctx.drawImage(fighter, 10, 10);
//     }

//     ctx.drawImage(fighter,10,10);


// };

// module.exports = battle;

// let scene = new Image();
// scene.src = "/images/bg0" + (Math.floor(Math.random() * 5) + 1) + ".png";

// let fighter = new Image();
// fighter.src = "/characters/hanzo/Idle_000.png";


let fighter;

function startBattle() {
    fighter = new component(30, 30, "/characters/hanzo/Idle_000.png", 10, 10, "image" );

    console.log(fighter);

    battle.start();
}

let battle = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 900;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");

        document.getElementById('wrap-content')
            .innerHTML = "";
        document.getElementById('wrap-content')            
            .appendChild(this.canvas);

        //this.frameNo = 0;
        //this.interval = setInterval(updateBattle, 20);
    },
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function(){
        clearInterval(this.interval);
    }
}

function component(width, height, character, x, y, type){
    this.type = type;
    if (type == "image"){
        this.image = new Image();
        this.image.src = character;
    }

    this.width = width;
    this.height = height;
    this.speedX = x;
    this.speedY = y;
    this.update = function (){
        ctx = battle.context;
        if (type == "image"){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = character;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateBattle() {
    battle.clear();
    fighter.newPos();
    fighter.update();
}



module.exports = startBattle;