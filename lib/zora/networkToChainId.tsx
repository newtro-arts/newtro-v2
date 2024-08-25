import { arbitrum, baseSepolia, zora } from "viem/chains";

const networkToChainId = (network: string): number | undefined => {
  const networkMapping: Record<string, number> = {
    bsep: baseSepolia.id,
    arb: arbitrum.id,
    zora: zora.id,
  };

  return networkMapping[network];
};

export default networkToChainId;
