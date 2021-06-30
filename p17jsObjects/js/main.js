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

/*
para crear objetos del tipo Mentor, que contengan el nombre y apellidos del mentor, una propiedad con sus inciales 
y un método que al ser invocado devuelva el string "hola, soy {nombre} {apellidos}"
los objetos deben estar dentro de una colección llamada mentorsArray
*/

function Mentor([name,lastname]){
    	
    const _getInitials = (_name, _lastname) => {
        return [..._name.split(" "),..._lastname.split(" ")]
            .reduce( 
                    (initials,word,index,array) =>{ 
                        return `${initials}${word.charAt(0).toUpperCase()}. `;
            },'');	
    }
    
    this.name = name;
    this.lastname = lastname;
    this.initials = _getInitials(this.name, this.lastname);
    this.greeting = ()=> `hola, soy ${this.name} ${this.lastname} y mis inciales son ${this.initials}`
}

//let mentor = new Mentor(dataArray[0][0],dataArray[0][1])

let mentorsArray = dataArray.reduce((list,mentor)=>[...list,new Mentor(mentor)],[])
console.log(mentorsArray)
console.table(mentorsArray)


let [primero, segundo] = dataArray[0];
console.warn(primero)
console.error(segundo)

console.log(`Style Message: %c${primero} %c${segundo}`, "color: orange", "color: red", "Additional unformatted message");