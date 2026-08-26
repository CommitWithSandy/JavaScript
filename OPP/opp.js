// Constructor function 

function Profile(userName, loginCount, isloggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn

    return this

}   
const userOne = new Profile("Sandesh", 3, false) 
console.log(userOne)
// console.log(userOne instanceof Profile); // true
// console.log(userOne instanceof Object); // true


// 'new' is a JavaScript operator used to create an instance of an object from a constructor function (or class). 
// It's what turns a plain function into an object-producing "constructor."