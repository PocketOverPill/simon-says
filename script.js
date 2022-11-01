console.log("OIS");

//Declaração objetos do jogo (triângulos de cada cor)
var gameObjects = [{
    "color": "green",
    "element": document.getElementById("green")
    },
    {
    "color": "red",
    "element": document.getElementById("red")
    },
    {
    "color": "blue",
    "element": document.getElementById("blue")
    },
    {
    "color": "yellow",
    "element": document.getElementById("yellow")},
];
//Declaração de variáveis globais;

var atual;
var arrayResposta = [];
var arrayPlayer = [];
var start = false;
var timeOut = 15;
var secondsLeft = document.getElementById("secondsLeft");
var timerOn = false;
var timer = {};

var botao = document.getElementById("buttonStart");


function pisca(object){
    object.element.style.backgroundColor = "white";
    setTimeout(() => { object.element.style.backgroundColor = object.color; }, 300);
}

//Função escolher cor aleatória e pushar o resultado em número para uma arrayResposta

function escolheCor(){
    var random = Math.floor(Math.random()*4)
    switch (random) {
        case 0:
            pisca(gameObjects[0])
            arrayResposta.push(random);
            break;
        case 1:
            pisca(gameObjects[1])
            arrayResposta.push(random);
            break;
        case 2:
            pisca(gameObjects[2])
            arrayResposta.push(random);
            break;
        case 3:
            pisca(gameObjects[3])
            arrayResposta.push(random);
            break;      
        default:
            break;    }


}
//TODO implementar sequência que printa a arrayResposta depois escolheCor() 

function sequenciaMatriz(array){
    if(array.length == 0){
    console.log("array vazia");
    }else{
        array.forEach(element => {
                    
        });
    }
}
//Função principal começar jogo (botão)

botao.addEventListener("click", startGame);

function startGame(){

    escolheCor();
    
    if(timerOn == true){

    }else{
    timer = setInterval(segundos,1000);
    timerOn = true;
    }
   

}




// Função para timer

function segundos(){
if (timeOut == 0) {
    secondsLeft.innerHTML = "15";

    secondsLeft.style.color = "black"
    secondsLeft.style.borderColor = "black"
    clearInterval(timer);
    timerOn = false;

    
}else if(timeOut < 7){
    secondsLeft.style.color = "red"
    secondsLeft.style.borderColor = "red"
}
if(timeOut > 0){
secondsLeft.innerHTML = `${(timeOut-1)}`
timeOut -= 1;
}}

