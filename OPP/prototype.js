let computer = {cpu: 12};
let Hp = {Screen:"HD",
    ___proto__:computer,
};

let hardware = {}
console.log(`Hp`, Hp.___proto__)

let type = {model:"M4"};
let Brand = {name:"BMW"};

// Object.setPrototypeOf(`Brand`, model);
// console.log('Brand', model)

/* What is the purpose of a prototype in JavaScript?
The purpose of a prototype in JavaScript is to allow you to define properties and methods 
that can be shared by all instances of an object, providing a way to efficiently organize and reuse code
*/