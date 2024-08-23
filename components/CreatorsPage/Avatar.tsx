import React from "react";
import getIpfsLink from "@/lib/ipfs/getIpfsLink";
import Link from "next/link";

const Avatar = ({ creator }: any) => {
  const avatar = creator.user_profile.avatar;

  return (
    <Link
      className='relative aspect-square bg-secondary-white border border-fourth-green rounded-tl-cards rounded-br-cards overflow-hidden'
      href={`https://zora.co/@${creator.user_profile.username}`}
      target="_blank">
      <img
        alt='pfp'
        src={avatar ? getIpfsLink(avatar) : '/default-avatar.png'}
        className="size-full object-cover"
      />
      <div className='absolute inset-0 flex opacity-0 cursor-pointer hover:opacity-85 transition duration-700 bg-fifth-purple'>
        <div className="flex flex-col justify-end w-full p-4">
          <p className="text-center pragmatica-text text-fourth-green text-sm uppercase overflow-hidden text-ellipsis whitespace-nowrap md:text-base">
            {creator.user_profile.display_name}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Avatar;
