'use client'
import React, { useState, useEffect } from "react";

const Carousel = ({ children, size }) => {
  const [counter, setCounter] = useState(1);
  const [pause, setPause] = useState(false);
  const content = children;

  const handleNext = () => {
    if (counter !== content.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };

  const handleMouse = () => {
    setPause(!pause);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (!pause) {
        handleNext();
      } else {
        clearInterval(interval);
      }
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="w-full flex justify-center text-white">
      <div
        className={size}
      >
        {content.map((item, index) => (
          <div
            className={counter - 1 === index ? "show" : "not-show"}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;