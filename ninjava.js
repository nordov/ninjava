const htmls = require('./app/views/htmls');
const newCharacter = require('./app/views/new_character');


document.addEventListener("DOMContentLoaded", () => {

    const wrapContent = document.getElementById('wrap-content');
    
    wrapContent.innerHTML = htmls.justPlay; 

    const playButton = document.getElementById('clickNPlay');

    console.log(newCharacter);

    playButton.onclick = newCharacter;     
   
});