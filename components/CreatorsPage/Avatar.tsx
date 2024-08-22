import React from "react";
import getIpfsLink from "@/lib/ipfs/getIpfsLink";
import Link from "next/link";
import Image from "next/image";

const Avatar = ({ creator }: any) => (
  <Link
    className='relative size-[9.875rem] bg-secondary-white border border-fourth-green rounded-tl-cards rounded-br-cards overflow-hidden md:size-[13.125rem] '
    href={`https://zora.co/@${creator.user_profile.username}`}>
    <Image
      alt='pfp'
      src={getIpfsLink(creator.user_profile.avatar)}
      width={60}
      height={60}
      className="size-full object-cover"
    />
    <div className='absolute inset-0 flex opacity-0 cursor-pointer hover:opacity-85 transition duration-700 bg-fifth-purple'>
      <div className="flex flex-col justify-end w-full p-4">
        <p className="pragmatica-text text-fourth-green text-sm uppercase overflow-hidden text-ellipsis whitespace-nowrap md:text-base">
          {creator.user_profile.username}
        </p>
      </div>
    </div>
  </Link>
);

export default Avatar;
