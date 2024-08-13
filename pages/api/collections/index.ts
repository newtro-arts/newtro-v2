import getSetupNewContractLogs from '@/lib/zora/getSetupNewContractLogs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { formatLogs } from './formatLogs';
import getEvents from '@/lib/stack/getEvents';
import { bulkTrack } from '@/lib/stack/bulkTrack';
import setupContractLogsToStack from '@/lib/setupContractLogsToStack';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const logs = await getSetupNewContractLogs()
        // 1. get points
        // 2. get events
        const events = await getEvents()
        const formattedLogs = formatLogs(logs);
        // 3. format logs to points 
        // 4. save new points from logs
        console.log("SWEETS formattedLogs", formattedLogs)
        const pointsLogs = setupContractLogsToStack(formattedLogs)
        console.log("SWEETS POINTS LOGS", pointsLogs)
        await bulkTrack(pointsLogs)
        // 5. return all logs
        res.status(200).json({data: formattedLogs, pointsLogs});     
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
    }
}

export default handler
