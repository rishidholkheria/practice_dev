import React, { useEffect } from "react";

// Throttling's concept is that if something was going to be triggered after k seconds, now it would
// take place after k seconds, if the user intervened, still it won't affect and will not reset the timer
// All the actions between that time will be ignored

const Throttling = () => {
  function throttle(fun, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall >= delay) {
        lastCall = now;
        fun.apply(this, args);
      }
    };
  }

  useEffect(() => {
    const handleScroll = throttle(() => {
      console.log("Throttled Scroll Event");
    }, 9000);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis quo nulla
        aliquid explicabo alias non quod officia provident modi saepe natus
        velit voluptate ipsam inventore, sed reiciendis error quam. Autem!
      </p>
    </div>
  );
};

export default Throttling;
