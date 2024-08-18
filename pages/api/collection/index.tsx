import type { NextApiRequest, NextApiResponse } from "next";
import { Address } from "viem";
import format from "@/lib/format";
import getCollectorClient from "@/lib/zora/getCollectorClient";
import { DEFAULT_COLLECTION } from "@/lib/consts";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const collectionAddress = (req.query?.collectionAddress ||
      DEFAULT_COLLECTION) as Address;
    const collectorClient = getCollectorClient();
    const response = await collectorClient.getTokensOfContract({
      tokenContract: collectionAddress,
    });
    const data = format(response);
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export default handler;
