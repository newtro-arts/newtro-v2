import React from "react";
import Image from "next/image";
import useGetContractInfo from "./gql/getContractInfo";
import Link from "next/link";
import getTokenLink from "@/lib/getTokenLink";
import { Address } from "viem";

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
  const totalSupply: string =
    data?.zoraCreateTokens[0]?.totalSupply.toString() + " Minted" ??
    "No mints yet";
  return (
    <div
      className={`flex h-fit text-left items-start scroll-smooth relative mb-4 bg-secondary-white mr-4 lg:mr-[21.5px] ${id % 2 === 0 ? " rounded-tl-cards rounded-br-cards" : "rounded-cards"}`}
    >
      <div className="flex flex-col justify-center w-full h-full">
        <Image
          className={`transition-opacity opacity-0 duration-[2s] max-w-[355px] md:max-w-[450px] mb-0 aspect-square ${id % 2 === 0 ? " rounded-tl-cards rounded-br-cards" : "rounded-cards"} object-cover`}
          src={`https://storage.newtro.xyz/${image}`}
          width={450}
          height={400}
          alt="Preview"
          loading="lazy"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>
      <div
        className={`absolute inset-0 flex opacity-0 cursor-pointer hover:opacity-85 transition duration-700 bg-fifth-purple ${id % 2 === 0 ? " rounded-tl-cards rounded-br-cards" : "rounded-cards"} object-cover`}
      >
        <div className="flex flex-col justify-end w-full p-4">
          <p className="pragmatica-text text-fourth-green uppercase lg:text-xl max-w-fit">{name}</p>
          <div className="flex w-full justify-between">
          <p>Artist</p>
<p>{totalSupply}</p>

          </div>

        </div>
      </div>
    </div>
  );
}
