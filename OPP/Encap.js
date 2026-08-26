/*What is encapsulation in OOP?
The ability to hide internal details and show only necessary parts of an object
*/

// Encapsulation
class bankAccount{
    #balance = 0;

    deposite(amount){
        this.#balance =+ amount;
        return this.#balance;
    }
    getBalance() {
        return `$ ${this.#balance}`;
    }
}
let account = new bankAccount()
// console.log(account.getBalance());