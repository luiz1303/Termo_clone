/* ====================  Leitura de arquivo ====================== */


function loadDataFile() {
    const fetchRes = fetch('./word_list.dat');

    fetchRes.then(response => response.text()).then(data => {
        getWord(data);
    });
}




function getWord(data) {
    let wordPicker = [""];
    let i = 0;

    for(element of data) { //Separa as palavras

        if (element.toUpperCase() >= 'A' && element.toUpperCase() <= 'Z'){ 

            //Concatena as letras numa string, em que cada string é um item no array de palavras
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