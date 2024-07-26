import React from "react";
import Image from "next/image";
import { parseEther } from "viem";
import { useState, useEffect } from "react";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useIsMounted } from "../components/hooks/useIsMounted";
import check from "../public/check.svg";
import padAddress from "./utils/padAddress";
import TextSplitter from "./TextSplitter";
import ERC1155 from "../components/abis/ERC1155";
import CustomButton from "./CustomButton";
import { connected } from "process";
import useGetContractInfo from "./gql/getContractInfo";

interface Drop {
  image: string;
  type: string;
  title: string;
  artist: string;
  description: string;
  index: number;
  contract: string;
  token_id: number;
  isERC721: boolean;
  minterAddress: string;
  saleHasEnded: boolean;
  saleHasStarted: boolean;
}

export default function Drop({
  image,
  type,
  title,
  artist,
  description,
  index,
  contract,
  token_id,
  isERC721,
  minterAddress,
  saleHasEnded,
  saleHasStarted,
}: Drop) {
  const [amount, setAmount] = useState(1);
  const [minter, setMinter] = useState("");

  const [args, setArgs] = useState<(string | number)[]>([]);

  const [showModal, setShowModal] = useState(false);

  const mounted = useIsMounted();
  const { isConnected, address } = useAccount();

  const side = isOddOrEven(index);

  const value = (amount * 0.000777).toString();

  // GRAPHQL CALL TO BRING: SALE STATUS, MINTED AMOUNT.
  const { loading, error, data } = useGetContractInfo({
    collectionAddress: contract,
    tokenId: token_id,
  });

  const zoraTokenData = data?.zoraCreateTokens;

  useEffect(() => {
    if (address) {
      let a = padAddress(address as `0x${string}`);
      setMinter(a);
    }
  }, [address]);

  const { config } = usePrepareContractWrite({
    address: contract as `0x${string}`,
    abi: ERC1155.abi!,
    functionName: "mintWithRewards",
    args: [
      minterAddress as `0x${string}`,
      token_id,
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
    if (amount == 10) {
      return amount;
    } else {
      return setAmount(amount + 1);
    }
  }

  function decrementAmount() {
    if (amount == 1) {
      return amount;
    } else {
      return setAmount(amount - 1);
    }
  }

  function isOddOrEven(num: number) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div
      className={`flex flex-col text-left justify-center items-start w-full scroll-smooth md:px-12 md:mb-20 px-10 mt-10
         ${side ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* IMAGE PREVIEW */}

      <div className="w-full max-w-[400px] md:mr-14 aspect-w-16 aspect-h-9 md:aspect-h-4 drop-shadow-lg relative group">
        {type === "video/mp4" ? (
          <div className="w-full">
            <video
              autoPlay
              muted
              loop
              style={{ width: "500px", height: "500px" }}
            >
              <source type={type} src={image} />
            </video>
          </div>
        ) : (
          <Image
            className="drop-shadow-lg transition-opacity opacity-0 duration-[2s] mb-2 md:mb-0"
            src={image}
            width={400}
            height={400}
            alt="Preview"
            loading="lazy"
            quality={50}
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />
        )}

        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="absolute top-0 right-0 bg-black w-full h-full text-white opacity-0 transition-opacity"
        ></button>
      </div>

      {/* MODAL */}
      {showModal && (
        <div
          className="fixed z-40 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowModal(false)}
        >
          {type === "video/mp4" ? (
            <div>
              <video
                autoPlay
                muted
                loop
                style={{ width: "500px", height: "500px" }}
              >
                <source type={type} src={image} />
              </video>
            </div>
          ) : (
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Image
                src={image}
                width={500}
                height={500}
                alt="Description"
                className="max-w-lg max-h-lg drop-shadow-lg transition-opacity opacity-0 duration-[2s]"
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
              />
            </div>
          )}
        </div>
      )}

      {/* MINT UI */}
      <div className="flex flex-col max-w-[600px] w-full">
        <h2 className="leading-10 uppercase">{title}</h2>
        <p className="text-gray-400 text-2xl pb-5">{artist}</p>
        <TextSplitter description={description} />
        {saleHasStarted ? (
          <>
            {saleHasEnded ? (
              <div className="border-2 border-black flex flex-auto justify-center mr-2 my-2">
                <p className="my-2 mx-2">Sale has ended.</p>
              </div>
            ) : (
              <>
                <div className="flex justify- pt-2 ">
                  <div className="flex flex-row">
                    <div className="border-2 border-black">
                      <button
                        onClick={incrementAmount}
                        className=" w-10 h-10 bg-white text-black text-3xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <input
                        className="w-10 h-full text-center text-xl focus:outline-none bg-white border-y-2 border-black"
                        placeholder={amount.toString()}
                      />
                    </div>
                    <div className="border-2 border-black">
                      <button
                        onClick={decrementAmount}
                        className="w-10 h-10 bg-white text-3xl text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="mx-4">
                    {mounted && address && (
                      <button
                        disabled={
                          isMintLoading || isMintStarted || !isConnected
                        }
                        className="h-full bg-black text-white px-4  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
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
                            <span>PROCESSING</span>
                          </div>
                        )}
                        {!isMintLoading && !isMintStarted && "FREE MINT"}
                        {isMinted && (
                          <div className="flex flex-row">
                            <Image width={20} height={20} alt="" src={check} />
                            <span className="ml-2">PURCHASED</span>
                          </div>
                        )}
                      </button>
                    )}

                    {mounted && !isConnected && <CustomButton />}
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <div className=" flex flex-auto justify-center mr-4 my-2">
            <p className="border border-black my-2 mx-2 py-2 px-4">
              Sale has not started yet
            </p>
          </div>
        )}

        {/* INFORMATIONAL MESSAGES */}
        {mounted && !isConnected ? (
          <p className="text-[14px] pt-2 font-light">
            Connect your wallet to mint.
          </p>
        ) : null}

        {/* BRIDGE MESSAGE */}
        <p className="text-[14px] pt-2 font-light">
          We're minting on Zora Network.
          <a
            href="https://bridge.zora.energy/"
            className="text-gray-600 underline underline-offset-1"
          >
            {" "}
            Bridge Here
          </a>
        </p>

        {/* SEE TRANSACTION */}
        {mounted && isMinted ? (
          <p className="text-[14px] pt-2 font-light">
            Your transaction has been submited check on
            <a
              href={`https://explorer.zora.energy/tx/${mintData?.hash}`}
              className="text-blue-600 underline underline-offset-1"
            >
              {" "}
              Zora Explorer.
            </a>
          </p>
        ) : null}
      </div>
    </div>
  );
}
