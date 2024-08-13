import getStackClient from "./getStackClient";
import { NEWTRO_ARTS_ADDRESS } from "../consts";

const getEvents = async () => {
  const stackClient = getStackClient();
  const events = await stackClient.getEvents({
    address: NEWTRO_ARTS_ADDRESS,
  });

  const sortedEvents = events.sort((a: any, b: any) => {
    return parseInt(b.metadata.blockNumber) - parseInt(a.metadata.blockNumber);
  });

  return sortedEvents;
};

export default getEvents;
