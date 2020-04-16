(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const splashToNewCharacter = function() {
    const logo = document.getElementById('logo');
    const wrap = document.getElementById('wrap');
    
    window.logo = logo;
    window.wrap = wrap;
    console.log(wrap);

    let logoHeight = logo.height;
    let wrapWidth = wrap.width;
    let resizing = setInterval(resize, 60);

    wrap.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(300px)' }
    ], {
        duration: 1000,
        fill: "forwards"
    });

    function resize() {

        console.log(wrapWidth);
        console.log(typeof wrapWidth);
        if (wrapWidth === 150 && logoHeight === 150)
            clearInterval(resizing);
        else {
            if (wrapWidth !== 150){
                wrapWidth--;
                wrap.style.height = wrapWidth + 'px';
            }
            if (logoHeight !== 150){
                logoHeight--;
                logo.style.height = logoHeight.toString() + 'px';
            }
        }
    }  
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
