import { Address } from "viem";

export interface Token {
  id: number;
  contract: { address: Address };
  tokenURI: string;
  tokenId: string;
  totalMinted: string;
}