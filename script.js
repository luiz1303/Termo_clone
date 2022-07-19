/*

    Jogo Original:
    https://term.ooo/ 


    https://venngage.com/blog/blue-color-palettes/
    

    A FAZER:

    - Teclado com letras
    
    
    FEITO:
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

loadDataFile();
resetGame();


const color_switch = document.getElementById("check");
document.documentElement.classList.add('dark');


color_switch.addEventListener('change', () => {

    if (document.documentElement.classList.contains('light')) {
        document.documentElement.classList.remove('light');
    }
    else {
        document.documentElement.classList.add('light');
    }
});


//Lê o arquivo com a base de palavras
function loadDataFile() {
    const fetchRes = fetch('./word_list.dat');

    fetchRes.then(response => response.text()).then(data => {
        // console.log(data);
        getWord(data);
    });
}


function getWord(data) {
    let wordPicker = [""];
    let i = 0;

    for(element of data) { //Separa as palavras

        if (element.toUpperCase() >= 'A' && element.toUpperCase() <= 'Z'){ 
            //Concatena as letras numa string do array de palavras
            wordPicker[i] = wordPicker[i] + element; 
        }
        else if (element == '\n'){
            i++;
            wordPicker[i] = "";
        }
    }

    //Seleciona aleatóriamente uma das palavras
    let randomPos = Math.floor(Math.random() * wordPicker.length);
    unknown_word = wordPicker[randomPos].toUpperCase();
    console.log(unknown_word);
}

function finalScreen (win) {
    const menuPop = document.getElementById("menu");
    const msg = document.getElementById('msg');
    const icon = document.getElementById('icon');
    const button = document.getElementById('btn');
    
    menuPop.style.visibility = "visible";
    
    if (win) {
        icon.classList.remove("fa-heart-crack");
        icon.classList.add("fa-circle-check");
        icon.style.color = '#61D06C';
        msg.innerText = "Você acertou! A palavra era:\n" + unknown_word + ".";
        button.focus();
    }
    else {
        icon.classList.remove("fa-circle-check");
        icon.classList.add("fa-heart-crack");
        icon.style.color = '#f13a37';
        msg.innerText = "Você perdeu! A palavra era:\n" + unknown_word + ".";
        button.focus();
    }
}


/*Autotab no input de letras do usuário */
function autotab(current) {
    const next = current.nextElementSibling; //Pega o próximo elemento

    //Se existir um próximo elemento e se o atual tiver seu tamanho máximo, foca no próximo
    if (next && current.value.length == current.getAttribute('maxlength')) {
        next.focus();
    }
}

function deleteItem (current) {

    const previous = current.previousElementSibling;
    
    if (current.value.length == 1) {
        // Evita problemas caso o cursor se posicione antes do texto!
        current.value = "";
    }
    else if (previous && current.value.length == 0) {
        previous.focus();
    }
}


function inputKeyTest(current, event) {
    
    // console.log(event); 

    const next = current.nextElementSibling;
    const previous = current.previousElementSibling;

    const letters = /[A-Za-z]/;

    if (event.keyCode == 8){ //Backspace
        deleteItem(current, event);
    }
    else if (event.keyCode == 13) { //Enter
        submitWord(current.parentElement);
    }
    else if (event.keyCode == 37 && previous) { //seta esquerda
        previous.focus();   
    }
    else if (event.keyCode == 39 && next) { //seta direita
        next.focus();
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
    setActiveAttempt();
}