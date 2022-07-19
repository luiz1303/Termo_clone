/*
    A FAZER:

    
    
    FEITO:
    - Teclado com letras
    - Popup de vitória/derrota
    - Adicionar variedade de palavras
    - Fazer a leitura de arquivo
    - Corrigir case sensitive
    - Impedir tabbing
    - Adicionar Animações
    - Adicionar switch de tema claro/escuro
    - Percorrer campos com setas direcionais
    - Corrigir erro de perder na última linha
    

    To read Local file with fetch:
    https://www.geeksforgeeks.org/javascript-fetch-method/

*/


let unknown_word = "";
const attempts = document.getElementsByClassName("word");
let current_attempt = 0;
let active_element;

loadDataFile();
resetGame();




//Controle do Teclado Virtual
function keypress(key){
    console.log(key);
    if (key.id == "Enter-key") {
        console.log("é o enter");
        submitWord(active_element.parentElement);
    }
    else if (key.id == "Del-key") {
        deleteItem(active_element);
    }
    else {
        active_element.value = key.innerText;
        autotab(active_element);
    }
}


//Mantém o campo de preenchimento ativo mesmo que o usuário clique fora!
document.addEventListener('click', (element) => {

    if (element.path[0].classList.contains('letter-input')) {
        active_element = element.path[0];
    }
    else {
        active_element.focus();
    }
});


/*Autotab no input de letras do usuário */
function autotab(current) {
    const next = current.nextElementSibling; //Pega o próximo elemento

    //Se existir um próximo elemento e se o atual tiver seu tamanho máximo, foca no próximo
    if (next && current.value.length == current.getAttribute('maxlength')) {
        next.focus();
        active_element = next;
    }
}



/*Função de delete para apagar as letras de cada input */
function deleteItem (current) {

    const previous = current.previousElementSibling;
    
    if (current.value.length == 1) {

        current.value = ""; // Evita problemas caso o cursor se posicione antes do texto!
    }
    else if (previous && current.value.length == 0) {
        previous.focus();
        previous.value = "";
        active_element = previous;
    }
}


//Confere qual tecla foi pressionada pelo usuário
function inputKeyTest(current, event) {

    const next = current.nextElementSibling;
    const previous = current.previousElementSibling;

    const letters = /[A-Za-z]/;

    if (event.keyCode == 8){ //Backspace
        deleteItem(current);
    }
    else if (event.keyCode == 13) { //Enter
        submitWord(current.parentElement);
    }
    else if (event.keyCode == 37 && previous) { //seta esquerda
        previous.focus();
        active_element = previous;   
    }
    else if (event.keyCode == 39 && next) { //seta direita
        next.focus();
        active_element = next;   
    }
    else if (event.key.match(letters)) { //Letra válida
        return true; 
    }
    else {
        return false;
    }
}

function submitWord(word) {
    
    let is_word_complete = true;

    for (i=0;i<word.length;i++) {
        
        //Busca por espaços incompletos na palavra
        if (!word[i].value) {
            is_word_complete = false;
        }
    }

    if (is_word_complete == false) {
        alert("A palavra deve conter 5 letras");
    }
    else {
        checkWord(word); //Confere as letras inseridas
    }

}

function checkWord(word) {
    
    let correct_letter_count = 0;
    
    for (i=0;i<word.length;i++) {

        if (word[i].value.toUpperCase() == unknown_word[i]) {
            word[i].classList.add('correct-letter');
            correct_letter_count++;
        }
        else if (unknown_word.includes(word[i].value.toUpperCase())) {
            word[i].classList.add('almost-correct-letter');
        }
        else {
            word[i].classList.add('incorrect-letter');
        }
    }

    if (correct_letter_count == word.length) {
        // alert("Você acertou a palavra!");
        finalScreen(true);
    }
    else {
        setActiveAttempt(); //Avança para a nova tentativa
    }
}


function setActiveAttempt() {
    
    current_attempt++;
    // console.log(current_attempt);

    if (current_attempt > attempts.length) {
        finalScreen(false);
        // alert("Você perdeu! A palavra era: " + unknown_word);
    }
    else {
        for (letter of attempts[current_attempt-1]) {
            letter.classList.remove('idle');
        }

        //Seleciona o primeiro item da próxima palavra
        attempts[current_attempt-1][0].focus();
        active_element = attempts[current_attempt-1][0];
    }
}


function resetGame (){

    //Torna todos os campos não interagíveis!
    for (word of attempts) {
        for (letter of word) {
            letter.classList.remove('correct-letter');
            letter.classList.remove('almost-correct-letter');
            letter.classList.remove('incorrect-letter');
            letter.classList.add('idle');
            letter.value = "";
        }
    }
    current_attempt = 0;
    active_element = attempts[0][0];
    setActiveAttempt();
}