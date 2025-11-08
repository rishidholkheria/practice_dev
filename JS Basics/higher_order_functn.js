// Higher Order Functions
function getName(fun){
  // Here it is called Paramaters
  // But we also we say - taken as arguments
  fun("Rishi");
}

const nameShow = (name) => {
  console.log(name)
}

getName(nameShow) // PASSED AS ARGUMENT