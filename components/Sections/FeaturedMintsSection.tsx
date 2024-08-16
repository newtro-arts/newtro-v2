import React, { useState } from "react";
import FilterItem from "../Commons/FilterItem";
import Carousel from "../Commons/Carousel";
import { hidden_filter } from "../../sources/hidden_filter";
import { trending_filter } from "../../sources/trending_filter";
import vuelapelucas from "../../sources/vuelapelucas";
import { drop3Mirrorscape } from "../../sources/drop3-mirrorscape";
import { drop2HashedThreads } from "../../sources/drop2-hashed-threads";
import { drop1MyceliumMiscellany } from "../../sources/mycelium-miscellany";
import FeaturedMintsHome from "../FeaturedMintsHome";
import nextwave from "../../sources/nextwave";
import { allDrops } from "../../sources/allDrops";
import Link from "next/link";
import Button from "../Commons/Button";

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

const FeaturedMintsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

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
        <h5 className="mb-4 text-xl lg:text-2xl pragmatica-text uppercase mx-8">
          Featured Mints
        </h5>
        <div className="hidden lg:block">
          <Button
            href="/drops/all"
            className="mr-8 text-sm lg:text-base"
            isLink
          >
            Explorer
          </Button>
        </div>
      </div>
      <Carousel>
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
      </Carousel>
      <div className="flex px-8 max-w-full overflow-x-auto horizontal-list items-center justify-between text-base py-4 border-y border-fourth-green">
        <p className="font-semibold mr-2">FILTER:</p>
        <div className="flex overflow-x-auto space-x-4">
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
      <div className="flex lg:hidden w-full px-8">
        <Button
          href="/drops/all"
          className="text-center mx-2 my-4 p-3 border border-fourth-green text-sm w-full"
          isLink
        >
          Explorer
        </Button>
      </div>
    </div>
  );
};

export default FeaturedMintsSection;
