const pytania = [
    {
        pytanie: "Która wiedzma je gówno",
        odpowiedzi: [
            {text: "Kuchta", correct: true},
            {text: "Baba Jaga", correct: false},
            {text: "Max", correct: false},
            {text: "Jadzia", correct: false},
        ]
    },
    {
        pytanie: "Gdy masz srake to dzwonisz do?",
        odpowiedzi: [
            {text: "Kuchta", correct: false},
            {text: "Karetke", correct: false},
            {text: "Sledzia", correct: false},
            {text: "Max", correct: true},
        ]
    },
    {
        pytanie: "Czy ten quiz jest zajebisty",
        odpowiedzi: [
            {text: "tak", correct: false},
            {text: "syf", correct: false},
            {text: "nie", correct: true},
            {text: "klaki z dupy", correct: false},
        ]
    },
    {
        pytanie: "Co pływa w pewnej rzece na S?",
        odpowiedzi: [
            {text: "Utopce", correct: true},
            {text: "Gówno", correct: true},
            {text: "Woda", correct: false},
            {text: "Nic bo to las", correct: false},
        ]
    }
]; 

const JakiePytanie = document.getElementById("pytanie");
const PrzyciskiOdp = document.getElementById("przyciski");
const NextPytanie = document.getElementById("btnN");
const span = document.getElementById("span");
let i = 0;
let wynik = 0;

function start(){
    i = 0;
    wynik = 0;
    NextPytanie.innerHTML = "Następne";
    span.innerHTML = "";
    pokazPytanie();
}

function pokazPytanie(){
    pyt();
    let AktualnePytanie = pytania[i];
    let q = i + 1;
    JakiePytanie.innerHTML = q + ". " + AktualnePytanie.pytanie;
    
    AktualnePytanie.odpowiedzi.forEach(odpowiedz =>{
        const btn = document.createElement("button");
        btn.innerHTML = odpowiedz.text;
        btn.classList.add("btn");
        if(odpowiedz.correct){
            btn.dataset.git = odpowiedz.correct;
        }
        btn.addEventListener("click", wybierzOdp);
        PrzyciskiOdp.appendChild(btn);
    });
}

function wybierzOdp(e){
    const wybranyBtn = e.target;
    const jestGit = wybranyBtn.dataset.git === "true";
    if(jestGit){
        wybranyBtn.classList.add("git");
        wynik++;
    }else{
        wybranyBtn.classList.add("gowno");
    }
    
    if (i < pytania.length - 1) {
        i++;
        pokazPytanie();
    } else {

        PrzyciskiOdp.style.display = "none";
        JakiePytanie.innerHTML = "Koniec quizu! Twój wynik: " + wynik;
        NextPytanie.style.display = "none";  
    }
    if (wynik === pytania.length){
        span.innerHTML = "Gratulacje Gównozjadaczu 4/4";
        JakiePytanie.style.display = "none"; next
    }
    
}

function pyt(){
    NextPytanie.style.display = "none";
    PrzyciskiOdp.style.display = "block";  
    while (PrzyciskiOdp.firstChild){
        PrzyciskiOdp.removeChild(PrzyciskiOdp.firstChild);
    }
}

start();
