import React, { useState, useEffect, useCallback, useMemo } from "react";
import Head from "next/head";
import Header from "../Header";
import FilterItem from "../Commons/FilterItem";
import { filterList } from "@/sources/filterList";
import useFilterData from "@/hooks/useFilterData";
import MintTemplate from "./MintTemplate";
import Carousel from "../Commons/Carousel";
import { motion } from "framer-motion";

const ITEMS_PER_PAGE = 200;

const GalleryPage = () => {
  const { selectedFilter, setSelectedFilter, filterData } = useFilterData();

  const allData = useMemo(() => filterData(), [filterData]);

  const [displayedData, setDisplayedData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMoreItems = useCallback(() => {
    if (loading) return; 

    setLoading(true);

    const nextPage = currentPage + 1;
    const startIndex = nextPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE;
    const newItems = allData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    setDisplayedData((prevItems) => [...prevItems, ...newItems]);
    setCurrentPage(nextPage);
    setLoading(false);
  }, [currentPage, allData]);

  useEffect(() => {
    setDisplayedData(allData.slice(0, ITEMS_PER_PAGE));
    setCurrentPage(1);
  }, [allData]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !loading
      ) {
        loadMoreItems();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreItems]); 

  return (
    <div className="w-full min-h-screen text-fourth-green pt-16 flex flex-col">
      <Head>
        <title>Gallery</title>
      </Head>
      <Header />
      <main className="flex flex-col flex-1">
        <h1 className="px-8 text-2xl py-4 pragmatica-text text-center lg:text-left uppercase">
          Gallery
        </h1>
        <div className="flex max-w-full overflow-x-auto horizontal-list items-center text-sm py-1 border-y px-8 border-fourth-green">
          <p className="font-semibold mr-8">FILTER:</p>
          <div className="flex overflow-x-auto gap-x-8 lg:gap-x-0">
            {filterList.map((title, key) => (
              <FilterItem
                key={key}
                title={title}
                selectedFilter={selectedFilter}
                onSelect={setSelectedFilter}
              />
            ))}
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center py-4">
            <div className="pragmatica-text text-2xl animate-pulse">Loading...</div>
          </div>
        ) : (
          <div className="flex-1 overflow-hidden">
<Carousel itemsPerView={1} showReverse={true}>
  {displayedData.map((mint, key) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      key={key}
    >
      <MintTemplate
        id={key}
        name={mint.name}
        contract={mint.address}
        token_id={mint.tokenId}
      />
    </motion.div>
  ))}
</Carousel>
          </div>
        )}
      </main>
    </div>
  );
};

export default GalleryPage;