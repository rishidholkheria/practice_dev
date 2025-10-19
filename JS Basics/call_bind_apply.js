//Call Bind Apply in JS
let name = {
    firstName: "Rishi",
    lastName: "Dholkheria",
    age: 24,
    printName: function(){
        console.log(this.firstName + " " + this.lastName)
        console.log(this)
    },
    printAge: printAge,
    // printNameArrow: ()=>{
    //     console.log(this.firstName + " " + this.lastName)
    //     console.log(this)
    // }
}

function printAge(){
    console.log(" Age is " + this.age)
}

function printDetails(city, field){
    console.log("City is " + city + " and Field is " + field)
}

name.printName()
// name.printNameArrow()

let name2 = {
    firstName: "Virat",
    lastName: "Kohli",
}

//Function Borrowing
// If I want to use a method in one object to another object, We use call, apply and bind methods
name.printName.call(name2) // here we are borrowing printName method of name obj to name2 obj using call method

// Usually we do not add a method in an object instead we make a standlalone function and use for all
console.log(" ------------ ")
name.printName()
name.printAge()

printDetails.call(name, "Delhi", "Computer Science")  // like this

// The only difference between call and apply is the way of passing arguments
// In call we passed one by one, in apply we will pass args as an array

printDetails.apply(name, ["Delhi", "Computer Science"])


console.log(" ------- ")

// bind method
// Looks same as CALL method BUT the difference is that it returns a function instead of calling it immediately
// It creates a copy of the function for us which we can store in a variable and call later

let printMyDetails = printDetails.bind(name, "Delhi", "Computer Science")  // binded name object with function and stored
printMyDetails()