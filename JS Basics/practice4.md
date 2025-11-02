1️⃣ Debug + Theory:

What’s wrong with this code?
How would you fix it so the message logs after 2 seconds?

function delayedMessage() {
  setTimeout(() => {
    return "Hello after 2s";
  }, 2000);
}

delayedMessage().then(msg => console.log(msg));


This function should either return as a Promise or it should be an async function

xxxxxxxxxxxxx WRONG APPROACH xxxxxxxxx
async function delayedMessage() {
  const res = await setTimeout(() => {
    return "Hello after 2s";
  }, 2000);

  return res
}
delayedMessage().then(msg => console.log(msg));

OR 
------ THIS IS CORRECT ------
function delayedMessage() {
 return new Promise((res, rej) => {
    setTimeout(() => {
    res("Hello after 2s";)
  }, 2000)});
}
delayedMessage().then(msg => console.log(msg));







2️⃣ Coding Challenge:

Write a function fetchWithTimeout(promise, ms)
that takes any Promise and a timeout in ms, and:
Resolves/rejects based on the original promise if it finishes in time.
Rejects with "Timeout" if it takes longer.

Example:

const slow = new Promise(res => setTimeout(() => res("Done"), 3000));
fetchWithTimeout(slow, 2000)
  .then(console.log)
  .catch(console.error);  // → "Timeout"

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
WRONG
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function fetchWithTimeout(slow, delay){
    setTimeout(()=>{
        return new Promise((res, rej) => {
                rej("Timeout")
        })
    }, delay);

    if(slow){return slow;}
}
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

--- CORRECT APPROACH ---
You must race the original promise vs a timeout promise, and return the composed promise.
Correct (clean) implementation — using Promise.race and clearing timer:

function fetchWithTimeout(promise, ms) {
  let timeoutId;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => reject("Timeout"), ms);
  });

  return Promise.race([promise, timeoutPromise])
    .finally(() => clearTimeout(timeoutId));
}
// Example
const slow = new Promise(res => setTimeout(() => res("Done"), 3000));
fetchWithTimeout(slow, 2000).then(console.log).catch(console.error); // "Timeout"




3️⃣ Theory:

Explain the difference between these Promise combinators with one-line examples:

Promise.all(iterable)

Waits for all promises to fulfill; if any rejects, it rejects immediately with that rejection.

Example:

Promise.all([Promise.resolve(1), Promise.resolve(2)])
  .then(res => console.log(res)); // [1,2]


Promise.allSettled(iterable)

Waits for all promises to settle (either fulfilled or rejected). Returns array of {status, value/reason} for each.

Example:

Promise.allSettled([Promise.resolve(1), Promise.reject("err")])
  .then(res => console.log(res));
// [{status:'fulfilled', value:1}, {status:'rejected', reason:'err'}]


Promise.any(iterable)

Resolves as soon as any promise fulfills. If all reject, Promise.any rejects with AggregateError.

Example:

Promise.any([Promise.reject("a"), Promise.resolve(2)])
  .then(res => console.log(res)); // 2


Promise.race(iterable)

Resolves or rejects with the value/reason of the first settled promise (fastest to settle).

Example:

Promise.race([Promise.resolve(1), new Promise(res => setTimeout(() => res(2), 10))])
  .then(console.log); // 1


4️⃣ Coding:

Rewrite the following code using async/await instead of .then() chaining:

getUser()
  .then(user => getPosts(user))
  .then(posts => getComments(posts))
  .then(comments => console.log(comments))
  .catch(err => console.error("Error:", err));


async function fun(){
    try{
        const respGetUser = await getUser();
        const respGetComments = await getComments(respGetUser)
        console.log(respGetComments)
    }catch(e){
        console.log("Error:", e)
    }
}



5️⃣ Event-Loop Tracing (important one):

Predict the exact output and explain the order:

console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve()
  .then(() => console.log("C"))
  .then(() => console.log("D"));

console.log("E");

Output:
A
E
C
D
B