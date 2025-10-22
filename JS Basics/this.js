console.log(this) // The default value of this in node is {} empty obj

// An object won't have its own scope, functions have their own scope
const obj = {
  name : "Virat",
  printNickname : function () {
    console.log("Batsman --- ", this.name)
  },
  printNicknameArrow :  () => {
    // console.log("Ghochu --- ", this)
    console.log("Batsman --- ", this.name)
  }
}

obj.printNickname()
obj.printNicknameArrow()


function normal() {
  console.log(arguments); // Works 
}

const arrow = () => {
  // console.log(arguments); // Error (arguments not defined)
};

normal("Rohit")
arrow()

//---------------------
// Since functions have their own scope, we use this.functnName to define the function expressions
function Person(name) {
  this.name = name;
  this.printName =  function(){
    console.log(this.name)
    console.log(this)
  };
    this.printNameArrow = ()=> {
    console.log(this.name)
    console.log(this)
  }
}


let obj1 = new Person("Rishi");
obj1.printName()
obj1.printNameArrow()