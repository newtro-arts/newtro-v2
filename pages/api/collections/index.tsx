import type { NextApiRequest, NextApiResponse } from "next";
import getPoints from "@/lib/stack/getPoints";
import { bulkTrack } from "@/lib/stack/bulkTrack";
import getNewContracts from "@/lib/zora/getNewContracts";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const points = await getPoints();
    const latestIndexedBlock =
      BigInt(points[0].metadata.blockNumber) + BigInt(1);
    const newPoints = await getNewContracts(latestIndexedBlock);
    await bulkTrack(newPoints);
    res.status(200).json({ data: [...points, ...newPoints] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export default handler;
