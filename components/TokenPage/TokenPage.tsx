import React from "react";
import Header from "../../components/Header";
import TextSplitter from "../../components/TextSplitter";
import MintButton from "../../components/MintButton";
import AmountSelector from "../../components/AmountSelector";
import { useIsMounted } from "../../hooks/useIsMounted";
import { useAccount } from "wagmi";
import Head from "next/head";
import DetailContent from "../../components/DetailContent";
import MintInformation from "../../components/ZoraInformation";
import useZoraMint from "@/hooks/useZoraMint";

const TokenPage: React.FC = ({ selectedDrop }: any) => {
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
      <div className="flex flex-col-reverse md:flex-row bg-primary-dark text-fourth-green pt-20 p-8 justify-between">
        <Head>
          <title>{selectedDrop?.name}</title>
        </Head>
        <Header />

        <div className="flex w-full md:w-[50%]">
          <div className="flex flex-col mr-4">
            <h1 className="font-semibold text-xl md:text-3xl uppercase pragmatica-text my-4">
              {selectedDrop?.name}
            </h1>

            <TextSplitter description={selectedDrop?.description} />
            <div className="flex pt-2">
              <MintButton
                isMintLoading={isMintLoading}
                isMintStarted={isMinted}
                isMinted={isMinted}
                mint={mint}
                isConnected={isConnected}
              />

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

        <DetailContent
          mime={selectedDrop?.webAssets.originalAsset.mime}
          originalAsset={selectedDrop?.webAssets.originalAsset.originalAsset}
          previewAsset={selectedDrop?.webAssets.previewAsset.previewImage}
        />
      </div>
    </>
  );
};

export default TokenPage;
