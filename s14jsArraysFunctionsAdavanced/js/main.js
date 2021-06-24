/* */

let dataArray = [
    [
        "Israel",
        "Salinas Martinez"
    ],
    [
        "David",
        "Cermeño Monrachel"
    ],
    [
        "Charles",
        "Silva"
    ],
    [
        "Michael",
        "Villalba Sotelo"
    ]
]

let createObject = (array)=>{
    return  { name:array[0],lastName: array[1] } ;
}


let arrayObjets = []
dataArray.forEach(item =>arrayObjets.push(createObject(item)))
//console.log(arrayObjets)



//You can assign destructurings not only to variables but also to existing objects:

const arr = [1,2,3], o = {};    
({0:o.one, 1:o.two, 2:o.three} = arr);
//console.log(o)


////////////

    let destructuringObject = (array)=>{
        let t = {};
        ({ 0:t.name,1:t.lastName } = array);
        console.log(t)
        return t;
    }

let anotherObjetArray = []
dataArray.forEach(item =>anotherObjetArray.push(destructuringObject(item)))
//console.log(anotherObjetArray)
//Arguments Tests

function test(a,b){
    console.log(a,b)
    console.log(arguments)
}
test(  [
    "1 Israel",
    "Salinas Martinez"
],
[
    "2 David",
    "Cermeño Monrachel"
],
[
    "3 Charles",
    "Silva"
],
[
    "4 Michael",
    "Villalba Sotelo"
])