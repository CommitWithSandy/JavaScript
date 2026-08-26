/* How do getters and setters work in JavaScript?
Getters are used to fetch data, and setter are used to modify data, 
providing a way to control access to object properties

*/


class Employee{
    #salary;
    constructor(name, salary){
        this.name = name;
        // this._salary  = salary;
        this.#salary  = salary;

    }
    get salary(){
        return `You not allowed to access the salary`;
    }
    set salary(value){
        if (value < 0 ){
            console.log("Invalid salary")
        }
        else{
            this._salary = value;
        }
    }
}
let empDetail = new Employee("Sandy", -300000);
// console.log(empDetail._salary) // -300000

console.log(empDetail.salary) // You not allowed to access the salary
empDetail.salary = -300000; // Invalid salary
