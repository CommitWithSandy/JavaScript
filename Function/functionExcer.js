/*
Task 1 : Using Array Methods
Write a function squareNumbers(arr) using map() and arrow functions
*/
function squareNumbers(arr){
   arr = arr.map(num => num * num);
   return arr;
}

let number = squareNumbers([2, 3, 4, 5])
// console.log(number)



/*
Task 2: Custom Filter Function
Create a function filterEvenNumbers(arr) 
using filter() and arrow functions
*/
function filterEvenNumbers (arr){
    return arr.filter(num => num % 2 === 0)
    
}
let num1 = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// console.log(num1)



/*
Task 3: Sum of Positive Numbers
Write a function sumPositiveNumbers(arr) that takes an array of 
numbers and returns the sum of all positive numbers 
using filter() and reduce() with arrow functions
*/
function sumPositiveNumbers (arr){
    let filter = arr.filter(num => num > 0)
    let reduce = filter.reduce((total, num) => total + num, 0)
    return reduce;
}
let pos = sumPositiveNumbers([2, 3, -4, 5, -6, 7])
// console.log(pos)


/*
Task 4: Transform Array of Objects
Write a function getNames(arr) that takes an array of objects 
where each object has a name property, and returns an array of 
just the names using map() and arrow functions
*/

function getNames(arr){
    arr = arr.map(student => student.name)
    return arr
}
let data = getNames([{name:"Priya", age:"23"},{name:"Sandesh", age:"23"}])
// console.log(data)

/*
Task 5: Find the Longest Word
Write a function findLongestWord(arr) that takes an array of strings and 
returns the longest word using reduce() and an arrow function
*/

function findLongestWord(arr){
    arr = arr.reduce((long, word) => {
        if(word.length > long.length){
            return word
        }
        return long
    })
    return arr
}
let stringLong = findLongestWord(["Photosynthasis", "Apple", "Banana"])
console.log(stringLong)