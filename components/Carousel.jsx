"use client";
import React, { useState, useEffect, useRef } from "react";

const Carousel = ({ children, itemsPerView = 1, showReverse = false }) => {
  const [counter, setCounter] = useState(0);
  const [pause, setPause] = useState(false);
  const carouselRef = useRef(null);
  const itemRefs = useRef([]);

  const handleNext = () => {
    if (counter < children.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  const handlePrevious = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(children.length - 1);
    }
  };

  useEffect(() => {
    if (itemRefs.current[counter] && carouselRef.current) {
      const selectedElement = itemRefs.current[counter];
      carouselRef.current.scrollTo({
        left: selectedElement.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [counter]);

  const handleMouse = () => {
    setPause(!pause);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (!pause) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [pause]);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, children.length);
  }, [children]);

  return (
    <div className="w-full flex flex-col justify-center text-white">
      <div
        className="overflow-x-auto no-scrollbar"
        ref={carouselRef}
      >
        <div className="flex">
          {children.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`min-w-full flex-shrink-0`}  
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {showReverse && (
          <button onClick={handlePrevious} className="mr-2">
            Previous
          </button>
        )}
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
