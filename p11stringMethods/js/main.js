/*
ejercicio 1: Comparar 2 strings, y determinar cuál de ambos es el más largo
input: "string 1", "some larger string"
output: "el string { string } es el más largo"
------------------------
1.Solicitar dos cadenas de texto
2. Comprar cual de las dos cadenas es tiene un length mas grande
3. Imprimir en consola con el siguiente formato "el string { string } es el más largo"

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

1. Solicitar una cadena de caracteres
2. Convertir los caracteres en la posicion non a mayusculas
3. Convertir los caracteres en la posicion par a minusculas
4. Imprimir el resultado


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

1. Solicitar una cadena de caracteres
2. Recorrer la cadena de caracteres de manera inversa y guardarla en una nueva variable
3. imprimir resultado

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