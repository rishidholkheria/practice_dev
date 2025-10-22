// Lexical Scope Example

let a = 10

function parent(){
  let a = 29;
  function child(){
    let a =20
    console.log(a);
  }
  child();
  console.log(a);
}
parent();


// const a = 20
// console.log(a)

// {
//   let a = 10
//   console.log(a)
// }
