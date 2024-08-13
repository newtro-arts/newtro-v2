import getStackClient from "./getStackClient";
import { NEWTRO_ARTS_ADDRESS } from "../consts";

const getEvents = async () => {
  const stackClient = getStackClient();
  const events = await stackClient.getEvents({
    address: NEWTRO_ARTS_ADDRESS,
  });

  return events;
};

export default getEvents;
