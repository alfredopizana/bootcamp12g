function Polygon(sides, sideLength) {
    this.sides = sides
    this.sidesLength = this.sidesLength
}
let pentagon = new Polygon(5, 4)

class Person {

    constructor(name, lastname, age) {
        this.name = name
        this.lastname = lastname
        this.age = age
    }
    get fullName() {
        return `${this.name} ${this.lastname}`
    }
    set phone(phone) {
        this._phone = phone
    }
    get phone() {
        return this._phone + "Holo"
    }
}

class Koder extends Person {
    constructor(name, lastname, age, project) {
        super(name, lastname, age)
        this._project = project
    }
}

let israel = new Person("Israel", "Salinas Martínez", 31)
console.log(israel.fullName)
console.log(israel)
console.log(israel.phone)
israel.phone = 45
console.log(israel.phone)
let wendy = new Koder("Wendy", "Orterga Madin", 25, "papeapp")
console.log(wendy)



/*function Person(name, lastname, age) {
    this.name = name
    this.lastname = lastname
    this.age = age
}
let israel = new Person("Israel", "Salinas Martinez", 31)

*/
let sum = function (a) {
    return function (b) {
        if (b)
            return sum(a + b)
        return a
    }
}

console.log(sum(1)(2)(3)(4)(5)())