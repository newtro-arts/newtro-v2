import { PublicClient, createPublicClient, http } from "viem";
import getViemNetwork from "./getViemNetwork";

export const getPublicClient = (chainId: number) => {
  const chain = getViemNetwork(chainId);
  let publicClient = createPublicClient({
    chain,
    transport: http(),
  }) as any;
  return publicClient as PublicClient;
};
