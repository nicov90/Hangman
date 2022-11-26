const indexCanvas = document.querySelector("#index-canvas");
const ctxIndex = indexCanvas.getContext("2d");

ctxIndex.font = "italic 50px Nerko One";
ctxIndex.fillStyle = "black";
ctxIndex.fillRect(20,20,360,260);
ctxIndex.fillStyle = "beige";
ctxIndex.fillRect(30,30,340,240);
ctxIndex.fillStyle = "brown";
ctxIndex.fillText("Juego",140,104);
ctxIndex.fillText("del",165,164);
ctxIndex.fillText("Ahorcado",105,217.5);