import getSetupNewContractLogs from '@/lib/zora/getSetupNewContractLogs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { formatLogs } from './formatLogs';
import getEvents from '@/lib/stack/getEvents';
import { bulkTrack } from '@/lib/stack/bulkTrack';
import setupContractLogsToStack from '@/lib/setupContractLogsToStack';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // 1. get points
        const points = await getEvents()
        console.log("SWEETS points", points)
        // 2. get events
        const latestIndexedBlock = BigInt(points[0].metadata.blockNumber) + BigInt(1)
        console.log("SWEETS latestIndexedBlock", latestIndexedBlock)

        const logs = await getSetupNewContractLogs(latestIndexedBlock)
        console.log("SWEETS logs", logs)

        const formattedLogs = formatLogs(logs);

        // 3. format logs to points 
        const pointsLogs = setupContractLogsToStack(formattedLogs)
        // 4. save new points from logs
        await bulkTrack(pointsLogs)
        // 5. return all logs
        res.status(200).json({data: [...points,...pointsLogs ], });     
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
    }
}

export default handler
