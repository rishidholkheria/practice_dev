1️⃣ Medium Coding Problem
Implement a function:

async function fetchAllData(urls) { ... }

It takes an array of URLs (urls),
Fetches all of them in parallel,
Returns an array of JSON results,
If any request fails, it should still return the results of others (with null or "Error" for failed ones).


async function fetchAllData(urls) { 
    const responseArray = Promise.allSettled([urls])
    return responseArray
}






2️⃣ Event-Loop Tracing Puzzle

Predict the exact output (in order) and explain why:

console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve()
  .then(() => console.log("3"))
  .then(() => setTimeout(() => console.log("4"), 0))
  .then(() => console.log("5"));

console.log("6");

Output
1
6
3
5
4
2

Promises in microtask queue
But setTimeout at first in macro task but the result is now a promise so micro task







3️⃣ Theory Check #1 — Microtasks vs nextTick

In Node.js, how are:

process.nextTick()

and

Promise.resolve().then(...)


different in scheduling order?


IDK this




4️⃣ Theory Check #2 — Promise.finally()

What does .finally() do in a Promise chain?
Does it get the resolved/rejected value?
How is it different from .then()?

.finally() will run once all events are done. And it will definately run whether Promise return resolve or reject





5️⃣ Theory Check #3 — Error Propagation

What happens here, and what will be logged?

Promise.resolve("A")
  .then(val => {
    console.log(val);
    throw new Error("Boom!");
  })
  .then(() => console.log("B")) --- SKIPPED
  .catch(err => console.log("Caught:", err.message))    --- after error came here
  .then(() => console.log("C"));   ---- then chain continues


  Output
  xxxxxxxxxxxxxxxxxxx WRONG xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  A
  after printing A we have an error throwed, the then chain will stop there itself
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  
  CORRECT
  A
  Caught : ERROR
  C