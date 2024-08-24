import { useState } from "react";
import { hidden_filter } from "../sources/hidden_filter";
import { trending_filter } from "../sources/trending_filter";
import vuelapelucas from "../sources/vuelapelucas";
import { drop3Mirrorscape } from "../sources/drop3-mirrorscape";
import { drop2HashedThreads } from "../sources/drop2-hashed-threads";
import { drop1MyceliumMiscellany } from "../sources/mycelium-miscellany";
import nextwave from "../sources/nextwave";
import { allDrops } from "../sources/allDrops";
import { useQuery } from "@tanstack/react-query";

const useFilterData = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const { data: allTokens, isSuccess } = useQuery<{ tokens: any[] }>({
    queryKey: ["allTokens"],
    queryFn: () => fetch("/api/tokens").then((res) => res.json()),
  });

  const tokens = isSuccess ? allTokens.tokens : [];
  const filterData = () => {
    switch (selectedFilter) {
      case "hidden gems":
        return hidden_filter;
      case "trending":
        return tokens.concat(trending_filter);
      case "vuelapelucas":
        return vuelapelucas;
      case "bridge n3xtwave x newtro":
        return nextwave;
      case "mirrorscape":
        return drop3Mirrorscape;
      case "hashed threads":
        return drop2HashedThreads;
      case "mycelium miscellany":
        return drop1MyceliumMiscellany;
      default:
        return drop1MyceliumMiscellany.concat(tokens); 
    }
  };

  return { selectedFilter, setSelectedFilter, filterData };
};

export default useFilterData;
