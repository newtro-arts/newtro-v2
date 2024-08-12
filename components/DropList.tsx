import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface Content {
  mime: string;
  uri: string;
}

export interface AssetInterface {
  image: string;
  mime: string;
}

export interface WebAssets {
  previewAsset: AssetInterface;
  originalAsset: AssetInterface;
}

export interface Drop {
  [x: string]: string;
  name: string;
  description: string;
  image: string;
  address: string;
  tokenId: string;
  animationUrl: string;
}

export interface DropList {
  drops: Drop[];
  showNames: boolean;
  bgColor: string;
}

export default function ImageList({ drops, showNames, bgColor }: DropList) {
  return (
    <div className={`text-center mt-20 bg-${bgColor}`}>
      <div className="flex flex-row  mx-auto flex-wrap justify-center max-w-[1200px] ">
        {drops.map((drop: Drop, index: number) => (
          <div
            key={index}
            className="w-[150px] h-[200px] flex justify-center items-center drop-shadow-lg relative group px-2 hover:-translate-y-1 transition ease-in-out hover:scale-110 duration-400  mb-4"
          >
            <Link href={`#${index}`}>
              {drop.type === "video/mp4" ? (
                <div className="w-full h-full">
                  <video autoPlay muted loop className="w-full h-full">
                    <source type={drop.type} src={drop.image} />
                  </video>
                </div>
              ) : (
                <Image
                  className="drop-shadow-lg transition-opacity opacity-0 duration-[2s]"
                  src={drop.image}
                  alt={drop.artist || "Image from drop"}
                  loading="lazy"
                  width={200}
                  height={200}
                  onLoadingComplete={(image) =>
                    image.classList.remove("opacity-0")
                  }
                />
              )}
            </Link>
          </div>
        ))}
      </div>
      {showNames && (
        <div className="hidden md:block border-b-2 border-black pb-10">
          {drops.map((drop: Drop, index: number) => (
            <Link key={index} href={`#${index}`}>
              <button className="bg-none border border-black px-4 py-2 my-2 mx-2 hover:scale-110 transition ease-in-out">
                {drop.artist}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
