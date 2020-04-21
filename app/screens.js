const htmls = require('./htmls');
const splashToNewCharacter = require('./animations');

const newCharacter = function() {
    
    const charactersList = ['hanzo','kateena'];
    let currentCharacter = splashToNewCharacter();

    //console.log(currentCharacter);

    const leftArrow = document.getElementById('left-arrow');
    console.log(leftArrow);
    const rightArrow = document.getElementById('right-arrow');
    console.log(rightArrow);


    leftArrow.addEventListener("click", e => {
        
        if (currentCharacter !== 0) currentCharacter--;

        document.getElementsByClassName('character-profile')[0].innerHTML = htmls.characters[charactersList[currentCharacter]];
    });

    rightArrow.addEventListener("click", e => {

        if (currentCharacter !== charactersList.length - 1) currentCharacter++;

        document.getElementsByClassName('character-profile')[0].innerHTML = htmls.characters[charactersList[currentCharacter]];
    });

};

module.exports = newCharacter;