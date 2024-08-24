"use client";

import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import TextSplitter from "../../components/TextSplitter";
import MintButton from "../../components/Commons/MintButton";
import AmountSelector from "../../components/AmountSelector";
import { useIsMounted } from "../../hooks/useIsMounted";
import { useAccount } from "wagmi";
import Head from "next/head";
import DropContent from "@/components/DropContent";
import MintInformation from "../Commons/ZoraInformation";
import useZoraMint from "@/hooks/useZoraMint";
import useGetContractInfo from "../gql/getContractInfo";
import { RxShare2 } from "react-icons/rx";
import { AnimatePresence } from "framer-motion";
import ShareModal from "../GalleryPage/ShareModal";


interface TokenPageProps {
  selectedDrop: any;
  tokenId?: string;
  contract?: string;
}
const TokenPage = ({ selectedDrop, tokenId, contract}: TokenPageProps) => {
  const { data } = useGetContractInfo({
    collectionAddress: contract,
    tokenId: parseInt(tokenId!!),
  });

  const totalSupply: string =
  data?.zoraCreateTokens[0]?.totalSupply.toString() + " Minted" ??
  "No mints yet";

    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);



  const {
    quantity: amount,
    incrementAmount,
    decrementAmount,
    isMinted,
    isMintLoading,
    mint,
    mintData,
  } = useZoraMint(selectedDrop);
  const mounted = useIsMounted();
  const { isConnected } = useAccount();

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-4 lg:gap-y-0 min-h-screen h-full my-4 mx-4 lg:mx-8 pt-20 text-fourth-green">
        <Head>
          <title>{selectedDrop?.name}</title>
        </Head>
        <Header />

      <div className="lg:col-span-2 h-full overflow-hidden">
        <div className="sticky top-0 min-h-screen">
          <DropContent
            mime={selectedDrop?.webAssets.originalAsset.mime}
            originalAsset={selectedDrop?.webAssets.originalAsset.originalAsset}
            previewAsset={selectedDrop?.webAssets.previewAsset.previewImage}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between border border-fourth-green rounded-tl-[15px] rounded-br-[15px] p-4 max-h-screen sticky top-0">
        <div className="overflow-y-auto max-h-full">
          <p className="text-xs">Creator</p>
          <div className="flex justify-between items-baseline">
            <h1 className="font-semibold text-xl uppercase pragmatica-text my-2 overflow-wrap break-words whitespace-normal">
              {selectedDrop?.name}
            </h1>
          </div>
          <TextSplitter description={selectedDrop?.description} />
          <div className="flex justify-between items-end">
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
            <RxShare2
              size={33}
              onClick={openModal}
              className="cursor-pointer"
            />
            <AnimatePresence>
              {isModalOpen && <ShareModal onClose={closeModal} link={`${contract}/${tokenId!!}`} />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TokenPage;
