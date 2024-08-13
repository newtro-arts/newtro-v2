import {
  CHAIN_ID,
  EVENT_SETUP_NEW_CONTRACT,
  NEWTRO_ARTS_ADDRESS,
} from "@/lib/consts";

const setupContractLogsToStack = (logs: any[]) => {
  const trackingEvents = logs.map((log: any) => [
    {
      name: EVENT_SETUP_NEW_CONTRACT,
      account: NEWTRO_ARTS_ADDRESS,
      pointSystemId: process.env.STACK_POINT_ID,
      points: 1,
      metadata: { ...log.args, blockNumber: log.blockNumber },
      uniqueId: `${CHAIN_ID}-${log.args.newContract}`,
    },
  ]);

  const flatTrackingEvents = trackingEvents.flat();
  flatTrackingEvents.sort((a, b) => {
    if (a.metadata.blockNumber > b.metadata.blockNumber) return -1;
    if (a.metadata.blockNumber < b.metadata.blockNumber) return 1;
    return 0;
  });
  return flatTrackingEvents;
};

export default setupContractLogsToStack;
