const inputMobile = document.querySelector(".input-mobile");
const tipMessage = document.querySelector(".tips");

if(window.innerWidth < 480){
    tipMessage.innerHTML = "Presione en el cuadro para enviar una letra";
}

function mainGameMobile(){
    let tryCounter = 0; // Lleva la cuenta cada vez que se intenta agregar una letra.
    let pos = 1; // Usado para controlar el dibujado de lineas.
    let gameStarted = false; // Usado para hacer desaparecer el letrero principal si el juego comenzó.
    const letterRegistry = [];
    const letterHistory = [];

    ctxLines.textAlign = "center";
    ctxLines.textBaseline = "middle";

    mainBox(gameStarted);
    function clearInput(){
        inputMobile.value = "";
    }
    inputMobile.addEventListener("input",(e) =>{
        duplicate = false;
        if(!endgame){ // Si el juego no está terminado...
            letterCheck = false; // Variable para restringir el dibujado de lineas si la letra ingresada es correcta.
            const regex = /^[A-Za-z\u00F1\u00D1]$/;
            let inputKey = null;

            inputMobile.value = inputMobile.value.toUpperCase();
            if(regex.test(inputMobile.value)){
                inputKey = inputMobile.value;
            }
            setTimeout(clearInput, 100);
            wordLength();

            // Creating letter history //
            if(inputKey != null){
                if(tryCounter == 0){
                    letterHistory.push(inputKey);
                    ctxLines.fillStyle = "rgb(225,0,0)";
                    if(window.innerWidth < 480){ // MOBILE
                        ctxLines.font = "30px Inter";
                        ctxLines.fillText(inputKey,x2,110);
                    }
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
                        if(window.innerWidth < 480){ // MOBILE
                            ctxLines.font = "30px Inter";
                            ctxLines.fillText(inputKey,x2,110);
                        }
                    }
                }
            }
            //
            if(window.innerWidth < 480){
                ctxLines.font = "65px Inter";
            }
            ctxLines.fillStyle = "darkblue";
            

            wordReady.forEach((e2,index) => {
                if(inputKey != null){
                    if(index == 1 && pos == 1){
                        gameStarted = true;
                        mainBox(gameStarted);
                    }
                    if(inputKey == e2){
                        letterCheck = true;
                        if(!letterRegistry.includes(inputKey)){
                            ctxLines.fillText(e2,x,40);
                            checkCounter++;
                        }
                    }
                    x += 60; // Posiciona las letras en X
            
                    /* Lineas del dibujo, se ejecuta solo al terminar de revisar todo el array y
                    si la letra ingresada no coincidió con alguna anteriormente. */

                    // MOBILE
                    if( (inputKey != e2) && (index == (wordReady.length - 1) && (!letterCheck)) && (window.innerWidth < 480)){
                        switch (pos) {
                            case 1: 
                                    ctx.fillStyle="darkblue";
                                    ctx.moveTo(200-50,345);
                                    ctx.lineTo(200-50,350);
                                    ctx.lineTo(400+50,350);
                                    ctx.lineTo(400+50,345);
                                    ctx.lineTo(200-50,345);
                                    ctx.fill();
                                    pos++;
                                break;
        
                            case 2: ctx.moveTo(230-50,325+20);
                                    ctx.lineTo(230-50,40-20);
                                    ctx.lineTo(235-50,40-20);
                                    ctx.lineTo(235-50,325+20);
                                    ctx.fill();
                                    pos++;
                                break;
        
                            case 3: ctx.moveTo(235-50,40-20);
                                    ctx.lineTo(350+20,40-20);
                                    ctx.lineTo(350+20,45-20);
                                    ctx.lineTo(235-50,45-20);
                                    ctx.fill();
                                    pos++;
                                break;
        
                            case 4: ctx.moveTo(350+20,45-20);
                                    ctx.lineTo(350+20,75-20);
                                    ctx.lineTo(345+20,75-20);
                                    ctx.lineTo(345+20,45-20);
                                    ctx.fill();
                                    pos++;
                                break;
                            // Cabeza
                            case 5: ctx.beginPath();
                                    ctx.arc(347.5+20,105-20,35,0,2*3.14);
                                    ctx.fill();
                                    ctx.beginPath();
                                    ctx.fillStyle="rgb(255, 241, 223)";
                                    ctx.arc(347.5+20,105-20,30,0,2*3.14);
                                    ctx.fill();
                                    pos++;
                                break;
        
                            case 6: ctx.beginPath();
                                    ctx.fillStyle="darkblue"
                                    ctx.moveTo(350+20,130-10);
                                    ctx.lineTo(350+20,220);
                                    ctx.lineTo(345+20,220);
                                    ctx.lineTo(345+20,130-10);
                                    ctx.fill();
                                    pos++;
                                break;
        
                            case 7: ctx.moveTo(345+20,220);
                                    ctx.lineTo(300+20,290);
                                    ctx.lineTo(305+20,290);
                                    ctx.lineTo(350+20,220);
                                    ctx.fill();
                                    pos++;
                                break;
        
                            case 8: ctx.moveTo(350+20,220);
                                    ctx.lineTo(395+20,290);
                                    ctx.lineTo(390+20,290);
                                    ctx.lineTo(345+20,220);
                                    ctx.fill();
                                    pos++;
                                break;
        
                            case 9: ctx.beginPath();
                                    ctx.moveTo(345+20,165);
                                    ctx.lineTo(290+20,220);
                                    ctx.lineTo(296+20,220);
                                    ctx.lineTo(351+20,165);
                                    ctx.fill();
                                    pos++;
                                break;
        
                            case 10: ctx.beginPath();
                                    ctx.moveTo(350+20,165);
                                    ctx.lineTo(406+20,220);
                                    ctx.lineTo(400+20,220);
                                    ctx.lineTo(344+20,165);
                                    ctx.fill();
                                    pos++;
                                break;
                        }
                    }
                    if(pos == 11){
                        // Texto Game Over
                        if(window.innerWidth < 480){ // MOBILE
                            ctxMobile.fillStyle = "rgb(210,0,0)";
                            ctxMobile.font = "bold 20px Inter";
                            ctxMobile.fillText("Has perdido! La palabra era:",25,25);
                            secretWord = wordReady.join("");
                            ctxMobile.fillStyle = "brown";
                            ctxMobile.font = "italic bold 25px Inter";
                            ctxMobile.fillText(`${secretWord}`,100,55);
                        }
                        endgame = true;
                    }
                    if(checkCounter == wordReady.length){
                        // Texto Pass
                        if(window.innerWidth < 480){ // MOBILE
                            ctxMobile.fillStyle = "forestgreen";
                            ctxMobile.font = "bold 20px Inter";
                            ctxMobile.fillText("Felicidades!",110,25);
                            ctxMobile.fillText("Has adivinado la palabra :)",40,50);
                        }
                        endgame = true;
                    }
                    if(endgame){
                        inputMobile.style.display = "none";
                    }
                }
            });
            tryCounter++;
            letterRegistry.push(inputKey);
        }
    });
}
mainGameMobile();