import { CHAIN_ID } from "../consts";
import { getPublicClient } from "./viem";

const getLatestBlock = async () => {
  const publicClient = getPublicClient(CHAIN_ID);
  const { number: latestBlock } = await publicClient.getBlock({
    blockTag: "latest",
  });
  return latestBlock;
};

export default getLatestBlock;
