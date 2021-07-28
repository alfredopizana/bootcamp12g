let form = document.querySelector("form")
let inputs = form.querySelectorAll("input")
let table = document.querySelector("table")
let tableBody = table.querySelector("tbody")

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


function Person(index,collection,name,lastname){
    this.index = index
    this.collection = collection
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
    let collection = document.createElement("td")
    let name = document.createElement("td")
    let lastname = document.createElement("td")
    let actions = document.createElement("td")

    //Set String Values
    index.textContent = person.index
    index.textContent = person.collection
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
    row.appendChild(collection)
    row.appendChild(name)
    row.appendChild(lastname)
    row.appendChild(actions)
    return row
}

//updateTable(people,tableBody)
/*
var a = {"MiguelMarquez":
    "-MdtqlFgxp_hlpF86CFH":{"apellido":"Marquez","nombre":"Miguel"},
    "-MdtqlZI0QxYcAjWL8e0":{"apellido":"Marquez","nombre":"Miguel"}
    "-MdxnQEarVy-YHjM9GRb":{"mentorLastName":"Marquez","mentorName":"Miguel"},
    "-MdxnWo2ji6HuU47LWfu":{"mentorLastName":"Arellano","mentorName":"Bulmaro"},
    "-MdxoHFTCFjAgEPxc7Lb":{"mentorLastName":"Lopez","mentorName":"Pancho"},
    "-Mdxu14cxoTluvGLPD2Y":{"mentorLastName":"Piziano","mentorName":"America"},
    "-Mdxv75ySqicqtwkhBwj":{"mentorLastName":"Sanchez","mentorName":"Martha"},
    "-MdxvsvUlMMeAJU_t6JN":{"mentorLastName":"Jaimez","mentorName":"omar"},
    "-MdxwNwZSQRQeg95S9kz":{"mentorLastName":"Jaimez","mentorName":"omar"},
    "-Mdxwz8ulEHKNT1xD_3s":{"mentorLastName":"Hernandez","mentorName":"Gabriel"},
    "-MdxxRDTfGydZydIEGeW":{"mentorLastName":"Landa","mentorName":"Lalo"},
    "-Mdxxr6NhtXYeiTPU9hR":{"mentorLastName":"Landa","mentorName":"Eduardo"},
    "-MdxzRvywFHC3WTs85vM":{"mentorLastName":"bros","mentorName":"luigi"},
    "-MdxzuviSpvzAr_us5sT":{"mentorLastName":"bros","mentorName":"luigi"},
    "-Mdy2bee4q4ixmKWVwA1":{"mentorLastName":"espejel","mentorName":"alan"}
    ,"-Mdy2mHOyG0KccuwJEeV":{"mentorLastName":"espejel","mentorName":"alan"},
    "-Mdy2zFz18W1KJmRUVwz":{"mentorLastName":"martinez","mentorName":"german"},
    "-Mdy3WUfRANH-o8YVDMK":{"mentorLastName":"pelaez","mentorName":"geman"},
    "-Mdy3qRCOfItpTszRspa":{"mentorLastName":"Pelaez","mentorName":"german"},
    "-Mdy48N-3uvZUDWN3HKz":{"mentorLastName":"p","mentorName":"german"},
    "-Mdy4HHrlCh47E4nhRwr":{"mentorLastName":"t","mentorName":"german"},
    "-Mdy4_nv1LiCUeo6FOo1":{"mentorLastName":"mas","mentorName":"prueba"},
    "-Mdy5WQ9jpE8SqeQg-8D":{"mentorLastName":"arriaga","mentorName":"fernando"},
    "-Mdy5pItIjpsbV-B0TBP":{"mentorLastName":"jimenez","mentorName":"chava"},
    "-Mdy65F5Z5d2mlZz-nOD":{"mentorLastName":"hipolito","mentorName":"vanessa"},
    "-Mdy6QWIghXK__i3wbdu":{"mentorLastName":"hipolito2","mentorName":"vanessa2"},
    "-Mdy6jquZmad-o-t928U":{"mentorLastName":"hipolito3","mentorName":"vanessa3"},
    "-Mdy6p0tSw-LSBpNnNhK":{"mentorLastName":"Wick","mentorName":"John"},
    "-Mdy6weZPC3rj6Wx53JP":{"mentorLastName":"Wick2","mentorName":"John"}
},
    "Room4":{"-Mdtkil6bAHdAJaaWP_9":{"apellido":"Perez","nombre":"Juan"},"-MdtkwwLcNZNb2xrywwL":{"apellido":"Rodriguez","nombre":"Oscar"},"-MdtkyssrcWoQOzeIiu5":{"apellido":"Ibarra","nombre":"Antonio"},"-MdtphIfTdp854mxpGm6":{"apellido":"JImenez","nombre":"Chava"}},"alfred":{"-Mdtk5-5Uop1nP2-Esmz":{"apellido":"pizana","nombre":"alfredo "},"-Mdtk5iocpV7eVWTDH1S":{"apellido":"pizana","nombre":"alfredo "}},"angel":{"-MdVr9_XiuDBO-GXs3rf":{"name":"Mesa","qty":"1"},"-MdVrB60Znbyx7lZEfPg":{"name":"Sillas","qty":"4"},"-MdVrmu4irfFffc4ggHh":{"name":"cámaras","qty":"1"}},"angel1":{"-MdtR5ykxnEmZsMYfkuQ":{"apellido":"Salinas","nombre":"Israel"}},"carlosAlcala":{"-MduCPHvkcMBu02eI_O7":{"apellido":"lara","nombre":"mireya"}},"crv":{"-Mdtj5WO-JPokBw4SAP4":{"apellido":"Velasquez","nombre":"Carlos"},"-MdtkOxx7xINwS7C6y9z":{"apellido":"Perez","nombre":"Juan"},"-MdtkViWPeWcKkCK-Ps5":{"apellido":"Martinez","nombre":"Violeta"},"-MdtkZuu9iX3URLLcVUX":{"apellido":"Martinez","nombre":"Violeta"},"-MdtkewcZgYn91x6azXn":{"apellido":"Adios","nombre":"El Ultimo"}},"hectorha":{"-Mdtl1qtr0lItIND9FLB":{"apellido":"Alcaraz","nombre":"Hector"}},"jesus_sanchez":{"-MdtklKLoadjoHtYNTrT":{"apellido":"Sanchez","nombre":"Jesus"},"-MdtmrG0d_hHQ3b5it_J":{"apellido":"Sanchez","nombre":"Jesus"},"-MdtnPvB_O1H8L7EKFFf":{"apellido":"Sanchez","nombre":"Jesus"},"-MdtnngfDbIgrfnn8c_2":{"apellido":"Sanchez","nombre":"Jesus"},"-Mdtnw3CxtCJc-oQaLdK":{"apellidos":"Salinas Martínez","nombre":"Israel"}},"jorge":{"-MduQMaeXO-e95UhKAOS":{"apellido":"castuera","nombre":"jorge"},"-MdxKKFDD_6paI0kttvx":{"apellido":"ibbara","nombre":"antonio"},"-MdxMsPZat5uobz1j4Xc":{"nombre":""},"-MdxNw5nW5C4tUg2oSOc":{"apellido":"hernandez","nombre":"hector"},"-MdxXLlZDnIwgUV98mgi":{"apellido":"hernaNDEZ","nombre":"hector"}},"oscar":{"-MdxU5oxumy7xmOFeQgU":{"apellido":"Rodriguez","nombre":"Sofia"},"-MdxU7xLDrUizEMg_niQ":{"apellido":"Ibarra","nombre":"Misael"},"-MdxYhtJK09UU3O7eO_P":{"apellido":"Mancilla","nombre":"Misael"},"-Mdx_1XpziuntgCRSTXU":{"apellido":"Velasquez","nombre":"Carlos"},"-Mdx_jj0jO1SfNwluSjz":{"apellido":"Velasquez","nombre":"Misael"}},"xochitl":{"-MdtUUVi-vi--n-btAAC":{"apellido":"Salinas","nombre":"Israel"},"-MdtVUI27nkahUplqtds":{"apellido":"Resendiz","nombre":"Angel"},"-MdtY46B35xCdlkWAwN8":{"apellido":"Diaz","nombre":"Ivan"}},"xochmoreno":{"-Mdtjur3miSvDpakcjna":{"apellido":"Moreno","nombre":"Xochitl "}},"xocht":{"-MdtmuTJ5_2CEc25ZJOi":{"apellido":"moreno","nombre":"xoch "}}}
*/

