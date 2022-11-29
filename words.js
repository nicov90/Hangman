const wordInput = document.querySelector("#word-input");
const buttonSave = document.querySelector("#button-save");
const words = ['Futbol','Deporte','Manzana','Arbol','Economia','Puerta','Hospital','Basilica',
                'Montaña','Guitarra','Borracho','Proyecto','Pieza','Honduras','Casa','Tablero','Lazo','Consola','Vehiculo'];
const wordReady = [];
const errorMessage = document.querySelector(".error-message");
let input = "";

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
    let error = "";
    const regexAdd = /^[A-Za-z\u00F1\u00D1]+$/;
    if(regexAdd.test(wordInput.value)){
        input = wordInput.value;
        console.log(input)
        if(input.length >= 4 && input.length <= 8){
            error = "";
            words.push(input);
            console.log(words);
            }
            else{
                error = "La palabra debe tener al menos 4 letras";
            }
    }else{
        error = "La palabra no debe contener números, ni caracteres especiales y debe tener entre 4 y 8 letras.";
    }
    errorMessage.innerHTML = error;
})
function validateKey(e,regex,inputKey){
    if(regex.test(e.key)){
        inputKey = e.key.toUpperCase();
    }
    return inputKey;
}