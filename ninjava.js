const htmls = require('./app/htmls');
const newCharacter = require('./app/screens');


document.addEventListener("DOMContentLoaded", () => {

    const wrapContent = document.getElementById('wrap-content');
    
    wrapContent.innerHTML = htmls.justPlay; 

    const playButton = document.getElementById('clickNPlay');

    playButton.onclick = newCharacter();     
   
});