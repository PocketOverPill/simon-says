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
            break;
        case 1:
            atual = red;
            break;
        case 2:
            atual = blue;
            break;
        case 3:
            atual = yellow;
            break;      
        default:
            break;    }
            console.log(atual);


}




