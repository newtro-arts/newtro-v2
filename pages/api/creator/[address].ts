import fetchProfile from "@/lib/zora/fetchProfile";
import verifySameDomain from "@/middleware/verifySameDomain";
import type { NextApiRequest, NextApiResponse } from "next";
import { Address } from "viem";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  verifySameDomain(req, res, async () => {
    try {
      const address = req.query.address as Address;

      const creator = await fetchProfile(address);
      res.status(200).json({ creator });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch data from Zora API" });
    }
  });
};

export default handler;
