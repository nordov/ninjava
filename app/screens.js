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

        alert("Left");
        const wrapContent = document.getElementById('wrap-content');

        if (currentCharacter !== 0) currentCharacter--;

        wrapContent.innerHTML = htmls.characters[charactersList[currentCharacter]];
    });

    rightArrow.addEventListener("click", e => {

        alert("Right");
        const wrapContent = document.getElementById('wrap-content');

        console.log(charactersList);

        if (currentCharacter !== charactersList.length - 1) currentCharacter++;

        wrapContent.innerHTML = htmls.characters[charactersList[currentCharacter]];
    });

};

module.exports = newCharacter;