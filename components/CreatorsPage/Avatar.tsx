import React from "react";
import getIpfsLink from "@/lib/ipfs/getIpfsLink";

const Avatar = ({ creator }: any) => (
  <div className="flex justify-center items-center">
    <a
      href={`https://zora.co/@${creator.user_profile.username}`}
      target="_blank"
      rel="noreferrer"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="pfp"
        className="rounded-full object-cover"
        style={{ width: "75px", height: "75px" }}
        src={getIpfsLink(creator.user_profile.avatar)}
      />
    </a>
  </div>
);

export default Avatar;
