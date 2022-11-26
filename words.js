const wordInput = document.querySelector("#word-input");
const buttonSave = document.querySelector("#button-save");
const words = ['Futbol','Deporte','Manzana','Arbol','Economia','Puerta','Basilica',
                'Montaña','Pieza','Honduras','Casa','Lazo','Consola','Vehiculo'];
const wordReady = [];

function randomWord(){
    let chosenWord = words[Math.floor(Math.random()*(words.length-1))]
    console.log(chosenWord);
    for(let i=0;i<chosenWord.length;i++){
        let letter = (chosenWord.charAt(i)).toUpperCase();
        wordReady.push(letter);
    }
}
buttonSave.addEventListener("click",(e)=>{
    e.preventDefault();
    let input = wordInput.value;
    if(input!=""){
    words.push(input);
    console.log(words);
    }
})
function validateKey(e,regex,inputKey){
    if(regex.test(e.key)){
        inputKey = e.key.toUpperCase();
    }
    return inputKey;
}