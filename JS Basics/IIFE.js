(()=>{
    console.log("Hello Good Morning User!");
})();

// Multiple IIFEs are separated using ;

(()=>{
    console.log("Hello Good Afternoon User!");
})();


// IIFEs pass arguments to itself

((name)=>{
    console.log(`Hello Good Afternoon ${name}!`);
})("Rishi");

