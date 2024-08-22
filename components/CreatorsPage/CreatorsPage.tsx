"use client";

import useCreators from "@/hooks/useCreators";
import React from "react";
import Avatar from "./Avatar";
import ConnectWalletButton from "../Commons/CustomButton";

const CreatorsPage = () => {
  const { isWhitelisted, creators } = useCreators();
  return (
    <div className="px-4 md:px-9 mb-5">
      <h1 className="mt-24 mb-14 text-center text-fourth-green pragmatica-text uppercase font-semibold text-3xl/8 md:text-5xl/10 md:text-left">CREATORS</h1>
      {isWhitelisted ? (
        <div className="mx-auto flex flex-wrap gap-4">
          {creators.map((creator: any) => (
            <Avatar key={creator.address} creator={creator} />
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
