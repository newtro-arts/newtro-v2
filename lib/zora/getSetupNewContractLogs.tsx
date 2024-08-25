import {
  CHAIN_ID,
  EVENT_SETUP_NEW_CONTRACT,
  NEWTRO_ARTS_ADDRESS,
  NEWTRO_FIRST_ZORA_BLOCK,
} from "../consts";
import {
  zoraCreator1155FactoryImplAddress,
  zoraCreator1155FactoryImplABI,
} from "@zoralabs/protocol-deployments";
import { getPublicClient } from "../viem";

const getSetupNewContractLogs = async (
  fromBlock: bigint = NEWTRO_FIRST_ZORA_BLOCK,
) => {
  const publicClient = getPublicClient(CHAIN_ID);
  const contractEvents = await publicClient.getContractEvents({
    address: zoraCreator1155FactoryImplAddress[CHAIN_ID],
    abi: zoraCreator1155FactoryImplABI,
    eventName: EVENT_SETUP_NEW_CONTRACT,
    args: {
      creator: NEWTRO_ARTS_ADDRESS,
    },
    fromBlock,
  });
  return contractEvents;
};

export default getSetupNewContractLogs;
