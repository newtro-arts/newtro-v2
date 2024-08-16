import Image from "next/image";
import React from "react";
import { MdConstruction } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";
import Link from "next/link";

const Construction = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Image src="/newtrologo.svg" width={80} height={62} alt="Newtro Logo" />
      <div className="flex flex-col lg:flex-row items-baseline justify-center">
        <h3 className="uppercase text-2xl lg:text-4xl mt-2 font-semibold mr-2 justify-center text-center">
          Website Under Construction
        </h3>
        {/* <MdConstruction size={40} className='pt-1 self-center'/> */}
        <Image
          src="/Construction.svg"
          width={38}
          height={38}
          alt="Construction"
          className="pt-1 self-center"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center mt-4 w-[100px] items-start">
        <Link
          href="https://x.com/NewtroArts"
          target="_blank"
          className="flex items-center mr-10"
        >
          <GoLinkExternal size={10} />
          <p className="ml-1 text-xs">X</p>
        </Link>
        <Link
          href="https://www.instagram.com/newtroarts/"
          target="_blank"
          className="flex items-center mr-10"
        >
          <GoLinkExternal size={10} />
          <p className="ml-1 text-xs">INSTAGRAM</p>
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCnr-Jd3qkb0N_e0Dvzhig7Q"
          target="_blank"
          className="flex items-center mr-10"
        >
          <GoLinkExternal size={10} />
          <p className="ml-1 text-xs">YOUTUBE</p>
        </Link>
        <Link
          href="https://warpcast.com/newtroarts"
          target="_blank"
          className="flex items-center"
        >
          <GoLinkExternal size={10} />
          <p className="ml-1 text-xs">WARPCAST</p>
        </Link>
      </div>
    </div>
  );
};

export default Construction;
