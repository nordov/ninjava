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

    const wrapContent = document.getElementById('wrap-content');
    
    wrapContent.innerHTML = htmls.justPlay; 
   
});