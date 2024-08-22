"use client";

import React from "react";
import { Drop } from "../FeaturedMintsHome";
import useGetContractInfo from "../gql/getContractInfo";
import DropContent from "../DropContent";
import AmountSelector from "../AmountSelector";
import MintButton from "../Commons/MintButton";
import TextSplitter from "../TextSplitter";
import useToken from "@/hooks/useToken";
import useZoraMint from "@/hooks/useZoraMint";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useAccount } from "wagmi";
import MintInformation from "../Commons/ZoraInformation";

const MintTemplate = ({ id, name, image, contract, token_id }: Drop) => {
  const { data } = useGetContractInfo({
    collectionAddress: contract,
    tokenId: parseInt(token_id),
  });
  const totalSupply: string =
    data?.zoraCreateTokens[0]?.totalSupply.toString() + " Minted" ??
    "No mints yet";
  const { selectedDrop } = useToken(contract, parseInt(token_id as string, 10));

  const {
    quantity: amount,
    incrementAmount,
    decrementAmount,
    isMinted,
    isMintLoading,
    mint,
    mintData,
  } = useZoraMint(selectedDrop);
  const mounted = useIsMounted() || false;
  const { isConnected } = useAccount();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 my-4 mx-4 lg:mx-8 gap-x-4 gap-y-4 lg:gap-y-0">
      <div className="flex items-center justify-center lg:col-span-2">
        <DropContent
          mime={selectedDrop?.webAssets.originalAsset.mime}
          originalAsset={selectedDrop?.webAssets.originalAsset.originalAsset}
          previewAsset={selectedDrop?.webAssets.previewAsset.previewImage}
        />
      </div>
      <div className="flex flex-col justify-between border border-fourth-green rounded-tl-[15px] rounded-br-[15px] p-4 max-h-fit">
        <div>
          <p className="text-xs">Creator</p>
          <div className="flex justify-between items-baseline">
            <h1 className="font-semibold text-xl uppercase pragmatica-text my-2 overflow-wrap break-words whitespace-normal">
              {selectedDrop?.name}
            </h1>
            <p className="hidden lg:block text-xs">{totalSupply}</p>
          </div>
          <TextSplitter description={selectedDrop?.description} />
          <div className="flex pt-2 items-center">
            {selectedDrop?.name && (
              <MintButton
                isMintLoading={isMintLoading}
                isMintStarted={isMinted}
                isMinted={isMinted}
                mint={mint}
                isConnected={isConnected}
              />
            )}

            <AmountSelector
              amount={amount}
              incrementAmount={incrementAmount}
              decrementAmount={decrementAmount}
            />
          </div>
          <MintInformation
            mounted={mounted}
            isConnected={isConnected}
            isMinted={isMinted}
            mintData={{ hash: mintData }}
          />
        </div>
        </div>
      </div>
  );
};

export default MintTemplate;
