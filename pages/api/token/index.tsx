import type { NextApiRequest, NextApiResponse } from "next";
import { Address } from "viem";
import { format } from "../collection/format";
import getToken from "@/lib/zora/getToken";
import { zora } from "viem/chains";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const collectionAddress = req.query?.collectionAddress as Address;
    const tokenId = req.query?.tokenId;
    const chainId = parseInt?.(req.query?.chainId as string) || zora.id;
    if (!(collectionAddress && tokenId))
      return res
        .status(400)
        .json({ error: "missing collectionAddress or tokenId" });
    const response = await getToken(
      chainId,
      collectionAddress,
      tokenId as string
    );
    const data = format(response);
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export default handler;
