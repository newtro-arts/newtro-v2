import Head from "next/head";
import React from "react";
import Header from "../Header";
import FilterItem from "../Commons/FilterItem";
import { filterList } from "@/sources/filterList";
import useFilterData from "@/hooks/useFilterData";
import MintTemplate from "./MintTemplate";

const GalleryPage = () => {
  const { selectedFilter, setSelectedFilter, filterData } = useFilterData();
  const displayedData = filterData();

  return (
    <div className="w-full min-h-screen text-fourth-green pt-16">
      <Head>
        <title>Gallery</title>
      </Head>   
      <Header />
      <main className="flex flex-col">
        <h1 className="px-8 text-2xl py-4 pragmatica-text text-center lg:text-left uppercase">
          Gallery
        </h1>
        <div className="flex max-w-full overflow-x-auto horizontal-list items-center justify-start text-base py-4 border-y px-8 border-fourth-green">
          <p className="font-semibold mr-8">FILTER:</p>
          <div className="flex overflow-x-auto gap-x-8 lg:gap-x-0 ">
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
          {displayedData.map((mint: any, key: number) => (
            <div key={key}>
              <MintTemplate
                id={key}
                name={mint.name}
                image={mint.webAssets.previewAsset.previewImage}
                contract={mint.address}
                token_id={mint.tokenId}
              />
            </div>
          ))}
      </main>
    </div>
  );
};

export default GalleryPage;
