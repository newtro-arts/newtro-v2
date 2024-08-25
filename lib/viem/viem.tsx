import { PublicClient, createPublicClient, http } from "viem";
import getViemNetwork from "./getViemNetwork";
import { arbitrum, zora } from "viem/chains";

export const getPublicClient = (chainId: number) => {
  const chain = getViemNetwork(chainId);
  const isZora = chainId === zora.id;
  const isArbitrum = chainId === arbitrum.id;
  let RPC = isZora ? "https://rpc.zora.energy" : undefined;
  if (isArbitrum) RPC = "https://arbitrum.llamarpc.com";
  let publicClient = createPublicClient({
    chain,
    transport: http(RPC),
  }) as any;
  return publicClient as PublicClient;
};
