let dataArray = [
    [
        "Israel",
        "Salinas Martinez",
        "HTML:9",
        "CSS:8",
        "JS:7"
    ],
    [
        "David",
        "Cermeño Monrachel",
        "HTML:9",
        "CSS:8",
        "JS:9"
    ],
    [
        "Charles",
        "Silva",
        "HTML:8",
        "CSS:8",
        "JS:10"
    ],
    [
        "Michael",
        "Villalba Sotelo",
        "HTML:9",
        "CSS:10",
        "JS:7"
    ]
]

function Mentor([name,lastname, ...rawScores]){
    let arrayScore = rawScores.map(item => {
        let [signature,score] = item.split(":")
        //const intergerScore = 
        return {signature,score:parseInt(score)};
    });

    function getAverage(scores){
        return scores.reduce( (total,{score})=>  total+score ,0) / scores.length;
    }
    //Public Properties
    this.name = name
    this.lastname = lastname
    this.scores = arrayScore
    this.average = getAverage(this.scores)

    this.printAverage = average => console.log(`El Promedio de ${this.name} ${this.lastname} es de %c${this.average}`,"color:green")
    
    this.printScores = scoreList => scoreList.forEach( ({signature,score}) => {
        console.log(`La calificacion de la materia %c${signature} %ctiene la calificacion %c${score}`,"color:blue","color:gray","color:red");
    });
    
    this.printScores(this.scores);
    console.log(this.printAverage())
}

let mentor = new Mentor(dataArray[0])


let mentorsArray = dataArray.reduce((list,mentor)=>[...list,new Mentor(mentor)],[])
console.log(mentorsArray)