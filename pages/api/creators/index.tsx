import type { NextApiRequest, NextApiResponse } from "next";
import { NEWTRO_CREATORS } from "./creators";
import { ZORA_PROFILE_API } from "@/lib/consts";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const fetchPromises = NEWTRO_CREATORS.map((address) =>
      fetch(`${ZORA_PROFILE_API}${address}`).then((response) => response.json())
    );
    const results = await Promise.all(fetchPromises);
    res.status(200).json({ data: results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data from Zora API" });
  }
};

export default handler;
