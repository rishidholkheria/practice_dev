// Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// The extra properties and methods like toString, filter etcwe are able to access with an obj or function or array
// is because of prototypes. A hidden object __proto__ is attached to them which has the access to those properties

//ALSO, obj.__proto__ shows us an Object prototype
// function.__proto__ shows us Function prototype
// array.__proto__ shows us Array prototype

const obj = {
    name: "Rishi"
}
console.log(obj.toString()) // toString is inherited from Object.prototype
console.log(obj.__proto__)

console.log("---------")

const arr = ["Rishi"]
console.log(arr.__proto__)

console.log("---------")


function names(){

}
console.log(names.__proto__)

console.log("---------")


//Prototype Chain

// AND, object.__proto__.__proto__ is null because Object prototype's prototype is null
console.log(obj.__proto__.__proto__)

// function.__proto__.__proto__ gives us object protoype first
// then prototype of object prototype which is null
console.log(names.__proto__.__proto__)
console.log(names.__proto__.__proto__.__proto__) // null

// array.__proto__.__proto__ gives us object protoype first
// then prototype of object prototype which is null
console.log(arr.__proto__.__proto__)
console.log(arr.__proto__.__proto__.__proto__) // null  


