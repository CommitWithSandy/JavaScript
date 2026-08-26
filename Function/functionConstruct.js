
function Car(Name, Model){
    this.Name = Name;
    this.Model = Model;
}

/*new keyword, 
the function will be used as a constructor*/
 
let myCar = new Car ("BMW", "M4");
// console.log(myCar)
let mynewCar = new Car ("Mercedes", "G-Wagon");
// console.log(mynewCar)



function Animal(species){
    this.species = species;
}
Animal.prototype.sound = function() {
    return `${this.species} make a sound`;
};

let Lion = new Animal("Lion")
// console.log(Lion.sound())
let Tiger = new Animal("Tiger")
// console.log(Tiger.sound())


/*
Task 1: Create a Functional Constructor
Create a functional constructor Person that takes name 
and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".
*/

/*Task 2: Handle Errors
Modify the Person constructor to throw an error 
if the age is not a positive number.
*/

function Person(name, age) {
    if (typeof age !== "number" || age <= 0) {
        throw new Error("Age must be a positive number");
    }

    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    return `Hello, my name is ${this.name}`;
};

try {
    let person1 = new Person("Sandesh", 20);
    console.log(person1.greet());

    let person2 = new Person("Rahul", -20);
    console.log(person2.greet());
} catch (error) {
    console.log(error.message);
}

       

