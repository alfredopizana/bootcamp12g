/*
    crear una función que me diga si un string comienza con vocal, consonante, número o un caracter especial
*/


/*
    1. Solicitar una cadena de caracteres
    2. Obtener el primer caracter de la cadena
    3. Evaluar el tipo de caracter
    4. Retornar el tipo
*/
var characterTypes = ["a", "b", "c", "e","1","2","/", ":" , "#" ];
var palabras = ["anaconda", "belzeebub", "koder", "cerveza" ];

function typeOfFirstCharacter(text){
    var firstLetter = text.charAt(0);
    var charCode = firstLetter.charCodeAt(0);
    if(isVowel(firstLetter))
        return "vowel";
    // Compare if charcode is between consonant ranges
    if( (charCode >=65 && charCode <= 90) ||(charCode >= 97 && charCode < 122) )
        return "consonant";
    if( charCode >=48 && charCode <= 57 )
        return "number";
    return "Special character";
}

function isVowel(letter){
    return 'aeiouAEIOU'.indexOf(letter) != -1;

}

for(var index = 0; index < characterTypes.length;index++)
    console.log(`Character ${characterTypes[index][0]} is: ${typeOfFirstCharacter(characterTypes[index])}`);


/*
    input: anaconda
    output: true

    input: belzeebub
    output: true

    input: koder
    output: false

    input: cerveza
    output: false
*/
/*
    1. Solicitar una cadena de caracteres
    2. Obtener le primer caracter del arreglo
    3. Obtener el ultimo caracter del arreglo
    4. Comparar si el caracter es el mismo al inicio y al final
    5. Retornar true o false en base a la evaluacion
*/

function firstAndLastCharacter(text){
    return text.charAt(0) === text.charAt(text.length -1);
}


for(var index = 0; index < palabras.length;index++)
    console.log(`The word ${palabras[index]} is: ${firstAndLastCharacter(palabras[index])}`);