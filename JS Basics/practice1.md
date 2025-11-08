// 1️⃣. Theory:

// What is the difference between map(), forEach(), filter(), and reduce()?
// Explain with a short example.

map function traverses through the whole array, each element 
forEach used when we need to implement a particular funciton for each element of the array
filter is used when we need to filter out few elements based on some particular condition
reduce we use when we have some value to accumulate 

arr.map((elem, key)=> (
    console.log(elem)
))

arr.forEach((elem) => (
    console.log(elem)
))

arr.filter((elem) => elem>10) // only elements > 10 will be there and will create a new array

arr.reduce((elem, acc) => {elem+acc},0)





Coding:
Write a function that takes an array of numbers and returns an array of squares of even numbers using chaining 
(no loops).

const getEvenSquares = (arr) => 
  arr.filter(num => num % 2 === 0).map(num => num * num);

console.log(getEvenSquares([1, 2, 3, 4, 5])); // [4, 16]





Coding:

You are given an array of objects:

const users = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 21 }
];
Write code to group users by age, producing:

{
  21: ["Alice", "Charlie"],
  25: ["Bob"]
}


// Intuition : “reduce” = build an object or value step by step.
const grp = users.reduce((acc, user)=>{
    if(!acc[user.age]){
        acc[user.age] = []
    }
    acc[user.age].push(user.name);
    return acc
}, {})





Theory:

What’s the difference between slice() and splice() in arrays?


slice(start, end) ===> Returns copy of a portion of an array  ===> [1,2,3,4].slice(1,3) → [2,3]
splice(start, deleteCount, ...items(to be added))  ===>  arr.splice(1,2) removes 2 elements starting at index 1





Coding:
Write a function that flattens a nested array (of any depth) without using the built-in flat().

Example:
flatten([1, [2, [3, [4]]]]) // [1, 2, 3, 4]



function flatteningList(arr){
  return arr.reduce((acc, val) => {
      if(Array.isArray(val)){
        return acc.concat(flatten(val))
      }else{
        return acc.concat(val),
      }
  }, [])
}



----Explanation----
let a = [1];
let b = [2, 3];

// a.push(b);   ❌ gives [1, [2,3]]
// a.concat(b); ✅ gives [1, 2, 3]

concat is used to merge arrays into one flat list, BUT concat does not mutate the original array — it returns a new one.



