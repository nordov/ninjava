(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

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

    function resize() {
        if (elementWidth !== newWidth)
            //growa ir shrinks based on ratio of current size v new size
            element.style.width = elementWidth < newWidth ? elementWidth++ + 'px' : elementWidth-- + 'px';
        else
            clearInterval(resizingWidth);
    }
}

function fadeContent(element, fade){

    if (fade === "out"){
        let fadeEffect = setInterval(function () {
            if (!element.style.opacity) {
                element.style.opacity = 1;
            }
            if (element.style.opacity > 0) {
                element.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
            }
        }, 30); 
    } else {
        let fadeEffect = setInterval(function () {
            if (element.style.opacity < 1) {
                element.style.opacity += 0.1;
            } else {
                clearInterval(fadeEffect);
            }
        }, 30);         
    }

}

const splashToNewCharacter = function() {
    const logo = document.getElementById('logo');
    const wrap = document.getElementById('wrap');
    const wrapContent = document.getElementById('wrap-content');
    

    fadeContent(wrapContent, "out");
    changeHeight(logo, 150);
    changeHeight(wrap, 450);
    changeWidth(wrap, 900);
    
    
 
};

module.exports = splashToNewCharacter;
},{}],2:[function(require,module,exports){

const authForms = {

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
        
    `,
};

module.exports = authForms;
},{}],3:[function(require,module,exports){
const splashToNewCharacter = require('./animations');

const newCharacter = function(user) {
    splashToNewCharacter();
};

module.exports = newCharacter;
},{"./animations":1}],4:[function(require,module,exports){
const htmls = require('./app/htmls');
const newCharacter = require('./app/new_character');

const bodyData = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

const sortErrors = (data) => {

    Object.keys(data).map(key => {
        let invalidField = document.getElementById(key);
        invalidField.classList.add('invalid');
        invalidField.placeholder = data[key];
    });
};

const sendAuth = (action, data) => {

    let url = "/api/users/" + action;

    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            body: bodyData(data)
        })
        //Collecting json response
        .then(response => response.json())
        //Extracting data & pro
        .then(data => {

            if (data.success)
                if(data.user.fighters.length === 0)
                    newCharacter(data.user);
                else
                    alert('Has many characters');//Already has a character...
            else
                sortErrors(data);
        })
        .catch(err => window.err = err);
};

const submit = () => {
    const action = document.getElementById('action').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let loginData = { email, password };
    let registerData = {};

    if(action === 'register'){
        const handle = document.getElementById('handle').value;
        const password2 = document.getElementById('password2').value;
        registerData = { handle, password2 };
    }

    //Pass action and merge data
    sendAuth(action, { ...loginData, ...registerData })
}

document.addEventListener("DOMContentLoaded", () => {



    function showSignInForm(){      

        const wrapContent = document.getElementById('wrap-content');        

        wrapContent.innerHTML = htmls.singIn;

        //Listens to form swap
        document.getElementById('swap').addEventListener('click', showSignUpForm);

        const form = document.getElementById('auth-form');

        form.onsubmit = newCharacter; //TOFIX swap for (submit;)    
        
    }

    function showSignUpForm() {

        const wrapContent = document.getElementById('wrap-content');

        wrapContent.innerHTML = htmls.singUp;

        // Listens to form swap
        document.getElementById('swap').addEventListener('click', showSignInForm);

        //Submit form
        const form = document.getElementById('auth-form');
        form.onsubmit = newCharacter; //TOFIX swap for (submit;)
        
    } 

    showSignInForm();  
   
});
},{"./app/htmls":2,"./app/new_character":3}]},{},[4]);
