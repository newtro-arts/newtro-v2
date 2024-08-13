import React, { useState, useRef, useEffect } from "react";
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi";
import { hidden_filter } from "../hidden_filter";
import { trending_filter } from "../trending_filter";
import vuelapelucas from "../vuelapelucas";
import { drop3Mirrorscape } from "../drop3-mirrorscape";
import { drop2HashedThreads } from "../drop2-hashed-threads";
import { drop1MyceliumMiscellany } from "../mycelium-miscellany";
import FeaturedMintsHome from "./FeaturedMintsHome";
import nextwave from "../nextwave";
import { allDrops } from "../allDrops";
import Link from "next/link";

const filterList = [
  "All",
  "Hidden Gems",
  "Trending",
  "Vuelapelucas",
  "Bridge N3xtwave x Newtro",
  "Hashed Threads",
  "Mirrorscape",
  "Mycelium Miscellany",
];

const FeaturedMints: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

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

  let displayedData = [];
  switch (selectedFilter) {
    case "hidden gems":
      displayedData = hidden_filter;
      break;
    case "trending":
      displayedData = trending_filter;
      break;
    case "vuelapelucas":
      displayedData = vuelapelucas;
      break;
    case "bridge n3xtwave x newtro":
      displayedData = nextwave;
      break;
    case "mirrorscape":
      displayedData = drop3Mirrorscape;
      break;
    case "hashed threads":
      displayedData = drop2HashedThreads;
      break;
    case "mycelium miscellany":
      displayedData = drop1MyceliumMiscellany;
      break;
    default:
      displayedData = allDrops;
  }

  return (
    <div className="max-w-full pb-2 pt-8">
      <div className="flex justify-between">
        <h5 className="mb-4 text-xl lg:text-2xl pragmatica-text uppercase px-8">
          Featured Mints
        </h5>
        <div>
          <Link
            href="/drops/all"
            className=" align-middle leading-3 mr-8 text-sm lg:text-base cursor-pointer rounded-tl-cards rounded-br-cards p-buttons bg-fifth-purple text-fourth-green hover:bg-fourth-green hover:text-primary-dark"
          >
            Explorer{" "}
          </Link>
        </div>{" "}
      </div>
      <div className="flex flex-col px-8">
        <div
          className="flex justify-between overflow-x-auto horizontal-list whitespace-nowrap gap-x-0"
          ref={carouselRef}
        >
          {displayedData.map((mint: any, key: number) => (
            <div key={key}>
              <FeaturedMintsHome
                id={key}
                name={mint.name}
                image={mint.webAssets.previewAsset.previewImage}
                contract={mint.address}
                token_id={mint.tokenId}
              />
            </div>
          ))}
        </div>
        <div className="hidden lg:flex justify-between w-full text-xs mb-4">
          <div className="w-1/2 flex justify-start">
            <button
              onClick={scrollLeft}
              className={showLeftArrow ? "visible" : "invisible"}
            >
              <p className="text-fourth-green animate-pulse items-center gap-x-2 flex">
                <HiOutlineChevronDoubleLeft /> Scroll left
              </p>
            </button>
          </div>
          <div className="w-1/2 flex justify-end">
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
      </div>
      <div className="flex px-8 max-w-full overflow-x-auto horizontal-list items-center justify-between text-base py-4 border-y border-fourth-green">
        <p className="font-semibold mr-2">FILTER:</p>
        {filterList.map((title, key) => (
          <p
            key={key}
            onClick={() => setSelectedFilter(title.toLowerCase())}
            className={`cursor-pointer hover-underline-animation hover-underlined-filter ${
              selectedFilter.toLowerCase() === title.toLowerCase()
                ? "font-bold"
                : ""
            }`}
          >
            {title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMints;
