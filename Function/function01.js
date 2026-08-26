function greet(name){
    // console.log(`Hello ${name}`)
}

// greet("Sandesh");

/*
1. Write function named 'Cars' that takes one parameter
'brand' and return a string like 'Launched new ' when called with 
"bmw m6" store the result in variable name 'new Model'.
*/

function Car(brand) {
    return `Launched new ${brand}`;
}
let newModel = Car("BMW M6 Sportz");
// console.log(newModel);
// console.log(typeof Car);



/*
2. Create a function named 'bookingCar' that takes one parameter
'model' inside this function create another function named 'confirmBooking'
that return a message like 'Car was Booked !!'.
call 'confirmBooking' from within 'bookingCar' and return the result.
*/

function bookingCar(model){
    function confirmBooking(model){
        return `Car was Booked !!`
    }
    return confirmBooking()
}
let car = bookingCar();
// console.log(car);



/*
3. WAP an arrow function named 'calculateTotal' that
takes two parameter : 'price' and 'quantity'. function should return 
the total cost by multiplying the 'price' and 'quantity'. store 
the result in a variable named 'totalCost'.
*/

const calculateTotal = (price, quantity) =>  {
         return price * quantity ;
    }
let totalCost = calculateTotal(200,5);
// console.log(totalCost);

// another way use arrow function (Modern JS)
const CalculateTotal = (price, quantity) => price * quantity;
let TotalCost = CalculateTotal(250, 6);
// console.log(TotalCost);



/*
4. WAP function named 'processTeaorder' that takes another function,
'makeTea' as parameter and calls it with argumnet 'earl gray'.
return the result of calling 'maketea'
*/
function makeTea(typeofTea){
    return `maketea: ${typeofTea}`;
}
function processTeaorder (teafunction) {
    return teafunction('lemon Tea');
}
let order = processTeaorder(makeTea);
// console.log(order);



/*
5. WAP a function named 'createCake' that return another function. 
the returned funtion should take one parameter 'caketype', and return 
a message like 'makingiceCake'. store the returned function in a variable
named 'cakeMaker' and call it with 'iceCake'
*/
function createCake (){
    return function (caketype){
        return `making ${caketype}`;
    }
}
let cakeMaker = createCake();
let result = cakeMaker("iceCake")
// console.log(result);


