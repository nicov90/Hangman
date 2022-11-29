const indexCanvas = document.querySelector("#index-canvas");
const ctxIndex = indexCanvas.getContext("2d");

function mainBox(){
    ctxIndex.font = "bold 40px Georgia";
    ctxIndex.fillStyle = "black";
    ctxIndex.fillRect(20,20,360,260);
    ctxIndex.fillStyle = "blanchedalmond";
    ctxIndex.fillRect(30,30,340,240);
    ctxIndex.fillStyle = "brown";
    ctxIndex.fillText("Juego",146,108);
    ctxIndex.fillText("del",166,165);
    ctxIndex.fillText("Ahorcado",101,214.5);
}
mainBox();