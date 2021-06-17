/*
ejercicio 1: Comparar 2 strings, y determinar cuál de ambos es el más largo
input: "string 1", "some larger string"
output: "el string { string } es el más largo"
*/
var someString = "string 1";
var anotherString = "some larger string";

function LargerString(_someString,_anotherString){
    if(_someString.length > _anotherString.length){
        console.log(`el string ${ _someString } es el más largo`);
        return;
    }
    console.log(`el string ${ _anotherString } es el más largo`);
}
LargerString(someString,anotherString);



/*
ejercicio 2: Crear un nuevo string
( deducir lo que se debe hacer con base en el input y el output )
input: "a very large string"
output: "A VeRy lArGe sTrInG"
input: "abcdefg"
output:"AbCdEfG"
*/
var aVeryLargeString = "a very large string";
var abecedary = "abcdefg";

function CustomCamelCase(text){
    var transformedText = "";
    for(var x = 0; x < text.length; x++){
        if(x%2 == 0){
            transformedText += text.charAt(x).toUpperCase();
            continue;
        }
        transformedText += text.charAt(x).toLowerCase();
    }
    console.log(transformedText);
}
CustomCamelCase(aVeryLargeString);
CustomCamelCase(abecedary);

/*
ejercicio 3: Crear un nuevo string
( deducir lo que se debe hacer con base en el input y el output )
input:"Kodemia"
output:"aimedoK"
*/
var text = "Kodemia";

function reveseString(_text){
    var reversedString = "";
    for(var index = _text.length-1; index >= 0; index--){
        reversedString += _text.charAt(index);
    }
    return reversedString;
}

console.log(reveseString(text));