"use client";

import useCreators from "@/hooks/useCreators";
import React from "react";
import Avatar from "./Avatar";
import ConnectWalletButton from "@/components/Commons/CustomButton";

const CreatorsPage = () => {
  const { isWhitelisted, creators } = useCreators();

  return (
    <div className="px-4 md:px-9 mb-5">
      <h1 className="mt-24 mb-14 text-center text-fourth-green pragmatica-text uppercase font-semibold text-3xl/8 md:text-5xl/10 md:text-left">
        CREATORS
      </h1>
      {isWhitelisted ? (
        <div className="mx-auto grid grid-cols-2 auto-rows-[1fr] gap-5 md:grid-cols-4 xl:grid-cols-6">
          {creators.concat(creators).concat(creators).map((creator: any, i) => (
            <Avatar key={i} creator={creator} />
          ))}
        </div>
      ) : (
        <div className="text-white min-w-max absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ConnectWalletButton />
        </div>
      )}
    </div>
  );
};

export default CreatorsPage;
