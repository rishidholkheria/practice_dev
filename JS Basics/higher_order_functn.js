// Higher Order Functions
function getName(ns){
  // Here it is called Paramaters
  // But we also we say - taken as arguments
  ns("Rishi");
}

const nameShow = (name) => {
  console.log(name)
}

getName(nameShow) // PASSED AS ARGUMENT