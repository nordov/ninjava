const htmls = require('./htmls');


function changeHeight(element, newHeight) {
    
    let elementHeight = element.offsetHeight;
    let resizingHeight = setInterval(resize, 1);

    function resize() {
        if (elementHeight !== newHeight)
            //growa ir shrinks based on ratio of current size v new size
            element.style.height = elementHeight < newHeight ? elementHeight++ + 'px' : elementHeight-- + 'px';
        else
            clearInterval(resizingHeight);
    }
}

function changeWidth(element, newWidth) {

    let elementWidth = element.offsetWidth;
    let resizingWidth = setInterval(resize, 1);

    function resize() {
        if (elementWidth !== newWidth)
            //growa ir shrinks based on ratio of current size v new size
            element.style.width = elementWidth < newWidth ? elementWidth++ + 'px' : elementWidth-- + 'px';
        else
            clearInterval(resizingWidth);
    }
}

function fadeContent(element, fade, newContent = ""){

    if (fade === "out"){
        let fadeOut = setInterval(function () {
            if (!element.style.opacity) {
                element.style.opacity = 1;
            }
            if (element.style.opacity > 0) {
                element.style.opacity -= 0.1;
            } else {
                clearInterval(fadeOut);
                element.innerHTML = newContent;
            }
        }, 30); 
    } 
    if (fade === "in") {
        let fadeIn = setInterval(function () {
            if (!element.style.opacity) {
                element.style.opacity = 0;
            }            
            if (element.style.opacity < 0.9) {
                element.style.opacity += 0.1;
            } else {
                clearInterval(fadeIn);
            }
        }, 30);         
    }

}

function fadeOut(element){

    element.classList.add("hide");
    element.classList.remove("show");

}

function fadeIn(element) {

    element.classList.add("show");
    element.classList.remove("hide");

}

const splashToNewCharacter = function() {
    const logo = document.getElementById('logo');
    const wrap = document.getElementById('wrap');
    const wrapContent = document.getElementById('wrap-content');

    changeHeight(logo, 150);
    changeHeight(wrap, 450);
    changeWidth(wrap, 900);
    fadeOut(wrapContent);
    wrapContent.innerHTML = htmls.newCharacter;
    fadeIn(wrapContent, htmls.newCharacter);

    
    
 
};

module.exports = splashToNewCharacter;