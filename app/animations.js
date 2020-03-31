
const splashToNewCharacter = function() {
    const logo = document.getElementById('logo');
    const wrap = document.getElementById('wrap');
    
    window.logo = logo;
    window.wrap = wrap;
    
    let logoHeight = logo.height;
    let wrapWidth = wrap.width;
    let resizing = setInterval(resize, 10);

    wrap.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(300px)' }
    ], {
        duration: 1000,
        fill: "forwards"
    });

    function resize() {
        if (wrapWidth === 450 && logoHeight === 150)
            clearInterval(resizing);
        else {
            if (wrapWidth !== 450){
                wrapWidth++;
                wrap.style.width = wrapWidth + 'px';
            }
            if (logoHeight !== 150){
                logoHeight--;
                logo.style.height = logoHeight + 'px';
            }
        }
    }  
};

module.exports = splashToNewCharacter;