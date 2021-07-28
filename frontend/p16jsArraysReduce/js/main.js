//1.-
//Dado un string cualquiera ( por ejemplo "ajaicoiashdfoqwemoc" ) encontrar la cantidad de caracteres no repetidos usados en dicho string. Ejempo:
//input:ajaicoiashdfoqwemoc
//output:13
//2.-
// dado el siguiente array = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]
// usar reduce para obtener la siguiente información:
// -Un array con aquellas personas que votaron
// -la edad promedio de todos los votantes
// -un array con aquellos votantes que votaron y queson menores a 30 años
// -la edad promedio de los no votantes
// -el porcentaje de votantes vs no votantes


var text = "ajaicoiashdfoqwemoc"
var countDifferentCharacters = phrase =>{
    return phrase.split("").reduce((letters,input)=>{
        if(!letters.includes(input))   
            letters+=input;
        return letters;
    }).length;
}
numberOfCharacters = countDifferentCharacters(text);
console.log(numberOfCharacters)

