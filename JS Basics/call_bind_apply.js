//Call Bind Apply in JS
let name = {
  firstName: "Rishi",
  lastName: "Dholkheria",
  age: 24,
  printName: function () {
    console.log(this.firstName + " " + this.lastName);
    console.log(this);
  },
  printAge: printAge,
  // printNameArrow: ()=>{
  //     console.log(this.firstName + " " + this.lastName)
  //     console.log(this)
  // }
};

function printAge() {
  console.log(" Age is " + this.age);
}

function printDetails(city, field) {
  console.log(
    "City is " + city + " and Field is " + field + " --- " + this.firstName
  );
}

name.printName();
// name.printNameArrow()

let name2 = {
  firstName: "Virat",
  lastName: "Kohli",
};

//Function Borrowing
// If I want to use a method in one object to another object, We use call, apply and bind methods
name.printName.call(name2); // here we are borrowing printName method of name obj to name2 obj using call method

// Usually we do not add a method in an object instead we make a standlalone function and use for all
console.log(" ------------ ");
name.printName();
name.printAge();

printDetails.call(name, "Delhi", "Computer Science"); // like this

// The only difference between call and apply is the way of passing arguments
// In call we passed one by one, in apply we will pass args as an array

printDetails.apply(name, ["Delhi", "Computer Science"]);

console.log(" ------- ");

// bind method
// Looks same as CALL method BUT the difference is that it returns a function instead of calling it immediately
// It creates a copy of the function for us which we can store in a variable and call later

let printMyDetails = printDetails.bind(name, "Delhi", "Computer Science"); // binded name object with function and stored
printMyDetails();





console.log("------------------------");



// When it is good to use arrow function for this ---- callbacks

const person = {
  name: "Rishi",
  greet: function () {
    setTimeout(function () {
      console.log("Hello " + this.name);
    }, 1000);
  },
};
person.greet();

const personArrow = {
  name: "Rishi",
  greet: function () {
    setTimeout(() => {
      console.log("Hello " + this.name); // ✅ "Hello Rishi"
    }, 1000);
  },
};
personArrow.greet();





console.log("------------------------");


const add = (a, b) => a + b;
const bound = add.bind(null, 2);
console.log(bound(3)); // Output?



console.log("------------------------");
console.log("------------------------");
console.log("------------------------");
console.log("------------------------");

const x = {
  a: 42,
  b: function() {
    return (() => this.a)();
  }
};
console.log("Thissss ----> ", x.b());