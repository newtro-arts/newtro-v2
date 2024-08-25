import React, { useRef, useState, useEffect } from "react";
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi";

interface CarouselProps {
  children: React.ReactNode;
  itemsPerView?: number;
  showReverse?: boolean;
  size?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  itemsPerView = 2,
  showReverse = false,
}) => {
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
      const itemWidth = containerWidth / itemsPerView;
      const currentScroll = carouselRef.current.scrollLeft;
      const maxScroll = carouselRef.current.scrollWidth - containerWidth;
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
      const itemWidth = containerWidth / itemsPerView;
      const currentScroll = carouselRef.current.scrollLeft;
      const nextScroll = Math.max(currentScroll - itemWidth, 0);

      carouselRef.current.scrollTo({
        left: nextScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      style={
        showReverse
          ? {
              display: "flex",
              flexDirection: "column",
            }
          : {
              display: "flex",
              flexDirection: "column-reverse",
            }
      }
    >
      <div className="flex px-4 lg:px-8 justify-between w-full text-xs mt-4">
        <button
          onClick={scrollLeft}
          className={showLeftArrow ? "visible" : "invisible"}
        >
          <p className="text-fourth-green animate-pulse items-center gap-x-2 flex">
            <HiOutlineChevronDoubleLeft /> Previous
          </p>
        </button>
        <button
          onClick={scrollRight}
          className={showRightArrow ? "visible" : "invisible"}
        >
          <p className="text-fourth-green animate-pulse items-center gap-x-2 flex">
            Next <HiOutlineChevronDoubleRight />
          </p>
        </button>
      </div>

      <div
        className="flex overflow-x-auto whitespace-nowrap scroll-smooth"
        ref={carouselRef}
      >
        {React.Children.map(children, (child) => (
          <div className={`max-w-full h-fit flex-shrink-0`}>{child}</div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
