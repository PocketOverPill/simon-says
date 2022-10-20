console.log("OIS");

var green = document.getElementById("green");
var red = document.getElementById("red");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");
var atual;


function escolheCor(){
    var random = Math.floor(Math.random()*4)
    switch (random) {
        case 0:
            atual = green;
            atual.style.backgroundColor = "white";
            setTimeout(() => { atual.style.backgroundColor = "green"; }, 300);
            break;
        case 1:
            atual = red;
            atual.style.backgroundColor = "white";
            setTimeout(() => { atual.style.backgroundColor = "red"; }, 300);
            break;
        case 2:
            atual = blue;
            atual.style.backgroundColor = "white";
            setTimeout(() => { atual.style.backgroundColor = "blue"; }, 300);
            break;
        case 3:
            atual = yellow;
            atual.style.backgroundColor = "white";
            setTimeout(() => { atual.style.backgroundColor = "yellow"; }, 300);
            break;      
        default:
            break;    }
            console.log(atual);

            atual.style.backgroundColor = "white";


}




