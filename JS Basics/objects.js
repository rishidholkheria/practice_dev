
let obj = {
  sports:{
    "cricket" : ["Virat", "Rohit"],
    "football" : ["Messi", "Ronaldo"],
    "chess" : ["karlsen", "Gukesh"]
  },
  politics:{
    "congress" : ["Sonia", "Rahul"],
    "bjp" : ["Modi", "Amit"],
  }
}

console.log(Object.keys(obj).length >= 2 ? Object.keys(obj).length : "Singular")
console.log(Object.keys(obj)[0])
console.log(Object.keys(obj[Object.keys(obj)[0]]).length)


// Object.keys, Object.values, Object.entries

  