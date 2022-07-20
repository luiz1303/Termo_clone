const wordPicker = [
    "SAGAZ",
    "NEGRO",
    "MEXER",
    "TERMO",
    "SENSO",
    "NOBRE",
    "ALGOZ",
    "ETICA",
    "TENUE",
    "SUTIL",
    "VIGOR",
    "FAZER",
    "POREM",
    "IDEIA",
    "PODER",
    "MORAL",
    "MUITO",
    "JUSTO",
    "HONRA",
    "ANEXO",
    "SOBRE",
    "RAZAO",
    "ETNIA",
    "ICONE",
    "SONHO",
    "MUTUO",
    "AMIGO",
    "EXPOR",
    "CASAL",
    "HABIL",
    "TEMPO",
    "ENTAO",
    "POSSE",
    "GENRO",
    "CAUSA",
    "DIZER",
    "DETER",
    "DEVER",
    "GRACA",
    "SABER",
    "DIGNO",
    "ANSIA",
    "ANIMO",
    "CEDER",
    "GRACA",
    "SABER",
    "ANIMO",
    "MUNDO",
    "PAUTA",
    "CENSO",
    "NENEM",
    "VICIO",
    "EPICO",
    "CHATO",
    "TRETA",
    "GIRIA",
    "SONSO",
    "BURRO",
    "SOGRA",
    "SIGLA",
    "AINDA",
    "VEADO",
    "CALDA",
    "IMPAR",
    "CORRE",
    "LUGAR",
    "SALVE",
    "CAPAZ",
    "FALSO",
    "BRAVO",
    "COISA",
    "AREIA",
    "AUDIO",
    "VELHA",
    "VERBO",
    "VASTO",
    "COVIL",
    "BROCA",
    "FARDO",
    "LEIGO",
    "OPACO",
    "DOIDO",
    "LOUCO",
    "PARTE",
    "POMAR",
    "DENSO",
    "PLENO",
    "BONDE",
    "LACRE",
    "RACAO",
    "LASER",
    "LARGO",
    "LENTE",
    "LESTE",
    "OESTE",
    "METAL",
    "LIMAO",
    "LICOR",
    "LISTA",
    "MANGA",
    "LONGE",
    "LICAO",
    "LIXAO",
    "LETRA",
    "HIENA",
    "LEITE",
    "LEGAL",
    "LEBRE",
    "LATIM",
    "LASCA",
    "LAPIS",
    "LAGOA",
    "VERDE",
    "DIGNO",
    "SABAO",
    "DIABO",
    "DUBAI",
    "ATUAL",
    "TIARA",
    "GOSTO",
    "SUSTO",
    "NARIZ",
    "COMER",
    "PENSO",
    "OBTER",
    "BATER",
    "TEMER",
    "DENTE",
    "GENTE",
    "PENTE",
    "UNHAS",
    "SALTO",
    "ASTRO",
    "ASILO",
    "TERNO",
    "SHORT",
    "PISTA",
    "AMADO",
    "ROUPA",
    "CINTO",
    "LENTO",
    "VENTO",
    "JEITO",
    "TEXTO"
];


function getWord() {
    //Seleciona aleatóriamente uma das palavras
    let randomPos = Math.floor(Math.random() * wordPicker.length);
    unknown_word = wordPicker[randomPos].toUpperCase();
    console.log(unknown_word);
}





/*
To read Local file with fetch:
https://www.geeksforgeeks.org/javascript-fetch-method/

 */


/* LEITURA DE ARQUIVO: NÃO FUNCIONA PARA ARQUIVO LOCAL (Para teste, é necessário uso do LiveServer) */


/* 

function loadDataFile() {
    const fetchRes = fetch('./word_list');

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



*/