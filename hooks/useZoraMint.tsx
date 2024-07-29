import { useEffect, useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import padAddress from "@/components/utils/padAddress";
import { parseEther } from "viem";
import { CHAIN_ID, NEWTRO_ARTS_ADDRESS } from "@/lib/consts";
import { zoraCreatorFixedPriceSaleStrategyAddress } from "@zoralabs/protocol-deployments";
import ERC1155 from "@/components/abis/ERC1155";

const useZoraMint = (selectedDrop: any) => {
  const { writeContract, data: mintData, status } = useWriteContract();
  const { address } = useAccount();
  const [quantity, setQuantity] = useState<number>(1);
  const [minter, setMinter] = useState<string>("");
  const value = (quantity * 0.000777).toString();
  const isMintLoading = status === "pending";
  const isMinted = status === "success";

  const mint = async () => {
    try {
      const writeConfig = {
        address: selectedDrop?.address as `0x${string}`,
        abi: ERC1155.abi!,
        functionName: "mintWithRewards",
        args: [
          zoraCreatorFixedPriceSaleStrategyAddress[CHAIN_ID],
          selectedDrop?.tokenId,
          quantity,
          minter,
          NEWTRO_ARTS_ADDRESS,
        ],
        chainId: CHAIN_ID,
        value: parseEther(value),
      };
      await writeContract(writeConfig);
    } catch (err) {
      console.error(err);
    }
  };

  function incrementAmount() {
    if (quantity === 10) return;
    setQuantity(quantity + 1);
  }

  function decrementAmount() {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  }

  useEffect(() => {
    if (address) {
      let a = padAddress(address as `0x${string}`);
      setMinter(a);
    }
  }, [address]);

  return {
    decrementAmount,
    incrementAmount,
    isMintLoading,
    isMinted,
    mint,
    mintData,
    quantity,
  };
};

export default useZoraMint;
