import React from "react";
import TokenPage from "@/components/TokenPage";
import { useRouter } from "next/router";
import getAddressParts from "@/lib/zora/getAddressParts";
import { Address } from "viem";
import useToken from "@/hooks/useToken";

const Token = () => {
  const router = useRouter();
  const { contractAddress, tokenId } = router.query;
  const { address } = getAddressParts(contractAddress as string);
  const { selectedDrop } = useToken(
    address as Address,
    parseInt(tokenId as string, 10),
  );
  return <div>{selectedDrop && <TokenPage selectedDrop={selectedDrop} />}</div>;
};

export default Token;
