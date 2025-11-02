1️⃣ Theory:
What is the difference between shallow copy and deep copy of an object in JavaScript?
Give examples of each and how you would create them.

shallow copy copies an object but when there is a nested object, it do copy the outer object to a different address but the nested objects are being referenced from the same adddress
... spread operator, Object.assign(target, source)

meanwhile deep copy copies the whole object, including new address for the nested objects as well



2️⃣ Coding:

You have the following object:
const person = {
  name: "Alice",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

Now do the following:
Make a copy of this object (so changing one should not affect the other).
Change city in the copy to "Mumbai".
Print both objects to prove it works correctly.


const person2 = JSON.parse(JSON.stringify(person))
person2.address.city = "Mumbai"






3️⃣ Coding:

Given an object:

const salaries = {
  John: 100,
  Alice: 160,
  Bob: 130
};

Write a function to:
Find the total salary
Find the employee with the highest salary

let total = 0
let maxSal = 0

xxxxxxxxxxxx wrong slightly xxxxxxxxx
Object.entries(salaries).forEach((val)=>{
    total += val
    if(val>max){
        max = val;
    }
})
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
--- CORRECT ---
Object.entries(salaries).forEach(([name, salary]) => {
  total += salary;
  if (salary > maxSalary) {
    maxSalary = salary;
    topEmployee = name;
  }
});




4️⃣ Theory:
What happens if you loop over an object with for...in?
How is it different from looping over an array with for...of?

for(i in arr){
    // it traverses index or property names --- index/key loop
}

for(elem of arr){
    // it traverses values --- value loop
}









5️⃣ Coding (Tricky):

Write a function that takes a nested object and converts it to a single-level object with dot notation keys.

Example:
const obj = {
  name: "Alice",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

Expected output:
{
  "name": "Alice",
  "address.city": "Delhi",
  "address.pin": 110001
}



This IDK