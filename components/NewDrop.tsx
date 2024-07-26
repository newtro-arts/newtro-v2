import React from "react";
import Image from "next/image";
import useGetContractInfo from "./gql/getContractInfo";
import Link from "next/link";
import { Content, WebAssets } from "./DropList";

export interface Drop {
  name: string;
  description: string;
  image: string;
  index: number;
  content?: Content;
  webAssets?: WebAssets;
  contract?: string;
  token_id: string;
  dropName: string;
  mime: string;
}

export default function NewDrop({
  name,
  description,
  image,
  index,
  content,
  webAssets,
  contract,
  token_id,
  dropName,
  mime,
}: Drop) {
  // GRAPHQL CALL TO BRING: SALE STATUS, MINTED AMOUNT.
  const { loading, error, data } = useGetContractInfo({
    collectionAddress: contract,
    tokenId: parseInt(token_id),
  });

  const totalSupply: string =
    data?.zoraCreateTokens[0]?.totalSupply.toString() + " Minted" ??
    "No mints yet";
  return (
    <div
      className={`flex h-fit text-left items-start scroll-smooth mb-4 bg-secondary-white `}
    >
      {/* MINT UI */}
      <div className="flex flex-col justify-center w-full h-full">
        {/* IMAGE PREVIEW */}
            <Image
              className="transition-opacity opacity-0 duration-[2s] mb-0 aspect-square object-cover"
              src={`https://storage.newtro.xyz/${image}`}
              width={500}
              height={400}
              alt="Preview"
              loading="lazy"
              quality={80}
              onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            />
        <div className="flex flex-col w-full h-[125px] justify-between px-2">
            <p className="mt-2 line-clamp-4 text-primary-dark pragmatica-text">{name}</p>
            <div className="flex justify-between">
            <p className="text-primary-dark text-xs mt-3 pb-2 self-end">
              {totalSupply}
            </p>
          <Link
            href={`/${dropName}/${name}`}
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
