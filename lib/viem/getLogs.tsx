import { GetLogsParameters } from 'viem';
import { CHAIN_ID } from '../consts';
import { getPublicClient } from './viem';

const getLogs = async ({ address, event, fromBlock, toBlock, args }: any) => {
  const publicClient = getPublicClient(CHAIN_ID);
  const options = {
    event,
  } as GetLogsParameters;
  if (args) options.args = args;
  if (address) options.address = address;
  if (fromBlock) options.fromBlock = fromBlock;
  if (toBlock) options.toBlock = toBlock;
  return await publicClient.getLogs(options);
};

export default getLogs;
