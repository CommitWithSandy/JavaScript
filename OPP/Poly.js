//Polymorphism
class Animal{
    sound(){
        return `Animal Make Sound`
    }
}
class Dog extends Animal{
    sound(){
        return `Dog can Bark`
    }
}
class Cat extends Animal{
    sound(){
        return`Cat Make Meow`
    }
}

let animal = new Animal();
let dog = new Dog();
let cat = new Cat();
// console.log(animal.sound());
// console.log(dog.sound());
// console.log(cat.sound());
