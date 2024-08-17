import type { NextApiRequest, NextApiResponse } from "next";
import verifySameDomain from "@/middleware/verifySameDomain";
import bulkFetchProfile from "@/lib/zora/bulkFetchProfile";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  verifySameDomain(req, res, async () => {
    try {
      const creators = await bulkFetchProfile();
      res.status(200).json({ data: creators });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch data from Zora API" });
    }
  });
};

export default handler;
