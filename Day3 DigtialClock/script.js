function sTime() {
    
    let g = document.querySelector('.godziny');
    let m = document.querySelector('.minuty');
    let s = document.querySelector('.sekundy');
    let ms =document.querySelector('.milisekundy');

    function updateClock(){
    const dzis = new Date();

    const godziny = dzis.getHours();
    const minuty = dzis.getMinutes();
    const sekundy = dzis.getSeconds();
    const milisekundy = dzis.getMilliseconds();

    g.textContent = godziny + ' :';
    m.textContent = minuty +' :';
    s.textContent = sekundy + ' :';
    ms.textContent = milisekundy;

    }
    setInterval(updateClock,1)
}

window.onload = sTime()