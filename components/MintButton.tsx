import React from "react";
import Image from "next/image";
import check from "../public/check.svg";
import {
  useContractWrite,
  useWaitForTransaction,
  UseContractWriteConfig,
} from "wagmi";
import CustomButton from "./CustomButton";

interface MintButtonProps {
  config?: UseContractWriteConfig;
  isMintLoading: boolean;
  isMintStarted: boolean;
  isMinted: boolean;
  mint: (() => void) | undefined;
  mintData: { hash?: string } | undefined;
  isConnected: boolean;
}

const MintButton: React.FC<MintButtonProps> = ({
  config,
  isMintLoading,
  isMintStarted,
  isMinted,
  mint,
  mintData,
  isConnected,
}) => (
  <div>
    {!isConnected ? (
      <CustomButton />
    ) : (
      <button
        disabled={isMintLoading || isMintStarted || !isConnected}
        className="h-full border cursor-pointer p-buttons bg-fourth-green text-primary-dark hover:bg-primary-dark hover:border hover:border-fourth-green hover:text-fourth-green mr-4"
        data-mint-loading={isMintLoading}
        data-mint-started={isMintStarted}
        onClick={() => mint?.()}
      >
        {isMintLoading && "Waiting for approval"}
        {isMintStarted && !isMinted && (
          <div className="flex flex-row">
            <svg
              className="mr-3 h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Processing...</span>
          </div>
        )}
        {!isMintLoading && !isMintStarted && "Free mint"}
        {isMinted && (
          <div className="flex flex-row">
            <Image width={20} height={20} alt="" src={check} />
            <span className="ml-2">Purchased!</span>
          </div>
        )}
      </button>
    )}
  </div>
);

export default MintButton;
