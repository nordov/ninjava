const htmls = require('./htmls');

/*************************************/
/* CHOOSE FIGHTER SCREEN             */
/*************************************/
const movesSelection = function (character) {

    const movesContent = document.getElementsByClassName('character-info')[0];

    movesContent.innerHTML = htmls.movesSelection;
    document.getElementsByClassName('arrows')[0].innerHTML = "";
    document.getElementsByClassName('arrows')[1].innerHTML = "";
};

module.exports = movesSelection;