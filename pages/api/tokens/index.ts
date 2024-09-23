import getCollectorClient from "@/lib/zora/getCollectorClient";
import getSetupNewContractLogs from "@/lib/zora/getSetupNewContractLogs";
import type { NextApiRequest, NextApiResponse } from "next";
import formatCollectionTokens from "./formatCollectionTokens";
import { CHAIN_ID } from "@/lib/consts";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { creatorAddress } = req.query;

    const logs = await getSetupNewContractLogs();
    const collections = logs
      .map(({ args }) => args.newContract)
      .filter((addr) => !!addr);

    const collectorClient = getCollectorClient(CHAIN_ID);
    const collectionTokens = await Promise.all(
      collections.map((addr) =>
        collectorClient.getTokensOfContract({ tokenContract: addr }),
      ),
    );

    const allTokens = formatCollectionTokens(collectionTokens);
    const tokens = creatorAddress ?
      allTokens.filter(token => token.creator == creatorAddress) :
      allTokens
    const count = tokens.length;

    res.status(200).json({ count, tokens });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export default handler;
