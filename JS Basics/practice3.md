1️⃣ Theory:

Explain what a Promise is in JavaScript.
What are the three states of a promise, and how do they change over time?
Also explain microtasks and macrotasks in the JS event loop context briefly.

Promise is an object in JS which denotes the eventual completion of an async action/event.
It has 3 states - resolve reject pending
pending is the initial state
then when the task is done it returns resolve 
if there is some error then it returns reject

Macrotask queue is in the browser, when an async function is there, JS engine puts that task to web apis to happen, once its completed, it sends that is sent to macrotask queue where Event loop is an observer which checks if the call stack is empty then it makes that function to go into call stack

Microtask queue acts the same way but it has more priority that macro task queue. The Promises are added into micro instead of macro, and if there is a event in micro task queue then it will happen instead of macro task queue





2️⃣ Coding:

Write a function getData() that returns a Promise which:
Resolves with "Data fetched successfully" after 2 seconds.
Rejects with "Error fetching data" if shouldFail (a parameter) is true.

Example:
getData(false).then(console.log).catch(console.error);
// Output after 2s → "Data fetched successfully"

xxxxxxxxxxxxxxxxxxxxxxxxSLIGHT WRONGxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function getData(shouldFail = true){
    if(shouldFail){
        return Promise.reject("Error fetching data")
    } else{
        setTimeout(()=>{
            return Promise.resolve("Data fetched successfully")
        },2000)
    }
}
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
🧠 Intuition:
Always use new Promise() when you want to manually control resolve / reject over time.

function getData(shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("Error fetching data");
      } else {
        resolve("Data fetched successfully");
      }
    }, 2000);
  });
}
getData(false).then(console.log).catch(console.error);







3️⃣ Theory:

What is the difference between:
.then().catch()
async/await
Which one would you prefer in backend code and why?


async await is preffered more as it handles promises more effectively 
.then().catch is also good but if there are nested promise based functions, it can lead to "then-catch hell"

// Cross check this syntax and logic for then
fetch("example.com").then((res) => {
    return fetch("example2.com").then((res) => {
        return 
    })
}).catch((e)=>console.log(e))







4️⃣ Coding (Tricky):

You have two async functions:

function getUser() {
  return new Promise(res => setTimeout(() => res("User Found"), 2000));
}

function getPosts() {
  return new Promise(res => setTimeout(() => res("Posts Found"), 3000));
}

Write an async function that:
Fetches both in parallel
Waits for both to finish

Way 1:
function async getData(){
    const res1 = await getUser();
    const res2 = await getPosts();

    console.log(res1)
    console.log(res2)
}

Way2:
function async getData(){
    const responses = Promise.all(getUser(), getPosts())
    responses.map((res)=> console.log(res))
}




5️⃣ Debug/Explain Question:

What will be the output of the following code? And why?

console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise resolved"));
console.log("End");
xxxxxxxxxxxxxxxxxx
Output:
Start
Promise resolved 
Timeout
End
xxxxxxxxxxxxxxxxxxx
Correct output:
Start
End                     /// syncronous tasks happen first
Promise resolved
Timeout

setTimeout will go to macrotask queue and setTimeout("Promise resolved") in microtask queue