import { formatLogs } from "@/pages/api/collections/formatLogs";
import formatSetupNewContractEventsPoints from "../formatSetupNewContractEventsPoints";
import getSetupNewContractLogs from "./getSetupNewContractLogs";

const getNewContracts = async (fromBlock: bigint) => {
  const logs = await getSetupNewContractLogs(fromBlock);
  const formattedLogs = formatLogs(logs);
  const newPoints = formatSetupNewContractEventsPoints(formattedLogs);
  return newPoints;
};

export default getNewContracts;
