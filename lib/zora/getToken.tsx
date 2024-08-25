import { Address } from "viem";
import getCollectorClient from "./getCollectorClient";

const getToken = async (
  chainId: number,
  tokenContract: Address,
  tokenId: string
) => {
  const collectorClient = getCollectorClient(chainId);
  const response = await collectorClient.getToken({
    tokenContract,
    mintType: "1155",
    tokenId,
  });
  return response;
};

export default getToken;
