//Abstraction
class coffeeMachine{
    start(){
        return `Starting the Machine....`
    }
    brewCoffee(){
        return `....brewing Coffee`
    }
    pressStartButton(){
        let mzg1 = this.start()
        let mzg2 = this.brewCoffee();
        return `${mzg1} & ${mzg2}`
    }
}
let machine = new coffeeMachine();
// console.log(machine.start());
// console.log(machine.brewCoffee());
// console.log(machine.pressStartButton())
 