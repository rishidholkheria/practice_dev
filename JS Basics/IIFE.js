// IIFE - Immediately Invoked Function Expression : It runs as soon as it is defined 
// It is NOT like useEffect

// (()=>{
//     console.log("Hello Good Morning User!");
// })();

// // Multiple IIFEs are separated using ;

// (()=>{
//     console.log("Hello Good Afternoon User!");
// })();


// IIFEs pass arguments to itself

function greet(){
    console.log("Helloooooo")
}
greet();

((name)=>{
    console.log(`Hello Good Afternoon ${name}!`);
})("Rishi");  // --- To get values dynamically



