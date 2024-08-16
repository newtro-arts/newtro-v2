import arrayPagination from '@/lib/arrayPagination';
import getCollectorClient from '@/lib/zora/getCollectorClient';
import getSetupNewContractLogs from '@/lib/zora/getSetupNewContractLogs';
import type { NextApiRequest, NextApiResponse } from 'next';
import formatCollectionTokens from './formatCollectionTokens';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const logs = await getSetupNewContractLogs();
    const collections = logs.map(({ args }) => args.newContract).filter(addr => !!addr);

    const collectorClient = getCollectorClient();
    const collectionTokens = await Promise.all(
      collections.map(addr => collectorClient.getTokensOfContract({ tokenContract: addr }))
    );

    const allTokens = formatCollectionTokens(collectionTokens);
    const count = allTokens.length;

    const { limit, offset } = arrayPagination(req.query);
    const tokens = allTokens.splice(offset, limit);

    res.status(200).json({ count, tokens });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}

export default handler;