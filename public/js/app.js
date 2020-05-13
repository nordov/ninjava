(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const htmls = require('./views/htmls');


function changeHeight(element, newHeight) {
    
    let elementHeight = element.offsetHeight;
    let resizingHeight = setInterval(resize, 1);

    function resize() {
        if (elementHeight !== newHeight)
            //growa ir shrinks based on ratio of current size v new size
            element.style.height = elementHeight < newHeight ? elementHeight++ + 'px' : elementHeight-- + 'px';
        else
            clearInterval(resizingHeight);
    }
}

function changeWidth(element, newWidth) {

    let elementWidth = element.offsetWidth;
    let resizingWidth = setInterval(resize, 1);
    return "success";

    function resize() {
        if (elementWidth !== newWidth)
            //growa ir shrinks based on ratio of current size v new size
            element.style.width = elementWidth < newWidth ? elementWidth++ + 'px' : elementWidth-- + 'px';
        else
            clearInterval(resizingWidth);
    }
}

function fadeOut(element){

    element.classList.add("hide");
    element.classList.remove("show");

}

function fadeIn(element) {

    element.classList.add("show");
    element.classList.remove("hide");

}

const splashToNewCharacter = function() {
    const logo = document.getElementById('logo');
    const wrap = document.getElementById('wrap');
    const wrapContent = document.getElementById('wrap-content');

    changeHeight(logo, 150);
    changeHeight(wrap, 600);
    changeWidth(wrap, 900)        
    fadeOut(wrapContent);
    wrapContent.innerHTML = "";  
    wrapContent.innerHTML = htmls.characters.default;
    setTimeout(() => { fadeIn(wrapContent); }, 3000);    

    return 0;
 
};

module.exports = splashToNewCharacter;
},{"./views/htmls":3}],2:[function(require,module,exports){
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
            ctx.fillStyle = color;
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
},{}],3:[function(require,module,exports){

const authForms = {

    'justPlay': `
        <div class="auth-form">
                    <h1 id="clickNPlay">Click to play!</h1>
        </div>      
    `,
    'characters':{
        'default':
            `<div class="new-character">
                <div class="arrows">
                    <i class="fas fa-chevron-circle-left" id="left-arrow"></i>
                </div>        
                    <div class="character-profile" id="character-profile">
                        <div class="character-image">
                            <img src="/characters/hanzo/hanzo.gif" />  
                        </div>
                        <div class="character-info">
                            <h1>Hanzo Lori</h1>
                            <p>From the cold alleys of Brooklyn, Hanzo Lori grew with the merciless Triads. After his uncle was murder by the same group he swore loyalty to, Hanzo made a promise to use his deadly skills to finish those who thought them to him!</p>
                            <div class="character-specs">
                                <div class="skill">
                                    <h4>Attack:</h4> 
                                    <div class='bar'>
                                        <div class='percent' style='width:95%;'></div>
                                    </div> 
                                </div>
                                <div class="skill">
                                    <h4>Defense:</h4> 
                                    <div class='bar'>
                                        <div class='percent' style='width:90%;'></div>
                                    </div> 
                                </div>
                                <div class="skill">
                                    <h4>Agility:</h4> 
                                    <div class='bar'>
                                        <div class='percent' style='width:75%;'></div>
                                    </div> 
                                </div>
                                <div class="skill">
                                    <h4>Speed:</h4> 
                                    <div class='bar'>
                                        <div class='percent' style='width:70%;'></div>
                                    </div> 
                                </div>
                            </div>
                            <div class="character-select">
                                <button id="chosen">Select</button>
                            </div>
                        </div>
                    </div>
                <div class="arrows">
                    <i class="fas fa-chevron-circle-right" id="right-arrow"></i>
                </div>                
            </div>`,        
        'Hanzo':
            `<div class="character-image">
                <img src="/characters/hanzo/hanzo.gif" />  
            </div>
            <div class="character-info">
                <h1>Hanzo Lori</h1>
                <p>From the cold alleys of Brooklyn, Hanzo Lori grew with the merciless Triads. After his uncle was murder by the same group he swore loyalty to, Hanzo made a promise to use his deadly skills to finish those who thought them to him!</p>
                <div class="character-specs">
                    <div class="skill">
                        <h4>Attack:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:95%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Defense:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:90%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Agility:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:75%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Speed:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:70%;'></div>
                        </div> 
                    </div>
                </div>
                <div class="character-select">
                    <button id="chosen">Select</button>
                </div>
            </div>`,
        'Wy-Te Pel':
            `<div class="character-image">
                <img src="/characters/wy-te/wy-te.gif" />  
            </div>
            <div class="character-info">
                <h1>Wy-Te Pel</h1>
                <p>Al she wanted was a calm, peaceful life, but the path her twin sister took forced her to follow after and help keep her safe. Binded by a promise made to her dad who died, on her arms when she was just a kid, sealing her fate.</p>
                <div class="character-specs">
                    <div class="skill">
                        <h4>Attack:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:65%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Defense:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:70%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Agility:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:97%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Speed:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:95%;'></div>
                        </div> 
                    </div>
                </div>
                <div class="character-select">
                    <button id="chosen">Select</button>
                </div>
            </div>`,
        'Poin Tee-Hut':
            `<div class="character-image">
                <img src="/characters/poin/poin.gif" />  
            </div>
            <div class="character-info">
                <h1>Poin Tee-Hut</h1>
                <p>Born in a family of farmers, Poin learned to respect nature and everything that comes from it. Normally considered very neutral and uninvolved his only feud is with those who disrespect Mother Earth.</p>
                <div class="character-specs">
                    <div class="skill">
                        <h4>Attack:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:90%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Defense:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:65%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Agility:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:93%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Speed:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:87%;'></div>
                        </div> 
                    </div>
                </div>
                <div class="character-select">
                    <button id="chosen">Select</button>
                </div>
            </div>`,
        'Gonz O-Bits':
            `<div class="character-image">
                <img src="/characters/gonzo/gonzo.gif" />  
            </div>
            <div class="character-info">
                <h1>Gon Zo-Bits</h1>
                <p>Always first of his class, with a great passion for science and technology. He found himself with no choise to learn martial arts to be able to defend himself from his daily bullies. Mixing his two best skills he can easily become a very deadly machine</p>
                <div class="character-specs">
                    <div class="skill">
                        <h4>Attack:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:75%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Defense:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:95%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Agility:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:80%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Speed:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:83%;'></div>
                        </div> 
                    </div>
                </div>
                <div class="character-select">
                    <button id="chosen">Select</button>
                </div>
            </div>`,
        'Rico Star':
            `<div class="character-image">
                <img src="/characters/rico/rico.gif" />  
            </div>
            <div class="character-info">
                <h1>Rico Star</h1>
                <p>As a wealthy and resourceful man, Rico never really knew what path to give to his life. But an unhealthy amount of comic books "research", as he called it, made it clear for him, to become the greatest vigilante there ever was. </p>
                <div class="character-specs">
                    <div class="skill">
                        <h4>Attack:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:80%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Defense:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:98%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Agility:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:75%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Speed:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:95%;'></div>
                        </div> 
                    </div>
                </div>
                <div class="character-select">
                    <button id="chosen">Select</button>
                </div>
            </div>`,
        'Kateena':
            `<div class="character-image">
                <img src="/characters/kateena/kateena.gif" />  
            </div>
            <div class="character-info">
                <h1>Kateena</h1>
                <p>Her dad was an accountant for the most dangerous drug lord in South America until his best friend, falsely accused him of stealing from his client. Her whole family was brutally murdered in front of her. Now she has dedicated her life to have all her dad's enemies pay for their one mistake... Spare her live.</p>
                <div class="character-specs">
                    <div class="skill">
                        <h4>Attack:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:65%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Defense:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:70%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Agility:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:97%;'></div>
                        </div> 
                    </div>
                    <div class="skill">
                        <h4>Speed:</h4> 
                        <div class='bar'>
                            <div class='percent' style='width:95%;'></div>
                        </div> 
                    </div>
                </div>
                <div class="character-select">
                    <button id="chosen">Select</button>
                </div>
            </div>`,
    },
    'movesSelection':
        `<div class="moves-selection" id="moves">
            <form>
                <h3>Choose your battle moves!</h3>
                <div class="round">
                    <div class="round-label">
                        <h3>Round I</h3>
                    </div>
                    <div class="selections">
                        <div class="row">
                            <label><h4>Defense:</h4></label>
                            <select id="defense11">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                            <select id="defense12">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                            <select id="defense13">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                        </div>

                        <div class="row">
                            <label><h4>Attack:</h4></label>
                            <select id="attack11">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                            <select id="attack12">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                            <select id="attack13">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                        </div>
                    </div>
                </div>
                

              <div class="round">
                    <div class="round-label">
                        <h3>Round II</h3>
                    </div>
                    <div class="selections">
                        <div class="row">
                            <label><h4>Defense:</h4></label>
                            <select id="defense11">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                            <select id="defense12">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                            <select id="defense13">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                        </div>

                        <div class="row">
                            <label><h4>Attack:</h4></label>
                            <select id="attack11">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                            <select id="attack12">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                            <select id="attack13">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                        </div>
                    </div>
                </div>
                

                <div class="round">
                    <div class="round-label">
                    <h3>Round III</h3>
                    </div>
                    <div class="selections">
                        <div class="row">
                            <label><h4>Defense:</h4></label>
                            <select id="defense11">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                            <select id="defense12">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                            <select id="defense13">
                                <option value="Upper block">Upper Block</option>
                                <option value="Mid block">Mid Block</option>
                                <option value="Jump">Jump</option>
                            </select>
                        </div>

                        <div class="row">
                            <label><h4>Attack:</h4></label>
                            <select id="attack11">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                            <select id="attack12">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                            <select id="attack13">
                                <option value="Jump">Jump</option>
                                <option value="Mid Attack">Mid Attack</option>
                                <option value="Slide">Slide</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <button id="fight">FIGHT!</button>
                </div>                               
            </form>
        </div>`
};

module.exports = authForms;
},{}],4:[function(require,module,exports){
const htmls = require('./htmls');
const startBattle = require('./battle');

/*************************************/
/* CHOOSE FIGHTER SCREEN             */
/*************************************/
const movesSelection = function (character) {

    const movesContent = document.getElementsByClassName('character-info')[0];

    movesContent.innerHTML = htmls.movesSelection;
    document.getElementsByClassName('arrows')[0].innerHTML = "";
    document.getElementsByClassName('arrows')[1].innerHTML = "";

    document.getElementById('fight').addEventListener('click', (e) => {
        e.preventDefault();
        startBattle();
    });
};

module.exports = movesSelection;
},{"./battle":2,"./htmls":3}],5:[function(require,module,exports){
const htmls = require('./htmls');
const splashToNewCharacter = require('../animations');
const movesSelection = require('./moves_selection');

/*************************************/
/* CHOOSE FIGHTER SCREEN             */
/*************************************/
const newCharacter = function() {
    
    const charactersList = ['Hanzo',
                            'Wy-Te Pel',
                            'Poin Tee-Hut',
                            'Gonz O-Bits',
                            'Rico Star',
                            'Kateena',];
        
    let currentCharacter = splashToNewCharacter();
    //console.log(currentCharacter);

    document.getElementById('left-arrow').addEventListener("click", () => {
        
        if (currentCharacter !== 0) currentCharacter--;

        document.getElementsByClassName('character-profile')[0].innerHTML = htmls.characters[charactersList[currentCharacter]];

        document.getElementById('chosen').addEventListener("click", () => {
            movesSelection(charactersList[currentCharacter]);
        });
        
    });

    document.getElementById('right-arrow').addEventListener("click", () => {

        if (currentCharacter !== charactersList.length - 1) currentCharacter++;

        document.getElementsByClassName('character-profile')[0].innerHTML = htmls.characters[charactersList[currentCharacter]];

        document.getElementById('chosen').addEventListener("click", () => {
            movesSelection(charactersList[currentCharacter]);
        });        

    });

};

module.exports = newCharacter;


},{"../animations":1,"./htmls":3,"./moves_selection":4}],6:[function(require,module,exports){
const htmls = require('./app/views/htmls');
const newCharacter = require('./app/views/new_character');


document.addEventListener("DOMContentLoaded", () => {

    const wrapContent = document.getElementById('wrap-content');
    
    wrapContent.innerHTML = htmls.justPlay; 

    const playButton = document.getElementById('clickNPlay');

    console.log(newCharacter);

    playButton.onclick = newCharacter;     
   
});
},{"./app/views/htmls":3,"./app/views/new_character":5}]},{},[6]);
