
function changeHeight(wrap) {
    let resizingHeight = setInterval(res, 10);
    let wrapHeight = wrap.height;

    function res() {
        if (wrapHeight === 450) {
            debugger;
            clearInterval(resizingHeight);
            else {
                if (wrapHeight !== 450) {
                    debugger;
                    wrapHeight--;
                    wrap.style.height = wrapHeight + 'px';
                }
            }
        }
    }
}

const splashToNewCharacter = function() {
    const logo = document.getElementById('logo');
    const wrap = document.getElementById('wrap');

    changeHeight(wrap);
    
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