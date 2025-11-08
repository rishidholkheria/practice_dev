1️⃣ Theory: this keyword

Explain how this is determined in JavaScript for the following cases (no code execution, just logic):

Inside a regular function  --- this points to the object in the function
Inside an arrow function --- arrow function dont have there own this so this points to window obj
Inside an object method --- if called as obj. then it will point to the obj else global object
Inside a class  --- points to the class's object
Inside an event listener in the browser  --- point to the global object
Bonus: What will be the value of this if you use "use strict" inside a standalone function?  ---- if function is regular finction then this points to the object in the function so here undefined if arrow function then window object





2️⃣ Debugging + Coding (this binding)

What will be logged here and why?

const person = {
  name: "Rishi",
  greet: function() {
    console.log("Hi, " + this.name);
  }
};
setTimeout(person.greet, 1000);

Output 
undefined

👉 Then: how can you fix it so it prints correctly after 1s?

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const person = {
  name: "Rishi",
  greet: function() {
    return (() => console.log("Hi, " + this.name);)   /// Wont work as this arrow functn never called explicitely
                                                      /// Therefore still returning undefined
  }
};
setTimeout(person.greet, 1000);
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Way 1 : setTimeout(person.greet.bind(person), 1000);
Way 2 : setTimeout(() => person.greet(), 1000);





3️⃣ Theory: Closures

Explain closures in your own words and give one real-life use case from backend or async code where they’re useful.


Closure is a a bundle in which function us wrapped along with its lexical scoped variables and functions. So child functions can even return value after there parent function have already returned.

Example idk



4️⃣ Coding (Closures practical):

Write a function counter() such that:

const count = counter();
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3

Bonus: Modify counter() so that you can reset it like:

count.reset(); 
console.log(count()); // 1



function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2





5️⃣ Coding (Callbacks → Promises):

You have a function:

function getData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

Convert it into a Promise-based version called getDataPromise(), and show how you’d call it using async/await.



function getDataPromise(){
    return new Promise((res) => {
        setTimeout(() => {
            res("Data received")
        }, 1000)
    })
}

async function callData(){
    await getDataPromise()
}
