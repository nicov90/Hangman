const indexCanvas = document.querySelector("#index-canvas");
const ctxIndex = indexCanvas.getContext("2d");

function mainBox(){
    ctxIndex.font = "bold italic 40px Georgia";
    ctxIndex.fillStyle = "black";
    ctxIndex.fillRect(20,20,360,260);
    ctxIndex.fillStyle = "blanchedalmond";
    ctxIndex.fillRect(30,30,340,240);
    ctxIndex.fillStyle = "brown";
    ctxIndex.fillText("Juego",140,106);
    ctxIndex.fillText("del",165,160);
    ctxIndex.fillText("Ahorcado",99,208.5);
}
mainBox();