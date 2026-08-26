/*
Task 1: Encapsulation Using Getters and Setters
Create a class BankAccount with a private property _balance. 
Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and 
modify the _balance while ensuring the balance never goes negative.
*/
class BankAccount {
    constructor(balance = 0) {
        this._balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid deposit amount");
        }

        this._balance += amount;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            throw new Error("Insufficient funds");
        }

        this._balance -= amount;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        if (amount < 0) {
            throw new Error("Balance cannot be negative");
        }

        this._balance = amount;
    }
}
let account = new BankAccount();
account.deposit(4000);
account.withdraw(2000);
// console.log(account._balance);



/*
Task 2: Polymorphism with Method Overriding
Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle 
that override the area() method to calculate the area of a circle and a rectangle, respectively.
*/
class Shape{
    area(){
        return 0
    }
}
class Circle extends Shape{
    constructor(radius) {
    super();
    this.radius = radius;
    }
    area(){
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle extends Shape{
    constructor(width, height){
    super()
    this.width = width;
    this.height = height;
    }
    area(){
        return this.width * this.height
    }
}
let cir = new Circle(5);
console.log(cir.area());

let rec = new Rectangle(10, 12);
console.log(rec.area());

let sha = new Shape();
console.log(sha.area());


