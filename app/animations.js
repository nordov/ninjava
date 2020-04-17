
const splashToNewCharacter = function() {
    const logo = document.getElementById('logo');
    const wrap = document.getElementById('wrap');

    function changeHeight(element, newSize) {
        
        let resizingHeight = setInterval(res, 10);
        let elementHeight = element.offsetHeight;
        console.log(elementHeight);
        
        function res() {
            if (elementHeight === 450){
                clearInterval(resizingHeight);
            }else {
                if (elementHeight !== 450) {
                    //debugger;
                    elementHeight < newSize ? elementHeight++ : elementHeight--;
                    element.style.height = elementHeight + 'px';
                }
            }
        }
    }
    
    const trans = function () {
        wrap.animate([
            { transform: 'translateX(0px)' },
            { transform: 'scaleX(2)' },
            //{ transform: 'translateX(300px)' }        
        ], {
            duration: 1000,
            fill: "forwards"
        });
    }
    
    window.logo = logo;
    window.wrap = wrap;
    console.log(wrap, 450);

    let logoHeight = logo.height;
    let wrapWidth = wrap.width;
    //let resizing = setInterval(resize, 10);
    //trans(wrap).then((wrap) => wrap.innerHTML = "<h1>Hello</h1>");
    changeHeight(wrap);
    

    function resize() {

        console.log(wrapWidth);
        console.log(typeof wrapWidth);
        if (wrapWidth === 150 && logoHeight === 150)
            clearInterval(resizing);
        else {
            if (wrapWidth !== 150){
                wrapWidth--;
                wrap.style.height = wrapWidth + 'px';
            }
            if (logoHeight !== 150){
                logoHeight--;
                logo.style.height = logoHeight.toString() + 'px';
            }
        }
    }  
};

module.exports = splashToNewCharacter;