console.log("OIS");

var green = document.getElementById("green");
var red = document.getElementById("red");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");

var atual;
var arrayResposta = [];
var arrayPlayer = [];
var start = false;
var timeOut = 15;
var secondsLeft = document.getElementById("secondsLeft");

var funcoesJogo = function escolheCor(){
    var random = Math.floor(Math.random()*4)
    switch (random) {
        case 0:
            atual = green;
            atual.style.backgroundColor = "white";
            setTimeout(() => { atual.style.backgroundColor = "green"; }, 300);
            arrayResposta.push(random);
            break;
        case 1:
            atual = red;
            atual.style.backgroundColor = "white";
            setTimeout(() => { atual.style.backgroundColor = "red"; }, 300);
            arrayResposta.push(random);
            break;
        case 2:
            atual = blue;
            atual.style.backgroundColor = "white";
            setTimeout(() => { atual.style.backgroundColor = "blue"; }, 300);
            arrayResposta.push(random);
            break;
        case 3:
            atual = yellow;
            atual.style.backgroundColor = "white";
            setTimeout(() => { atual.style.backgroundColor = "yellow"; }, 300);
            arrayResposta.push(random);
            break;      
        default:
            break;    }

            atual.style.backgroundColor = "white";
}

while (start) {
    setTimeout(funcaoJogo, 300);
    setInterval(segundos(),1000)
}


var timer = setInterval(segundos,1000);
console.log(timeOut-1);

function segundos(){
if (timeOut == 0) {
    console.log(timeOut)
    secondsLeft.innerHTML = "15";
    clearInterval(timer);
    secondsLeft.style.color = "black"
    secondsLeft.style.borderColor = "black"
    

    
}else if(timeOut < 7){
    secondsLeft.style.color = "red"
    secondsLeft.style.borderColor = "red"
}
if(timeOut > 0){
secondsLeft.innerHTML = `${(timeOut-1)}`
timeOut -= 1;
}}

