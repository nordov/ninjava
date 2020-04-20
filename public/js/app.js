(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const htmls = require('./htmls');


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
    changeHeight(wrap, 450);
    changeWidth(wrap, 900)        
    fadeOut(wrapContent);
    wrapContent.innerHTML = htmls.newCharacter;
    fadeIn(wrapContent, htmls.newCharacter);
 
};

module.exports = splashToNewCharacter;
},{"./htmls":2}],2:[function(require,module,exports){

const authForms = {

    'justPlay': `
        <div class="auth-form">
                    <h1 id="clickNPlay">Click to play!</h1>
        </div>      
    `,
    'singIn': `
        <div class="auth-form" id="auth-form">
            <form >
                <h1>Sign In!</h1>
                <a id="swap" href="#">No account? Sign up here</a>
                
                <input type="hidden" id="action" value="login" />
                
                <div class="row">
                    <i class="fas fa-envelope"></i>
                    <input 
                        type="text" 
                        id="email" 
                        placeholder="Email"
                    />
                </div>

                <div class="row">
                    <i class="fas fa-lock"></i>
                    <input
                        type="password" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                
                <div class="row">
                    <input type="submit" value="Sign In" />
                </div>
            </form>
        </div>      
    `,
    'singUp': `
        <div class="info-wrap auth-form" id="auth-form">
            <form >
                <h1>Sign Up</h1>
                <a id="swap" href="#">Have an account? Sign in here</a>

                <input type="hidden" id="action" value="register" />

                <div class="row">
                    <i class="fas fa-envelope"></i>
                    <input 
                        type="text" 
                        id="email" 
                        placeholder="Email"
                    />
                </div>

                <div class="row">
                    <i class="fas fa-user"></i>
                    <input 
                        type="text" 
                        id="handle" 
                        placeholder="Handle"
                    />
                </div>

                <div class="row">
                    <i class="fas fa-lock"></i>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter a password" 
                    />
                </div>

                <div class="row">
                    <i class="fas fa-lock"></i>
                    <input 
                        type="password" 
                        id="password2"
                        placeholder="Confirm your password" 
                    />
                </div>

                <div class="row">
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
        </div>      
    `,
    'newCharacter':`
        <div class="new-character">
            <div class="arrows left-arrow">
                <i class="fas fa-chevron-circle-left"></i>
            </div>        
                <div class="character-profile">
                    <div class="character-image">
                        <img src="/characters/hanzo/hanzo.gif" />  
                    </div>
                    <div class="character-info">
                        <h4>Choose your fighter!</h4>
                        <h1>Hanzo Lori</h1>
                        <p>From the cold alleys of Brooklyn, Hanzo Lori grew with the merciless Triads. After his uncle was murder by the same group he swore loyalty to, Hanzo made a promise to use his deadly skills to finish those who thought them to him!</p>
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
                                    <div class='percent' style='width:80%;'></div>
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
                                    <div class='percent' style='width:80%;'></div>
                                </div> 
                            </div>
                        </div>
                        <div class="character-select">
                            <button>Select</button>
                        </div>
                    </div>
                </div>
            <div class="arrows right-arrow">
                <i class="fas fa-chevron-circle-right"></i>
            </div>                
        </div>    
    `,
};

module.exports = authForms;
},{}],3:[function(require,module,exports){
const splashToNewCharacter = require('./animations');

const newCharacter = function() {
    splashToNewCharacter();
};

module.exports = newCharacter;
},{"./animations":1}],4:[function(require,module,exports){
const htmls = require('./app/htmls');
const newCharacter = require('./app/new_character');


document.addEventListener("DOMContentLoaded", () => {

    const wrapContent = document.getElementById('wrap-content');
    
    wrapContent.innerHTML = htmls.justPlay; 

    const playButton = document.getElementById('clickNPlay');

    playButton.onclick = newCharacter;     
   
});
},{"./app/htmls":2,"./app/new_character":3}]},{},[4]);
