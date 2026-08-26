// FOR OF LOOP

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const String = "Hello World"
for (const greet of String) {
    // console.log(`Each char ${greet} `);
    
}

// for in Loop
const myObject = {
    game1 : "GtaVI",
    game2 : "Hitman"
}
for (const key in myObject) {
    // console.log(`${key} fav is :${myObject[key]}`); 
}

const programlang = ["js", "cpp", "c", "java", "python"]

for (const key of programlang) {
    // console.log(key); 
}



// for each Loop
const role = ["Teacher", "Hr", "Manager", "Ceo"]

// role.forEach(function (val){
//     console.log(val);  
// })
role.forEach((item) => {
    // console.log(item);
})


const myCoding =[
    {
        companyName : "TATA",
        companyCEO : "Ratan Tata"
    },
    {
        companyName : "JHJ",
        companyCEO : "Hiremath"
    },
    {
        companyName : "Universe",
        companyCEO : "Vishnu"
    },
]
myCoding.forEach((item) =>{
    console.log(item.companyName);
})

//MAP
const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "AMERICA")
map.set('FR', "FRANCE")

// console.log(map);
for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}
for(const key in map){
    // console.log(key);
    
}

