import { Address } from "viem";

const getTokenLink = (contractAddress: Address, tokenId: string) =>
  `/collect/zora:${contractAddress}/${tokenId}`;

export default getTokenLink;
