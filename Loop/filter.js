const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNum = myNum.filter( (num) => {
//     return num > 4
// })

const newNum = []
myNum.forEach((num) =>{
    if(num > 4){
        newNum.push(num)
    }
})
// console.log(newNum);

const movies = [
    {
        title: 'Spiderman:Brand New Day', ReleaseYear: 2026, Cost: 20000
    },
    {
        title: 'Avengers:Age Of Ultron', ReleaseYear: 2015, Cost: 25000
    },
    {
        title: 'Avengers', ReleaseYear: 2020, Cost: 20000
    },
    {
        title: 'Iron Man', ReleaseYear: 2005, Cost: 20000
    },
    {
        title: 'Avengers:Doomsday', ReleaseYear: 2026, Cost: 45000
    },
];
// const favMovies = movies.filter((Mov) =>{
//     return Mov.ReleaseYear >= 2025
// })
const costMovies = movies.filter((Mov) =>{
    return Mov.Cost === '20Cr'
})
const favMovies = movies.filter((Mov) =>{
    return Mov.ReleaseYear >= 2020 && Mov.Cost >= 20000
})
console.log(favMovies);
// console.log(costMovies);

