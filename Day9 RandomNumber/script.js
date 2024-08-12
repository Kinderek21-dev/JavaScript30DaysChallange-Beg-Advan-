
function generateRandomNumber(){
    const OD = parseInt(document.getElementById('od').value);
    const DO = parseInt(document.getElementById('do').value);
    const randomNumber = Math.floor(Math.random() * (DO - OD + 1) + OD);
    if(OD > DO){
        
        document.getElementById('number').innerText = "invalid Numbers";
        return;
    }else {
        document.getElementById('number').innerText = randomNumber;
    }
}
function clearNumber(){
    document.getElementById('number').innerText = "";
    document.getElementById('od').value = "";
    document.getElementById('do').value = "";
}