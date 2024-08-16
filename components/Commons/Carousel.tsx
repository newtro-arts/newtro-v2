import React, { useRef, useState, useEffect } from "react";
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi";

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
        const isScrollable = scrollWidth > clientWidth;

        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(
          scrollLeft < scrollWidth - clientWidth && isScrollable
        );
      }
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollRight = () => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      const scrollWidth = carouselRef.current.scrollWidth;
      const maxScroll = scrollWidth - containerWidth;
      const currentScroll = carouselRef.current.scrollLeft;

      const itemWidth = containerWidth / 2;
      const nextScroll = Math.min(currentScroll + itemWidth, maxScroll);

      carouselRef.current.scrollTo({
        left: nextScroll,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      const currentScroll = carouselRef.current.scrollLeft;

      const itemWidth = containerWidth / 2;
      const nextScroll = Math.max(currentScroll - itemWidth, 0);

      carouselRef.current.scrollTo({
        left: nextScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div
        className="flex justify-between overflow-x-auto horizontal-list whitespace-nowrap gap-x-0"
        ref={carouselRef}
      >
        {children}
      </div>
      <div className="hidden lg:flex justify-between w-full text-xs mb-4 lg:px-8">
        <button
          onClick={scrollLeft}
          className={showLeftArrow ? "visible" : "invisible"}
        >
          <p className="text-fourth-green animate-pulse items-center gap-x-2 flex">
            <HiOutlineChevronDoubleLeft /> Scroll left
          </p>
        </button>
        <button
          onClick={scrollRight}
          className={showRightArrow ? "visible" : "invisible"}
        >
          <p className="text-fourth-green animate-pulse items-center gap-x-2 flex">
            Scroll right <HiOutlineChevronDoubleRight />
          </p>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
