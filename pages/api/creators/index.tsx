import type { NextApiRequest, NextApiResponse } from "next";
import { ZORA_PROFILE_API } from "@/lib/consts";
import { Address } from "viem";
import verifySameDomain from "@/middleware/verifySameDomain";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  verifySameDomain(req, res, async () => {
    try {
      const NEWTRO_CREATORS = JSON.parse(process.env.NEWTRO_CREATORS || "[]");
      const fetchPromises = NEWTRO_CREATORS.map((address: Address) =>
        fetch(`${ZORA_PROFILE_API}${address}`).then((response) =>
          response.json()
        )
      );
      const results = await Promise.all(fetchPromises);
      res.status(200).json({ data: results });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch data from Zora API" });
    }
  });
};

export default handler;
