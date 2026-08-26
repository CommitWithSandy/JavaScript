/*An IIFE (Immediately Invoked Function Expression) in JavaScript is a 
function that is defined and executed immediately after its creation.
It’s often used to create a private scope and avoid polluting the global namespace.
*/

(function database(){
    // Named IIFE
    console.log(`Db Connected`);
})();

(() =>{
    // UNNAMED IIFE
    console.log(`Db Connected TWo`);
    
})();

((name) =>{
    // with parameter
    console.log(`Db Connected TWo ${name}`);
    
})("Sandy");

// if we write two iife use after function ";" semicolon