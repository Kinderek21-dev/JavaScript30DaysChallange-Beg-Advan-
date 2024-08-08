
function oblicz(){
    let cenaRachunku = document.getElementById('rachunek');
    let tip = document.getElementById('napiwek');
    let wartoscRachunku = cenaRachunku.value;
    let wartoscTipu = tip.value;
    let ostatecznaRachunku = wartoscRachunku * (1 + wartoscTipu / 100);
    let  result = document.getElementById('result');
    result.innerText = "Rachunek wynosi: " +ostatecznaRachunku.toFixed(2) + "zł";
}

