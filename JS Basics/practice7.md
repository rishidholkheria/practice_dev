1️⃣ Theory + Debugging
What will be printed, and why?

const obj = {
  value: 10,
  show: function() {
    setTimeout(function() {
      console.log(this.value);
    }, 1000);
  }
};
obj.show();

👉 What will this print, and how can you fix it without using bind()?

Output:
undefined


To fix it we can use arrow function
setTimeout(() => {
      console.log(this.value);
}, 1000);





2️⃣ Output Prediction (Closures + this)
function makeObj() {
  let count = 0;
  return {
    increment: function() {
      count++;
      console.log(this.count);
    },
    getCount: function() {
      return count;
    }
  };
}

const obj = makeObj();
obj.increment();
console.log(obj.getCount());


👉 What will be logged, and what’s the issue?
(Explain how closure + this clashed here.)


OUTPUT:
undefined /// bcz here this.count is inside a return object not in a function and here it should have been called as obj. something but since not therefore undefined
1 // as its a closure function






3️⃣ Coding Challenge — Fix the this Trap

Make this code work so that it prints Hello, Rishi after 1 second.

const user = {
  name: "Rishi",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

function delayedGreet() {
  setTimeout(() => user.greet, 1000);
}

delayedGreet();


You’re not allowed to:
❌ modify user.greet
✅ only fix delayedGreet() implementation




4️⃣ Theory — Execution Context Memory

When a closure captures variables, and also uses this inside —
👉 Which one gets preserved: this or the lexical variables?
👉 How can you ensure both behave predictably?

(Explain conceptually — not code.)




Lexical variables (variables declared in outer scopes) are captured by closures and preserved — they keep their values across function calls.

this is not lexical by default. It is determined at call-time (the object that invoked the function), unless you use an arrow function (which makes this lexical).

So which gets preserved?

Lexical variables get preserved automatically by the closure.
this is not preserved by a closure (unless the function is an arrow function that inherits this lexically).


How to ensure both behave predictably:

Prefer arrow functions if you want the inner function to inherit the outer this.
Or assign const self = this (or const that = this) in the outer scope and use that inside callbacks.
Or bind the function (fn.bind(this)), or call the function with the desired context (fn.call(thisArg)).




5️⃣ Coding — this inside closure callback

Predict output and explain step-by-step:

const counter = {
  count: 0,
  incLater: function() {
    setTimeout(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
};

counter.incLater();

OUTPUT:
1

Then:
What would happen if the arrow function inside setTimeout was replaced with a normal function?
--- then undefined

