import getSetupNewContractLogs from "@/lib/zora/getSetupNewContractLogs";
import type { NextApiRequest, NextApiResponse } from "next";
import { formatLogs } from "./formatLogs";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const logs = await getSetupNewContractLogs();
    const formattedLogs = formatLogs(logs);
    res.status(200).json({ data: formattedLogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export default handler;
