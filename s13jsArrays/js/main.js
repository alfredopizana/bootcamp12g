
/*
    Crear una funcion  que permita indicar la cantidad de koders a guardar, que pida tantos nombres de koders se indique, y al final imprima el nombre del koder y si numero asignado
*/
/*
    Input: Misael, Freddy, Alfredo
    Output:
        Koder 1: Misael,
        Koder 2: Freddy,
        Koder 3: Alfredo

*/

function kodersList(numberOfKoders){
    let koders =[]
    
    for( n = 0; n < numberOfKoders; n++){
        koders.push(prompt("Ingresa el nombre de un koder"));
    }
    for(let n = 0; n < koders.length; n++){
        console.log(`Koder ${n}: ${koders[n]}${n < koders.length-1 ? ',':'' } `)

    }
}
//let nKoders = prompt("'Por favor indicar el numero de koders a registrar")
//kodersList(nKoders)

/*
    -Crear una funcion que me permita saber el nombre del koder basado en  su numero asignado
    -Imprimir la lista de koders, en orden alfabetico descendente
    -Crear una nueva lista que contenga los nombres de los koders con la siguiente estructura:
        Koder 1: Israel Salina Martinez (I. S. M.)
        Koder 2: Óscar Rodríguez Hernández (O. R. H.)

*/
let koders2 = [ 'Israel Salina Martinez', 'Oscar Rodríguez Hernández', 'Jesus Alfredo Pizana Espinosa' ]

function koderNameInList(kodersList, koderNumber){
    console.log(`El Koder ${koderNumber} tiene el nombre de ${kodersList[koderNumber]}`);
}
//let koderNumber = prompt('Indica el numero del koder del cual desea conocer el nombre')
//koderNameInList(koders2, koderNumber)

function sortKoders(koderList){
    koderList.sort(
        (firstName,secondName)=>{
        return firstName > secondName ? 1: -1;
    }
    );
    console.log(koderList)
}
sortKoders(koders2)

function formatKoderList(koderList){
    var formatedList =[];
    
    koderList.forEach((element, i) => {
        //element = 'Israel Salina Martinez'
        var splitedElement = element.split(" ");
        var initials = []; // ['I', 'S'...]

        for(var index = 0;index < splitedElement.length; index++){
            initials.push(splitedElement[index].charAt(0))
        }

        
        formatedList[i] = element;
        for(var x = 0; x < initials.length; x++){
            formatedList[i]+= " " + initials[x] +".";
        }
        

    });
    console.log(formatedList)
}
formatKoderList(koders2)

/*
    .forEach
    .filter
    .map
    .reduce

*/