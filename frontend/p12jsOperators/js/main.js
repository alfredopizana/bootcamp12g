/*
1.
Input: kodemia doceava generación
Output: 13
Input: el pájaro dev
Output: 5
*/
/*
Contar las vocales
*/
var word1 = 'kodemia doceava generación';
var word2 = 'el pájaro dev';
function countVowels(text){
    return text.normalize('NFD').match(/[aeiou]/ig).length;
}
console.log(countVowels(word1));
console.log(countVowels(word2));

/*
2.
Input: Más cuerdo es, el que acepta su propia locura
Output: 9
Input: Me volví loco, con largos intervalos de horrible cordura
Output: 9
*/
var e2word1 = 'Más cuerdo es, el que acepta su propia locura';
var e2word2 = 'Me volví loco, con largos intervalos de horrible cordura';
function countWords(text){
    return text.normalize('NFD').split(' ').length;
}
console.log(countWords(e2word1));
console.log(countWords(e2word2));
/*
3.
Input:Sé verla al revés
Output: true
Input: La mañana es fría
Output: false
Input:Yo hago yoga hoy
Output: true
Input: Y natación mañana
Output: false
*/
var e3phrase1 = 'Sé verla al revés';
var e3phrase2 = 'La mañana es fría';
var e3phrase3 = 'Yo hago yoga hoy';
var e3phrase4 = 'Y natación mañana';
function plaindrome(phrase){
    var text = phrase.replaceAll(" ", "").toLowerCase();
    for(var index = 0; index < text.length; index++){
        if(text[text.length -1 - index] !== text[index])
            return false
    }
    return true;
}
console.log(plaindrome(e3phrase1));
console.log(plaindrome(e3phrase2));
console.log(plaindrome(e3phrase3));
console.log(plaindrome(e3phrase4));

/*
4.
Crear una función que evalúe un string con las siguientes pruebas:
Tener al menos 8 carácteres
Tener al menos un número
Tener al menos una mayúscula
Devolver true si el string cumple con las reglas, o imprimir en consola la regla o reglas que no se están cumpliendo

(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}
*/
function stringEval(text){
    text.match()
}

/*
crear una función que genere un string con "n" caracteres aleatorios,  con la única condición de que no haya caracteres repetidos en el string
ejemplo correcto:
input: 10
output: asdfqwerzx
*/
function generateRandomCharacters(number){

}

function generateRandomString( charactersQty){

}