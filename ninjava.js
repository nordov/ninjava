const htmls = require('./app/htmls');
const newCharacter = require('./app/new_character');


document.addEventListener("DOMContentLoaded", () => {

    const wrapContent = document.getElementById('wrap-content');
    
    wrapContent.innerHTML = htmls.justPlay; 

    const form = document.getElementById('auth-form');

    form.onsubmit = newCharacter;     
   
});