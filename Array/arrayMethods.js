/*Task 1: Array Filtering
Write a function filterNumbers(arr) 
that returns only numbers from a mixed array
*/
function filterNumbers(arr) {
  return arr.filter(items => typeof items === 'number');
}
let result = filterNumbers([20, "hello", "55", true, 50])
console.log(result)

/*
Task 2: Array Reversal
Write a function reverseArray(arr) that reverses the array
*/
function reverseArray(arr) {
  return arr.reverse();
}
let arr = reverseArray ([2, 4, 5, 6, 7 ,8]);
console.log(arr);


/*
Task 3: Find Maximum in an Array
Write a function findMax(arr) that returns the largest number in the array
*/
function findMax(arr) {
    return Math.max(...arr)
}
let max = findMax([20, 23, 44, 23]);
console.log(max);


/*
Task 4: Remove Duplicates from an Array
Write a function removeDuplicates(arr) that 
returns a new array with all duplicates removed
*/
function removeDuplicates(arr) {
  return [...new Set(arr)]; 
}
let duplicate = removeDuplicates([1, 2, 2, 4, 5, 6, 8, 8]);
console.log(duplicate);

/*
Task 5: Flatten a Nested Array
Write a function flattenArray(arr) that takes 
a nested array and returns a single flattened array
*/
function flattenArray(arr) {
  return arr.flat(Infinity);
}
let flatten = flattenArray([1, 2, [3, 4], [5, [6, 7]]]);
console.log(flatten);