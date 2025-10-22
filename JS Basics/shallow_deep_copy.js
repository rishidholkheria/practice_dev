let obj = {
  sports:{
    "cricket" : ["Virat", "Rohit"],
    "football" : ["Messi", "Ronaldo"],
    "chess" : ["karlsen", "Gukesh Dommaraju"]
  },
  politics:{
    "congress" : ["Sonia", "Rahul"],
    "bjp" : ["Modi", "Amit"],
  }
}


console.log(obj)
let copyObj = {...obj}   //// One way for shallow copy, another way is Object.assign(obj)
console.log(copyObj)

obj.sports.cricket.push("Iyer")

console.log(obj)
console.log(copyObj)