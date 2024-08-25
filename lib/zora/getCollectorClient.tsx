import { createCollectorClient } from "@zoralabs/protocol-sdk";
import { CHAIN_ID } from "../consts";
import { getPublicClient } from "../viem";

const getCollectorClient = (chainId: number = CHAIN_ID) => {
  const publicClient = getPublicClient(chainId);
  const collectorClient = createCollectorClient({
    chainId,
    publicClient,
  });
  return collectorClient;
};

export default getCollectorClient;
