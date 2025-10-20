// Function Currying : Currying is a technique in functional programming where a function is broken into a series of partially applied functions, 
// each taking a single argument.

let multiply = function(x, y){
    console.log(x * y)
}

let multiplyByTwo = multiply.bind(this, 2)  // creating a new function by binding first argument as 2
multiplyByTwo(5)  // 10
multiplyByTwo(6)  // 12


let multiplyByFive = multiply.bind(this, 5)  // creating a new function by binding first argument as 2
multiplyByFive(5)  
multiplyByFive(6)  


// This is function currying using bind method
// Another way to do function currying is using closures

console.log("-----")

let add = function(x){
    return function(y){
        console.log(x + y)
    }
}

let addTen = add(10)  // returns a function which takes y as argument
addTen(3)