
const splashToNewCharacter = function() {
    const logo = document.getElementById('logo');
    const wrap = document.getElementById('wrap');
    
    window.logo = logo;
    window.wrap = wrap;
    console.log(wrap);

    let logoHeight = logo.height;
    let wrapWidth = wrap.width;
    let resizing = setInterval(resize, 60);

    wrap.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(300px)' }
    ], {
        duration: 1000,
        fill: "forwards"
    });

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