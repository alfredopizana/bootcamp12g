//Recibir un string del usuario en uno solo string y convertir las palabras pares a mayusculas y las nones a minusculas;
//Solicitar nombre y apellido del usuario
//Guardar nombre en una variable y guardar apellido en una variable
//transformar el nombre a minusculas
//transformar el apellido a mayusculas
//juntar el nombre y el apellido transformados en un solo texto
//devolver el resultado
var nombre = prompt("nombre:");
var apellido = prompt("apellido:");
function convertName(_nombre, _apellido){
    var nombre = _nombre.toLowerCase();
    var apellido = _apellido.toUpperCase();
    return result = nombre.concat(' ',apellido);
    
}
console.log(convertName(nombre,apellido));