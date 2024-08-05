import { Address } from "viem";
import getCollectorClient from "./getCollectorClient";

const getToken = async (tokenContract: Address, tokenId: string) => {
  const collectorClient = getCollectorClient();
  const response = await collectorClient.getToken({
    tokenContract,
    mintType: "1155",
    tokenId,
  });
  return response;
};

export default getToken;
