import React, { useState, useRef, useEffect } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { hidden_filter } from "../hidden_filter";
import vuelapelucas from "../vuelapelucas";
import { drop3Mirrorscape } from "../drop3-mirrorscape";
import { drop2HashedThreads } from "../drop2-hashed-threads";
import { drop1MyceliumMiscellany } from "../mycelium-miscellany";
import FeaturedMintsHome from "./FeaturedMintsHome";
import nextwave from "../nextwave";
import { allDrops } from "../allDrops";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

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

  const { data: allTokens, isPending } = useQuery<{ tokens: any[] }>({
    queryKey: ['allTokens'],
    queryFn: () => fetch('/api/tokens').then(res => res.json())
  });

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

  let displayedData = isPending || !allTokens ? [] : allTokens.tokens;

  return (
    <div className="max-w-full px-8 pb-2  pt-8">
      <div className="flex justify-between">
        <h5 className="mb-4 text-xl lg:text-2xl pragmatica-text uppercase">Featured Mints</h5>
        <div>
          <Link
            href="/drops/all"
            className=" align-middle leading-3 text-xs lg:text-lg cursor-pointer p-buttons border hover:border-fourth-green bg-fourth-green text-primary-dark hover:bg-primary-dark hover:text-fourth-green"
          >
            Explore all{" "}
          </Link>
        </div>{" "}
      </div>
      <div className="relative">
        <div
          className="min-h-10 flex justify-between overflow-x-auto horizontal-list whitespace-nowrap"
          ref={carouselRef}
        >
          {displayedData.map((mint: any, key: number) => (
            <div key={key}>
              <FeaturedMintsHome
                tokenURI={mint.tokenURI}
                contract={mint.contract.address}
                tokenId={mint.tokenId}
                totalSupply={mint.totalMinted}
              />
            </div>
          ))}
          {showLeftArrow && (
            <button
              className="hidden lg:block absolute top-1/2 left-2 transform -translate-y-1/2 border bg-primary-dark border-fourth-green px-2 py-1 "
              onClick={scrollLeft}
            >
              <MdOutlineKeyboardArrowLeft className="active:hover:fill-white" />
            </button>
          )}
          {showRightArrow && (
            <button
              className="hidden lg:block absolute top-1/2 right-2 transform -translate-y-1/2 border bg-primary-dark border-fourth-green px-2 py-1 "
              onClick={scrollRight}
            >
              <MdOutlineKeyboardArrowRight className="active:hover:fill-white" />
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-between text-base lg:flex-row mb-8">
        <p className="font-semibold mr-2">FILTER:</p>
        {filterList.map((title, key) => (
          <p
            key={key}
            onClick={() => setSelectedFilter(title.toLowerCase())}
            className={`cursor-pointer hover-underline-animation hover-underlined-filter ${selectedFilter.toLowerCase() === title.toLowerCase()
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
