import React from "react";

// If the user is not typing something for a particular amount of time then only make the API call
// Otherwise if user INTERRUPTED in between, RESET the timer again for that particular amount of time

const Debounce = () => {
  const getData = () => {
    console.log("Pressed button..");
  };

  const debounce = (fn, delay) => {
    let timer;
    return function (...args){
        clearTimeout(timer) // Clear krdia jitna wait kra tha resrtart krenge
        timer = setTimeout(()=>{
            fn(...args) // ya to function lelo args me ki konsa call krna h vrna khud krlo... dono theek h
        }, delay)
    }
  };

  return (
    <div>
      <input
        style={{ padding: "8px" }}
        type="text"
        placeholder="Search movie..."
        onKeyDown={debounce(getData, 900)}
      />
    </div>
  );
};

export default Debounce;
