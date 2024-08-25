import React from "react";
import getTokenLink from "@/lib/getTokenLink";
import getValidImage from "@/lib/getValidImage";
import Image from "next/image";
import Link from "next/link";
import { Address } from "viem";

export interface Drop {
  mint: {
    id: number;
    name: string;
    image: string;
    contract: Address;
    tokenId: string;
    totalSupply: string | number;
  };
}

export default function FeaturedMintCard({ mint }: Drop) {
  const id = mint.id;
  const totalSupply = mint.totalSupply;

  return (
    <Link
      className={`flex h-fit mx-8 text-left items-start scroll-smooth gap-x-0 relative mb-4 bg-secondary-white mr-4 ${id % 2 === 0 ? " rounded-tl-cards rounded-br-cards" : "rounded-cards"}`}
      href={getTokenLink(mint.contract, mint.tokenId)}
    >
      <div className="flex flex-col justify-center w-full h-full">
        <Image
          className={`transition-opacity opacity-0 duration-[2s] max-w-[350px] lg:max-w-[600px] mb-0 aspect-square ${id % 2 === 0 ? " rounded-tl-cards rounded-br-cards" : "rounded-cards"} object-cover`}
          src={getValidImage(mint.image)}
          width={460}
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
          <p className="pragmatica-text text-fourth-green uppercase lg:text-xl max-w-fit overflow-hidden text-ellipsis whitespace-nowrap">
            {mint?.name}
          </p>
          <div className="flex w-full justify-between text-xs">
            <p>Artist</p>
            <p>{totalSupply ? `${totalSupply} Minted` : "No mints"}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
