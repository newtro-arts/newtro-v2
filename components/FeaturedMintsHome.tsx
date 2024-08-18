import React from "react";
import useGetContractInfo from "./gql/getContractInfo";
import { Address } from "viem";
import FeaturedMintCard from "./FeaturedMintCard";

export interface Drop {
  name: string;
  image: string;
  contract: Address;
  tokenId: string;
}

export default function FeaturedMintsHome({
  name,
  image,
  contract,
  tokenId,
}: Drop) {

  const { data } = useGetContractInfo({
    collectionAddress: contract,
    tokenId: parseInt(tokenId),
  });

  const totalSupply = data?.zoraCreateTokens[0]?.totalSupply ?? 0;

  return <FeaturedMintCard mint={{ name, contract, image, tokenId, totalSupply }} />;
}