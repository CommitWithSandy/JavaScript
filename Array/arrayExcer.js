/* (1) Declare the array name is "Cars" that contains the
string "Maruti", "BMW", "Audi" 
Access the 1st elment of the array and store it in variable name "FirstCar"
*/
let Cars = ["Maruti", "BMW", "Audi"];

let FirstCar = Cars[0];

// console.log(FirstCar);


/* (2) Declare the array name is "City" that contains the
string "New York", "London", "Tokyo", "Paris" 
Access the 3rd element in the array and store it in variable name "FavCity"
*/
let City = ["New York", "London", "Tokyo", "Paris"];

let FavCity = City[2];

// console.log(FavCity);


/* (3) You have the array name is "City" that contains the
string "New York", "London", "Tokyo", "Paris" 
change the second element of the array to "Miami"
*/
let Cities = ["New York", "London", "Tokyo", "Paris"];

myCity = Cities[1] = "Miami";

// console.log(myCity)
// console.log(Cities);


/*(4) Declare the array name is "CityVisted" that contains the
strings "Delhi", "Mumbai", "Kolkata", "Chennai" 
Add "Hyderabad" to the end of the array
*/
let CityVisted = ["Delhi", "Mumbai", "Kolkata", "Chennai"];

CityVisted.push("Hyderabad");  
// Add the element to the end of the array

// console.log(CityVisted);



/*(5) Remove the last Element of aray using '.Pop' method 
and store it in a vairable name 'lastcity' */

let Favcolor = ["Red", "Pink", "White", "Black", "Yellow"];
let lastColor = Favcolor.pop(); 
//Remove the last arrayname.pop()

// console.log(lastColor);
// console.log(Favcolor);



/* (6) I have an Array name "Favvolor" contains 
"Red", "Pink", "White", "Black". so create softcopy of this array named
'Softcopycolor'*/
let Softcopycolor = [Favcolor]; 
// console.log(Softcopycolor);

// Favcolor.pop();
// console.log(Favcolor);
// console.log(Softcopycolor);



/* (7) I have an Array name "TopCities" contains 
"Tokoyo", "LosAngles", "London", "Berlin". so create Hardcopy of this array named
'HardCopyCities'*/
const TopCities = ["Tokoyo", "LosAngles", "London", "Berlin"];
let HardCopyCities = [...TopCities]; 
// ... is used spread operator to create a copy of an array

TopCities.pop();
// console.log(TopCities)
// console.log(HardCopyCities);



/* (8) two arrays "SuperCars" contains "BMW", "Audi"
and "Engine" constains "M4" and "R8"
merege these two arrays into a new array named 
"SportsCars"*/
let SuperCars = ["BMW", "Audi"];
let Engines = ["M4", "R8"];
let SportsCars = SuperCars.concat(Engines); 
// merge two arrays arrayname1.concat(arrayname2) 

// console.log(SportsCars);



/* (9) you have array name is "Menu" containing 
"Chicken Biryani","Veg Biryani", "Paneer Butter Masala"
"Chicken Curry" Find the length of the array and store it in
a variable name "MenuLength"*/
let Menu = ["Chicken Biryani", "Veg Biryani", "Paneer Butter Masala", "Chicken Curry"];

let MenuLength = Menu.length;
// console.log(MenuLength);
// console.log(typeof(MenuLength))



/* (10) You have array name is "Buketlist" containing 
"BMWM4", "AMG C63", "Audi R8", "Porsche 911"
check if "AMG C63" is in the array and store the result in a 
variable named "IsAMGC63inList"
"*/
let Buketlist = ["BMWM4", "AMG C63", "Audi R8", "Porsche 911"]

let IsAMGC63inList = Buketlist.includes("AMG C63");
// console.log(IsAMGC63inList);

// Buketlist.reverse(); 
// // console.log(Buketlist);

// Buketlist.shift();// Remove the 1st element
// // console.log(Buketlist);

// Buketlist.unshift("BMWM5"); // Add the element to the front of the array
// // console.log(Buketlist);


console.log(Array.from("Sandesh"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
