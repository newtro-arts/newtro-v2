import { useEffect, useState } from "react";
import { useAccount, useSwitchChain, useWriteContract } from "wagmi";
import padAddress from "@/components/utils/padAddress";
import { Address, parseEther } from "viem";
import {
  CHAIN_ID,
  NEWTRO_ARTS_ADDRESS,
  ZORA_TIMED_SALE_STRATEGY_IMPLEMENTATION,
} from "@/lib/consts";
import { zoraTimedSaleStrategyABI } from "@zoralabs/protocol-deployments";
import ERC1155 from "@/components/abis/ERC1155";
import { useRouter } from "next/router";
import getAddressParts from "@/lib/zora/getAddressParts";
import networkToChainId from "@/lib/zora/networkToChainId";

const useZoraMint = (selectedDrop: any) => {
  const { switchChain } = useSwitchChain();
  const router = useRouter();
  const { contractAddress } = router.query;
  const { network } = getAddressParts(contractAddress as string);
  const chainId = networkToChainId(network as string) as number;
  const { writeContract, data: mintData, status } = useWriteContract();
  const { address } = useAccount();
  const [quantity, setQuantity] = useState<number>(1);
  const [minter, setMinter] = useState<string>("");
  const isMintLoading = status === "pending";
  const isMinted = status === "success";

  const mint = async () => {
    try {
      await switchChain({ chainId });
      const isUniswapMinter =
        selectedDrop.minter === ZORA_TIMED_SALE_STRATEGY_IMPLEMENTATION;
      const pricePerToken = isUniswapMinter ? 0.000111 : 0.000777;
      const value = (quantity * pricePerToken).toString();
      const contractAddress = isUniswapMinter
        ? selectedDrop.minter
        : selectedDrop?.address;
      const args = isUniswapMinter
        ? [
            address,
            quantity,
            selectedDrop?.address,
            selectedDrop?.tokenId,
            NEWTRO_ARTS_ADDRESS,
            "",
          ]
        : [
            selectedDrop.minter,
            selectedDrop?.tokenId,
            quantity,
            minter,
            NEWTRO_ARTS_ADDRESS,
          ];
      const writeConfig = {
        address: contractAddress as Address,
        abi: isUniswapMinter ? zoraTimedSaleStrategyABI : ERC1155.abi!,
        functionName: isUniswapMinter ? "mint" : "mintWithRewards",
        args,
        chainId: chainId || CHAIN_ID,
        value: parseEther(value),
      } as any;
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
