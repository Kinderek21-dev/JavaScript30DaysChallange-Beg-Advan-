function randomColor(){
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);

    let bgColor = "rgba(" + a + ","+ b + ","+ c + ")";

    document.body.style.backgroundColor = bgColor;
    document.querySelector('button').style.backgroundColor = bgColor;
}
