import React, { useState, useEffect } from "react";
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
import { RxShare2 } from "react-icons/rx";
import ShareModal from "./ShareModal";
import { AnimatePresence } from "framer-motion";
import { CHAIN_ID } from "@/lib/consts";

const MintTemplate = ({ contract, token_id }: Drop) => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { data } = useGetContractInfo({
    collectionAddress: contract,
    tokenId: parseInt(token_id),
  });

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  const totalSupply: string =
    data?.zoraCreateTokens?.[0]?.totalSupply
      ? data.zoraCreateTokens[0].totalSupply.toString() + " Minted"
      : "No mints yet";
  const { selectedDrop } = useToken(
    CHAIN_ID,
    contract,
    parseInt(token_id as string, 10)
  );

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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-4 lg:gap-y-0 max-h-screen h-full my-4 mx-4 lg:mx-8">
      <div className="lg:col-span-2 h-full overflow-hidden">
        <div className="sticky top-0 max-h-screen">
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
            <p className="hidden lg:block text-xs">{totalSupply}</p>
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
              {isModalOpen && (
                <ShareModal
                  onClose={closeModal}
                  link={`${contract}/${token_id}`}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintTemplate;
