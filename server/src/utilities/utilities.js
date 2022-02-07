var utilities = {
    obterListaUnicaPor,
    ordernarListaPor
};

// vide https://web.archive.org/web/20210317173528/https://stackoverflow.
// com/questions/990904/remove-accents-diacritics-in-a-string-in-
// javascript/37511463
var removerAcentos = texto => texto.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

// A checagem de igualdade entre strings será feita uma vez removidos
// acentos, espaços, hífens, underscore, pontos, e os caracteres restantes
// convertidos p/ minúscula
var formatarStringParaComparacao = (texto) => {
    return removerAcentos(texto).toLowerCase().replace(/ |-|_|\./g,"");
};

// vide https://stackoverflow.com/a/56768137/5091674
function obterListaUnicaPor(arr, key) {
    return [...new Map(arr.map(item => [
        formatarStringParaComparacao(item[key]), item])).values()
    ];
}

//vide https://stackoverflow.com/a/1129270/5091674
function ordernarListaPor(arr, key){
    return arr.sort((a,b) => (
        formatarStringParaComparacao(a[key]) > 
        formatarStringParaComparacao(b[key])
    ) ? 1  : ((
        formatarStringParaComparacao(b[key]) > 
        formatarStringParaComparacao(a[key])
    ) ? -1 : ( 
    0)));
}

module.exports = utilities;