const endpoint = "https://apikoder-b2ce0-default-rtdb.firebaseio.com/.json"

let personArray = []
const savePerson = (nombre, apellido) => {
    // Preparando el payload
    const personJavascript = {nombre, apellido}
    const personJson = JSON.stringify(personJavascript)
    // Creando el objeto
    var xhttp = new XMLHttpRequest();
    // Configurando qué va a pasar cuando recibamos respuesta
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const respuesta = xhttp.responseText;
            console.log(respuesta)
        }
    };
    // Configurar el verbo, la dirección
    xhttp.open("POST", endpoint, true);
    // Enviar la solicitud
    xhttp.send(personJson);
}

const getPersonList = () => {
    // Creando el objeto
    var xhttp = new XMLHttpRequest();
    // Configurando qué va a pasar cuando recibamos respuesta
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const respuesta = xhttp.responseText;
            console.log(respuesta)
            var rawData = JSON.parse(respuesta)
            var data = []
            for(collection in rawData){
                let values = rawData[collection]
                for( value in values){
                    data.push(new Person(value,collection,values[value].nombre,values[value].apellido))
                } 
            }
            updateTable(data,tableBody)
        }
    };
    // Configurar el verbo, la dirección
    xhttp.open("GET", endpoint, true);
    // Enviar la solicitud
    xhttp.send();
}
 getPersonList()


