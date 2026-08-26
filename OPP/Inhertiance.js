class Vehical{
    constructor (Name, Model){
        this.Name = Name;
        this.Model = Model;
    }

    start(){
        return `I have ${this.Name} ${this.Model} Competition `;
    }
}

class Car extends Vehical{
    drive(){
        return `${this.Name} :inheritance example  `;
    }
}
let myCar = new Car("BMW", "M4");
// console.log(myCar.start());
// console.log(myCar.drive());