
function changeHeight(element, newHeight) {
    
    let elementHeight = element.offsetHeight;
    let resizingHeight = setInterval(resize, 5);

    function resize() {
        if (elementHeight === newHeight) {
        clearInterval(resizingHeight);
        }else {
            if (elementHeight !== newHeight) 
                //growa ir shrinks based on ratio of current size v new size
                element.style.height = elementHeight < newHeight ? elementHeight++ + 'px' : elementHeight-- + 'px';
        }
    }
}

function changeWidth(element, newWidth) {

    let elementWidth = element.offsetWidth;
    let resizingWidth = setInterval(resize, 5);

    function resize() {
        if (elementWidth === newWidth) {
            clearInterval(resizingWidth);
        } else {
            if (elementWidth !== newWidth)
                //growa ir shrinks based on ratio of current size v new size
                element.style.width = elementWidth < newWidth ? elementWidth++ + 'px' : elementWidth-- + 'px';
        }
    }
}

const splashToNewCharacter = function() {
    const logo = document.getElementById('logo');
    const wrap = document.getElementById('wrap');

    changeHeight(logo, 150);
    changeHeight(wrap, 450);
    changeWidth(wrap, 900);
    
 
};

module.exports = splashToNewCharacter;