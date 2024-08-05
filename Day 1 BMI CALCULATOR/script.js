document.querySelector('.btn').addEventListener('click',function(){
    let wiek = document.getElementById('wiek').value;
    let waga = document.getElementById('waga').value;
    let wzrost = document.getElementById('wzrost').value;

    if(!wiek || !waga || !wzrost){
        alert('Proszę wypełnić wszystkie pola');
        return;
    }

let wzrostM = wzrost / 100;
let bmi = waga / (wzrostM * wzrostM);
document.getElementById('BMI').innerText = `Twoje Bmi Wynosi: ${bmi.toFixed(2)}`;
});