const myNums = [1, 2, 3]

const total = myNums.reduce( function (acc, currval){
    // console.log(`acc: ${acc} and currval:${currval}`);
    
    return acc + currval
}, 0)

// console.log(total);

const shoppingCart = [
    {
        itemName : "Mouse",
        price : 2999
    },
    {
        itemName : "Keyboard",
        price : 4999
    },
    {
        itemName : "Headphone",
        price : 3999
    },
]
const totalPrice = shoppingCart.reduce( (acc, item) => {
    return acc + item.price
}, 0)
console.log("Rs:", totalPrice);
