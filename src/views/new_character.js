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

