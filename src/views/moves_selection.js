const htmls = require('./htmls');
const battle = require('./battle');

/*************************************/
/* CHOOSE FIGHTER SCREEN             */
/*************************************/
const movesSelection = function (character) {

    const movesContent = document.getElementsByClassName('character-info')[0];

    movesContent.innerHTML = htmls.movesSelection;
    document.getElementsByClassName('arrows')[0].innerHTML = "";
    document.getElementsByClassName('arrows')[1].innerHTML = "";

    document.getElementById('fight').addEventListener('click', (e) => {
        e.preventDefault();
        battle();
    });
};

module.exports = movesSelection;