// Event Bubbling vs Event Capturing

// 1. Event Bubbling: In event bubbling, the event starts from the deepest target (child) element and then propagates up to its parent elements in the DOM hierarchy. 
// This means that when an event occurs on a child element, it first triggers the event handler on that child element, and then the event bubbles up to its parent elements, 
// triggering their event handlers as well.

// 2. Event Capturing: In event capturing, the event starts from the outermost element and propagates down to the target element. 
// This means that when an event occurs, it first triggers the event handler on the outermost parent element and then moves down through the DOM hierarchy to the target element, 
// triggering event handlers along the way.

// By default, event listeners are set to listen during the bubbling phase. 
// However, you can specify whether you want to listen during the capturing phase by passing a third argument (true for capturing, false for bubbling) to the addEventListener method.

document.getElementById("childBtn").addEventListener("click", ()=> {
    console.log()
}, true) ---> true / false represents useCapture() method --- true means Capturing

document.getElementById("childBtn").addEventListener("click", ()=> {
    console.log()
}, false) ---> false means Bubbling - default also means Bubbling

// We can also mix and match event bubbling and capturing for divs/elements in nested heirarchy