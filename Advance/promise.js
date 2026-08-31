/* A Promise in JavaScript represents the eventual completion or 
failure of an asynchronous operation and its resulting value.*/

const promiseOne = new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log("Hello PromiseOne..");
        resolve()
    }, 1000);
});
promiseOne.then(function(){
    console.log("Hello");
});


// another approach
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Hello Async");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async Resolved");
    
});

// new approach
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Sandy", email:"Sandy@example.com"})
        
    },1000)
});
promiseThree.then(function(user){
    console.log(user);
    
});


// Promise chaining + .catch()
const  promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username:"Sandy", email:"Sandy@example.com"})
        }else{
            reject("ERROR : SOMETHING TO HAPPEN WRONG")
        }
    }, 1000);
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
})
// .finally(    ) // it also a 

// Promise with async/await
const  promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username:"JavaScript", Pass:"123"})
        }else{
            reject("ERROR : JS WAS WRONG")
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();



// This code is called handling an asynchronous API request using Promises.
// Async/Await with Fetch API.

// async function getAllusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllusers();


// This is called Promise chaining or handling a Promise using .then() and .catch().
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => {
    console.log(error);
})