
function changeHeight(element, newHeight) {
    
    let elementHeight = element.offsetHeight;
    let resizingHeight = setInterval(resize, 10);

    function resize() {
        if (elementHeight === newHeight) {
        clearInterval(resizingHeight);
        }else {
            if (elementHeight !== newHeight) 
                //growa ir shrinks based on ratio of current size v new size
                wrap.style.height = elementHeight < newHeight ? elementHeight++ + 'px' : elementHeight-- + 'px';
        }
    }
}

function changeWidth(element, newWidth) {

    let elementWidth = element.offsetWidth;
    let resizingWidth = setInterval(resize, 10);

    function resize() {
        if (elementWidth === newWidth) {
            clearInterval(resizingWidth);
        } else {
            if (elementWidth !== newWidth)
                //growa ir shrinks based on ratio of current size v new size
                wrap.style.width = elementWidth < newWidth ? elementWidth++ + 'px' : elementWidth-- + 'px';
        }
    }
}

const splashToNewCharacter = function() {
    const logo = document.getElementById('logo');
    const wrap = document.getElementById('wrap');

    changeHeight(wrap, 450);
    changeWidth(wrap, 900);
    
    // const trans = function () {
    //     wrap.animate([
    //         { transform: 'translateX(0px)' },
    //         { transform: 'scaleX(2)' },
    //         //{ transform: 'translateX(300px)' }        
    //     ], {
    //         duration: 1000,
    //         fill: "forwards"
    //     });
    // }


    
    

    // function resize() {

    //     console.log(wrapWidth);
    //     console.log(typeof wrapWidth);
    //     if (wrapWidth === 150 && logoHeight === 150)
    //         clearInterval(resizing);
    //     else {
    //         if (wrapWidth !== 150){
    //             wrapWidth--;
    //             wrap.style.height = wrapWidth + 'px';
    //         }
    //         if (logoHeight !== 150){
    //             logoHeight--;
    //             logo.style.height = logoHeight.toString() + 'px';
    //         }
    //     }
    // }  
};

module.exports = splashToNewCharacter;