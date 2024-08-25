import React from "react";
import TokenPage from "@/components/TokenPage";
import { useRouter } from "next/router";
import getAddressParts from "@/lib/zora/getAddressParts";
import { Address } from "viem";
import useToken from "@/hooks/useToken";
import { CHAIN_ID } from "@/lib/consts";
import networkToChainId from "@/lib/zora/networkToChainId";

const Token = () => {
  const router = useRouter();
  const { contractAddress, tokenId } = router.query;
  const { network, address } = getAddressParts(contractAddress as string);
  const chainId = networkToChainId(network as string);
  const { selectedDrop } = useToken(
    chainId as number,
    address as Address,
    parseInt(tokenId as string, 10)
  );
  return (
    <div>
      {selectedDrop && (
        <TokenPage
          selectedDrop={selectedDrop}
          tokenId={contractAddress as string}
          contract={tokenId as string}
        />
      )}
    </div>
  );
};

export default Token;
