const wyswietl = document.getElementById("wynik");
function Usun() {
    wyswietl.value = wyswietl.value.slice(0, -1);
}
function gowno(input){
    wyswietl.value += input;
}
function Obliczenia(){
    wyswietl.value = eval(wyswietl.value);
}
function Czyszczenie(){
    wyswietl.value = "";
}
