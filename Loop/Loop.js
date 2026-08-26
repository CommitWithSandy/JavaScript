/*
1. Write a 'while' loop that calcualte the sum of all numbers from 
1 to 5 and store the result in a variable name "sum"
*/

let sum = 0;
let i = 1;

while (i <= 5) {
    sum += i; // sum = sum + i
    i++;
}
// console.log(sum); // 1 + 2 + 3 + 4 + 5 = 15


/*
2. write a while loop that counts down from 5 to 1 and stores the numbers
in an arrat named 'countdown'
*/

let countdown = []
let j = 5;

while (j > 0) {
    countdown.push(j);
    j--;
}
// console.log(countdown);

/* 
3. DO while loop that prompts a user to enter their fav car type 
until they enter stop", store each car in an array named "carColltection"


let carColltection = []
let cars

do {
    cars = prompt("Enter Fav Car (type 'stop' for finish): ")
    if (cars !== "stop") {
        carColltection.push(cars)
    }
} while (cars !== "stop")
// console.log(carColltection);
*/

/*
4 add numbers from 1 to 3 and stores the result in variable
name 'total'
*/

let total = 0;
let k = 1;
do{
    total += k;
    k++
}while(k<=3);
// console.log(total); 



/*
5. for loop that multiplies each element in the array '[2, 4, 6]' by 2 and
stores the result in a new array named 'multiplyNum'
*/

let numbers = [2, 4, 6];
let multiplyNum = [];
for (let l = 0; l < numbers.length; l++) {
    // takeNumber = numbers[l] * 2;
    // multiplyNum.push(takeNumber);

    multiplyNum.push(numbers[l] * 2);
}
// console.log(multiplyNum);


/*
6.for loop that lists all the cities in the array ["Tokoyo", "LosAngels", "Mumbai"]
*/

let cities = ["Tokoyo", "LosAngels", "Mumbai"];
let cityList = [];
for (let m = 0; m < cities.length; m++) {
    // const myCity = cities[m];
    // cityList.push(myCity);
    cityList.push(cities[m])
}
console.log(cityList);