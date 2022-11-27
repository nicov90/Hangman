function mainBox(gameStarted){
    if(!gameStarted){
        ctx.font = "italic 35px Nerko One";
        ctx.fillStyle = "black"
        ctx.fillRect(160,80,280,180);
        ctx.fillStyle = "beige";
        ctx.fillRect(170,90,260,160);
        ctx.fillStyle = "darkred"
        ctx.fillText("Juego",257.5,140);
        ctx.fillText("del",275,180);
        ctx.fillText("Ahorcado",232.5,215);
    }
    else{
        ctx.clearRect(160,80,280,180);
    }
}
function validateKey(e,regex,inputKey){
    if(regex.test(e.key)){
        inputKey = e.key.toUpperCase();
    }
    return inputKey;
}
function wordLength(){
    switch (wordReady.length) {
        case 4: x = 210;
            break;
        case 5: x = 180;
            break;
        case 6: x = 150;
            break;
        case 7: x = 120;
            break;
        case 8: x = 85;
    }
}
function createLines(){
    ctxLines.fillStyle = "darkblue";
    wordLength();
    wordReady.forEach(e => {
        ctxLines.beginPath();
        ctxLines.moveTo(x - 18,65);
        ctxLines.lineTo(x + 18,65);
        ctxLines.lineTo(x + 18,62);
        ctxLines.lineTo(x - 18,62);
        ctxLines.fill();
        x += 60;
    });
}
function mainGame(){
    let tryCounter = 0; // Lleva la cuenta cada vez que se intenta agregar una letra.
    let pos = 1; // Usado para controlar el dibujado de lineas.
    let gameStarted = false; // Usado para hacer desaparecer el letrero principal si el juego comenzó.

    const letterHistory = [];

    ctxLines.textAlign = "center";
    ctxLines.textBaseline = "middle";

    mainBox(gameStarted);

    window.addEventListener("keydown",(e)=> {
        duplicate = false;
        if(!endgame){ // Si el juego no está terminado...
            letterCheck = false; // Variable para restringir el dibujado de lineas si la letra ingresada es correcta.
            const regex = /^[A-Za-z\u00F1\u00D1]$/;
            let inputKey = null;
            inputKey = validateKey(e,regex,inputKey);
            
            wordLength();

            // Creating letter history //
            if(inputKey != null){
                if(tryCounter == 0){
                    letterHistory.push(inputKey);
                    ctxLines.fillStyle = "rgb(225,0,0)";
                    ctxLines.font = "20px Inter";
                    ctxLines.fillText(inputKey,x2,100);
                }
                if(tryCounter > 0){
                    letterHistory.forEach((eLetterHistory) =>{
                        if(eLetterHistory == inputKey){
                            duplicate = true;
                        }
                    });
                    if(!duplicate){
                        x2 += 30;
                        letterHistory.push(inputKey);
                        ctxLines.fillStyle = "rgb(225,0,0)";
                        ctxLines.font = "20px Inter";
                        ctxLines.fillText(inputKey,x2,100);
                    }
                }
            }
            //

            ctxLines.fillStyle = "darkblue";
            ctxLines.font = "35px Inter";

            wordReady.forEach((e2,index) => {
                if(inputKey != null){
                    if(index == 1 && pos == 1){
                        gameStarted = true;
                        mainBox(gameStarted);
                    }
                    if(inputKey == e2){
                        ctxLines.fillText(e2,x,40);
                        letterCheck = true;
                        checkCounter++;
                        }
                        x += 60; // Posiciona las letras en X
            
                        /* Lineas del dibujo, se ejecuta solo al terminar de revisar todo el array y
                        si la letra ingresada no coincidió con alguna anteriormente. */
            
                    if( (inputKey != e2) && (index == (wordReady.length - 1) && (!letterCheck)) ){
                        switch (pos) {
                            case 1: ctx.fillStyle="darkblue";
                                    ctx.moveTo(200,325);
                                    ctx.lineTo(200,330);
                                    ctx.lineTo(400,330);
                                    ctx.lineTo(400,325);
                                    ctx.lineTo(200,325);
                                    ctx.fill();
                                    pos++;
                                break;
        
                            case 2: ctx.moveTo(230,325);
                                    ctx.lineTo(230,40);
                                    ctx.lineTo(235,40);
                                    ctx.lineTo(235,325);
                                    ctx.fill();
                                    pos++;
                                break;
        
                            case 3: ctx.moveTo(235,40);
                                    ctx.lineTo(350,40);
                                    ctx.lineTo(350,45);
                                    ctx.lineTo(235,45);
                                    ctx.fill();
                                    pos++;
                                break;
        
                            case 4: ctx.moveTo(350,45);
                                    ctx.lineTo(350,85);
                                    ctx.lineTo(345,85);
                                    ctx.lineTo(345,45);
                                    ctx.fill();
                                    pos++;
                                break;
                            // Cabeza
                            case 5: ctx.beginPath();
                                    ctx.arc(347.5,105,30,0,2*3.14);
                                    ctx.fill();
                                    ctx.beginPath();
                                    ctx.fillStyle="rgb(255, 241, 223)";
                                    ctx.arc(347.5,105,25,0,2*3.14);
                                    ctx.fill();
                                    pos++;
                                break;
        
                            case 6: ctx.beginPath();
                                    ctx.fillStyle="darkblue"
                                    ctx.moveTo(350,130);
                                    ctx.lineTo(350,220);
                                    ctx.lineTo(345,220);
                                    ctx.lineTo(345,130);
                                    ctx.fill();
                                    pos++;
                                break;
        
                            case 7: ctx.moveTo(345,220);
                                    ctx.lineTo(300,290);
                                    ctx.lineTo(305,290);
                                    ctx.lineTo(350,220);
                                    ctx.fill();
                                    pos++;
                                break;
        
                            case 8: ctx.moveTo(350,220);
                                    ctx.lineTo(395,290);
                                    ctx.lineTo(390,290);
                                    ctx.lineTo(345,220);
                                    ctx.fill();
                                    pos++;
                                break;
        
                            case 9: ctx.beginPath();
                                    ctx.moveTo(345,165);
                                    ctx.lineTo(290,220);
                                    ctx.lineTo(296,220);
                                    ctx.lineTo(351,165);
                                    ctx.fill();
                                    pos++;
                                break;
        
                            case 10: ctx.beginPath();
                                    ctx.moveTo(350,165);
                                    ctx.lineTo(406,220);
                                    ctx.lineTo(400,220);
                                    ctx.lineTo(344,165);
                                    ctx.fill();
                                    pos++;
                                break;
                        }
                    }
                    if(pos == 11){
                        // Texto Game Over
                        ctx.fillStyle = "rgb(210,0,0)";
                        ctx.font = "bold 25px Inter";
                        ctx.fillText("Has perdido!",40,180);
                        ctx.fillStyle = "rgb(101,0,33)"
                        ctx.font = "bold 21px sans-serif";
                        ctx.fillText("La palabra era:",40,240);
                        secretWord = wordReady.join("");
                        ctx.fillStyle = "brown";
                        ctx.font = "italic bold 21px Inter";
                        ctx.fillText(`${secretWord}`,40,270);
                        
                        endgame = true;
                    }
                    if(checkCounter == wordReady.length){
                        // Texto Pass
                        ctx.fillStyle = "rgb(0,200,0)";
                        ctx.font = "bold 24px Inter";
                        ctx.fillText("Felicidades!",40,110);
                        ctx.fillStyle = "forestgreen"
                        ctx.font = "bold 22px Inter";
                        ctx.fillText("Has adivinado",40,160);
                        ctx.fillText("la palabra :)",40,190);
                        endgame = true;
                    }
                }
            });
            tryCounter++;
        }
    });
};
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const canvasLines = document.querySelector("#canvas-lines");
const ctxLines = canvasLines.getContext("2d");
ctx.fillStyle = "darkblue";
let checkCounter = 0; // Para verificar si la cantidad de letras ingresadas correctas coincide con la longitud de la palabra.
var x2 = 120; // Para mover la posición en X de las letras del historial.
var endgame = false;
var duplicate = false;

randomWord();
console.log(wordReady);
createLines();
mainGame();

const newGame = document.querySelector("#new-game-button");
newGame.addEventListener("click",(e)=>{
    window.location.reload();
});