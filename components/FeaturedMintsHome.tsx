import React from "react";
import useGetContractInfo from "./gql/getContractInfo";
import { Address } from "viem";
import FeaturedMintCard from "./FeaturedMintCard";
import Link from "next/link";
import Image from "next/image";
import getTokenLink from "@/lib/getTokenLink";

export interface Drop {
  id: number;
  name: string;
  image: string;
  contract: Address;
  token_id: string;
}

export default function FeaturedMintsHome({
  id,
  name,
  image,
  contract,
  token_id,
}: Drop) {

  const { data } = useGetContractInfo({
    collectionAddress: contract,
    tokenId: parseInt(token_id),
  });
  const totalSupply = data?.zoraCreateTokens[0]?.totalSupply.toString() ?? 0;
  return <FeaturedMintCard mint={{
    id,
    totalSupply,
    name,
    image,
    contract,
    tokenId: token_id
  }} />;
}