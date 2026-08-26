/*
1. for loop that loop through the array 
["BMW", "Audi", "Mercedes", "Ferrari", "Lamborghini"] and stops the loop when
it finds 'Lamborghini'
stores all cars before "Lamborghini" in a array
named bBrandCars'
*/

let Cars = ["BMW", "Audi", "Mercedes", "Ferrari", "Lamborghini"];

let BrandCars = [];

for (let i = 0; i < Cars.length; i++) {
    if (Cars[i] === "Lamborghini") {
        break;
    }
    BrandCars.push(Cars[i]);

}
// console.log(BrandCars);


/*
2. For loop that loops through the array 
["BMW", "Audi", "Mercedes", "Ferrari", "Lamborghini"] and skips
"Mercedes" and stores all other cars in an array
named brandCars
*/

let SportsCars = ["BMW", "Audi", "Mercedes", "Ferrari", "Lamborghini"];

let brandCars = [];

for (let i = 0; i < SportsCars.length; i++) {
    if (SportsCars[i] === "Mercedes") {
        continue;
    }
    brandCars.push(SportsCars[i]);
}
// console.log(brandCars);


/*
3. Use for-of loop to iterate through the array 
'[1, 2, 3, 4, 5]' and stop when the numebr '4' is found
store the numbers  before '4' in a array named 'smallNumbers'.
*/

let numbers = [1, 2, 3, 4, 5];

let smallNumbers = [];

for (const number of numbers) {
    if (number === 4){
        break;
    }
    smallNumbers.push(number);
}
console.log(smallNumbers);

/*
4. Use for-of loop to iterate through the array 
'[1, 2, 3, 4, 5]' and skip when the number '4' is found
store all the other numbers in an array named 'numberArray'.
*/

let num = [1, 2, 3, 4, 5];

let storeArray = [];

for (const array of num) {
    if (array === 4) {
        continue;
    }
    storeArray.push(array);
}
// console.log(storeArray);


/* 
5. for-in loop to  loop through and object containing city population
stop the loop when the population of 'Berlin' is found and store all previous
cities population in a new object name 'cityPopulation'
*/

let Population = {
    "London" : 900000,
    "NewYork" : 1000000,
    "Paris" : 4500000,
    "Berlin" : 600000
};

let cityPopulation = {};

for (const city in Population) {
    if (city === "Berlin") {
        break;
    }
    cityPopulation[city] = Population[city];
}
// console.log(cityPopulation);    


/* 
6. for-in loop to  loop through and object containing city population
skip the population of below 3 million and store all previous
cities population in a new object name 'cityPopulation'
*/

let CitiesPopulation = {
    "London" : 9000000,
    "NewYork" : 4000000,
    "Berlin" : 6000000,
    "Paris" : 2500000
};

let NewCityPopulation = {};

for (const city in CitiesPopulation) {
    if (CitiesPopulation[city] < 3000000) {
        continue;
    }
    NewCityPopulation[city] = CitiesPopulation[city];
}
// console.log(NewCityPopulation);   


/* 
7. for-each loop that iterates through the array
["Yash", "Ritik", "Akshya", "Sandy"] stop the loop when "Akshay"
is found , and store all previous names in an array
named 'friendsName'
*/

let actor = ["Yash", "Ritik", "Akshya", "Sandy"];

let friendsName =[];

actor.forEach(function (name) {
    if (name === "Akshya") {
        return;
    }
    friendsName.push(name);
});
// console.log(friendsName);

/*
8. for-each loop that iterates through the array
["GtaVI", "RDR", "Hitman", "CallOfduty"] skip "Hitman"
and store other games in a new array name "playedGames"
*/

let Games = ["GtaVI", "RDR", "Hitman", "CallOfduty"];

let playedGames = []

Games.forEach(function (Love) {
    if(Love === "RDR")
    return;

    playedGames.push(Love);
});
// console.log(playedGames);

/*Easy way to remember
Keyword     |    What it does
continue    |    Skip this iteration, go to the next one.
break       |    Stop the loop completely.
return in forEach() | End the current callback (acts like continue, not break).

So if you ever need to stop when a condition is met, don't use forEach(). 
Use a for or for...of loop instead.
*/



/*
9. write for loop that iterate through the array [2, 5, 7, 9]
skip the value 7 and multiply the rest by 2 
store the result in a new array name "doublenumbers"
*/

let number = [2, 5, 7, 9];
let doubleNumbers = [];
for (let i = 0; i < num.length; i++) {
    if(number[i] === 7){
        continue;
    }
    doubleNumbers.push(number[i] * 2)

}
// console.log(doubleNumbers);


/*
10. use for-of loop to iterate through the array 
["Pizza","Burger","Shawarma","Pasta","Noodles"] 
stop when the length of current food name is greater than 10
store the teas iterated over in an array named "menu"
*/

let Foods = ["Pizza", "Burger", "ChickenShawarma", "Pasta", "Noodles"] ;

let menu = []

for (const khana of Foods) {
    if(khana.length > 10){
        break;
    }
    menu.push(khana);
}
console.log(menu);

