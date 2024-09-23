import React from "react";
import getTokenMetdata from "@/lib/ipfs/getTokenMetadata";
import { useQuery } from "@tanstack/react-query";
import FeaturedMintCard from "./FeaturedMintCard";
import { Token } from "@/types/token";

export default function FeaturedMintTokenURI({ mint }: { mint: Token }) {
  const { data, isSuccess } = useQuery({
    queryKey: [`${mint.contract.address}/${mint.tokenId}`],
    queryFn: () => getTokenMetdata(mint.tokenURI),
  });

  const mintCard = {
    id: mint.id,
    name: isSuccess ? data?.name : "",
    image: isSuccess ? data.image : "",
    contract: mint.contract.address,
    tokenId: mint.tokenId,
    totalSupply: mint.totalMinted,
  };

  return <FeaturedMintCard mint={mintCard} />;
}
