import React from "react";
import Image from "next/image";
import Link from "next/link";
import getTokenLink from "@/lib/getTokenLink";
import { Address } from "viem";
import getValidImage from "@/lib/getValidImage";
import getTokenMetdata from "@/lib/ipfs/getTokenMetadata";
import { useQuery } from "@tanstack/react-query";

export interface Drop {
  tokenURI: string;
  contract: Address;
  tokenId: string;
  totalSupply: string;
}

export default function FeaturedMintsHome({
  tokenURI,
  contract,
  tokenId,
  totalSupply
}: Drop) {
  const { data } = useQuery({
    queryKey: [`${contract}/${tokenId}`],
    queryFn: () => getTokenMetdata(tokenURI)
  });

  return (
    <div
      className={`flex max-w-[350px] lg:min-w-[350px] h-fit text-left items-start scroll-smooth mb-4 bg-secondary-white mr-4 lg:mr-[21.5px]`}
    >
      <div className="flex flex-col justify-center w-full h-full">
        <Image
          className="transition-opacity opacity-0 duration-[2s] max-w-[299px] md:max-w-[350px] mb-0 aspect-square object-cover"
          src={getValidImage(data?.image ?? '')}
          width={600}
          height={400}
          alt="Preview"
          loading="lazy"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <div className="flex flex-col w-full h-[125px] justify-between px-2">
          <p className="mt-2 line-clamp-4 text-primary-dark pragmatica-text">
            {data?.name ?? ''}
          </p>
          <div className="flex justify-between">
            <p className="text-primary-dark text-xs mt-3 pb-2 self-end">
              {totalSupply ? totalSupply + ' Minted' : 'No mints yet'}
            </p>
            <Link
              href={getTokenLink(contract, tokenId)}
              className="h-fit cursor-pointer p-buttons bg-tertiary-purple text-secondary-white hover:bg-fourth-green hover:text-tertiary-purple mb-2 "
            >
              More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
