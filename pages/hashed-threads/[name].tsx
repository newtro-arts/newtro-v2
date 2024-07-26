import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import TextSplitter from "../../components/TextSplitter";
import MintButton from "../../components/MintButton";
import AmountSelector from "../../components/AmountSelector";
import ZoraInformation from "../../components/ZoraInformation";
import { useIsMounted } from "../../components/hooks/useIsMounted";
import { useAccount, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";
import useGetContractInfo from "../../components/gql/getContractInfo";
import padAddress from "../../components/utils/padAddress";
import { parseEther } from "viem";
import ERC1155 from "../../components/abis/ERC1155";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Head from "next/head";
import { drop2HashedThreads } from "../../drop2-hashed-threads";
import DetailContent from "../../components/DetailContent";
import MintInformation from "../../components/ZoraInformation";

interface ZoraCreateToken {
  address: string;
  tokenId: number;
  totalSupply: number;
  totalMinted: number;
  maxSupply: number;
  metadata: {
    image: string;
    animationUrl: string;
  };
  salesStrategies: {
    fixedPrice: {
      maxTokensPerAddress: number;
      saleStart: number;
      saleEnd: number;
      pricePerToken: number;
      configAddress: string;
      fundsRecipient: string;
      txn: {
        timestamp: number;
      };
    };
  }[];
}

interface GraphQLResponse {
  zoraCreateTokens: ZoraCreateToken[];
}

const ItemDetailPage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const selectedDrop = drop2HashedThreads.find((a) => a.name === name);

  const [amount, setAmount] = useState<number>(1);
  const [minter, setMinter] = useState<string>("");

  const mounted = useIsMounted();
  const { isConnected, address } = useAccount();

  const value = (amount * 0.000777).toString();

  const { loading, error, data } = useGetContractInfo({
    collectionAddress: selectedDrop?.address,
    tokenId: parseInt(selectedDrop?.tokenId as string, 10),
  }) as { loading: boolean; error?: Error; data?: GraphQLResponse };

  useEffect(() => {
    if (address) {
      let a = padAddress(address as `0x${string}`);
      setMinter(a);
    }
  }, [address]);

  const { config } = usePrepareContractWrite({
    address: selectedDrop?.address as `0x${string}`,
    abi: ERC1155.abi!,
    functionName: "mintWithRewards",
    args: [
      "0x04e2516a2c207e84a1839755675dfd8ef6302f0a",
      selectedDrop?.tokenId,
      amount,
      minter,
      "0x33912a0d6bEFf5Fb8e5B70688CE858D5e7E8104E",
    ],
    chainId: 7777777,
    value: parseEther(value),
  });

  const {
    write: mint,
    data: mintData,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
  } = useContractWrite(config);

  const { isSuccess: txSuccess } = useWaitForTransaction({
    hash: mintData?.hash,
  });

  const isMinted = txSuccess;

  function incrementAmount() {
    if (amount === 10) return;
    setAmount(amount + 1);
  }

  function decrementAmount() {
    if (amount === 1) return;
    setAmount(amount - 1);
  }

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

            {/* Mint UI */}
            <div className="flex pt-2">
              <MintButton
                isMintLoading={isMintLoading}
                isMintStarted={isMintStarted}
                isMinted={isMinted}
                mint={mint}
                mintData={mintData}
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
              mintData={mintData}
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

export default ItemDetailPage;
