import useCreators from "@/hooks/useCreators";
import React from "react";
import Avatar from "./Avatar";
import ConnectWalletButton from "../CustomButton";
import { useAccount } from "wagmi";

const CreatorsPage = () => {
  const { creators } = useCreators();
  const { isConnected } = useAccount();

  return (
    <div className="text-white flex flex-col justify-center items-center min-h-screen">
      <h1>Creators</h1>
      {isConnected ? (
        <div className="grid grid-cols-3 gap-4 mt-4">
          {creators.map((creator: any) => (
            <Avatar key={creator.address} creator={creator} />
          ))}
        </div>
      ) : (
        <ConnectWalletButton />
      )}
    </div>
  );
};

export default CreatorsPage;
