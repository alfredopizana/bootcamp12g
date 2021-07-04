let form = document.querySelector("form")
let inputs = form.querySelectorAll("input")
let table = document.querySelector("table")
let tableBody = table.querySelector("tbody")
console.log(form)
console.log(inputs)
var people = [
    {
        index: "0",
        name:"Juan",
        lastname: "Perez"
    },
    {
        index: "1",
        name:"Arturo",
        lastname: "Diaz"
    },
    {
        index: "2",
        name:"Israel",
        lastname: "Salinas"
    },
    {
        index: "3",
        name:"Wendy",
        lastname: "Ortega"
    },
]
function Person(index,name,lastname){
    this.index = index
    this.name = name
    this.lastname = lastname
}

let updateTable = (list,tableBodyContainer)=>{
    list.forEach(element => {
        
        let row = createRowNode(element);
        tableBodyContainer.appendChild(row)
    });
    
}
let createRowNode =(person )=>{
    //Create Row Container
    let row = document.createElement("tr")
    //Create Columns
    let index = document.createElement("td")
    let name = document.createElement("td")
    let lastname = document.createElement("td")
    let actions = document.createElement("td")

    //Set String Values
    index.textContent = person.index
    name.textContent = person.name
    lastname.textContent = person.lastname

    //Create Action Buttons
    let deleteButton = document.createElement("button")
    let deleteButtonText = document.createTextNode("Borrar")
    deleteButton.appendChild(deleteButtonText)
    deleteButton.classList.add("btn","btn-danger","mr-2")
    

    let printButton = document.createElement("button")
    let printButtonText = document.createTextNode("Imprimir")
    printButton.appendChild(printButtonText)
    printButton.classList.add("btn","btn-secondary","mr-2")


    actions.appendChild(deleteButton)
    actions.appendChild(printButton)

    row.appendChild(index)
    row.appendChild(name)
    row.appendChild(lastname)
    row.appendChild(actions)
    return row
}

updateTable(people,tableBody)
var addElementToList = (element) =>{
    

}


