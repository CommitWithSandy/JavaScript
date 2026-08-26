// Static Method 
class Calculator{
    static add(a, b){
        return a + b;
    }
}
// let miniCal = new Calculator();
// console.log(miniCal.add(2, 4)) 
// //TypeError: miniCal.add is not a function
console.log(Calculator.add(2, 3)); // output : 5