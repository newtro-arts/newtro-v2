import type { NextApiRequest, NextApiResponse } from "next";
import { Address } from "viem";
import { format } from "./format";
import getCollectorClient from "@/lib/zora/getCollectorClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const collectionAddress = req.query?.collectionAddress as Address;
    const tokenId = req.query?.tokenId;
    if (!(collectionAddress && tokenId))
      return res
        .status(500)
        .json({ error: "missing collectionAddress or tokenId" });
    console.log(collectionAddress);
    console.log(tokenId);
    const collectorClient = getCollectorClient();
    const response = await collectorClient.getToken({
      tokenContract: collectionAddress,
      mintType: "1155",
      tokenId,
    });
    const data = format(response);
    console.log("RESPONSE");
    console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export default handler;
