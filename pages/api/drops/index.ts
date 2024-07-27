import { getPublicClient } from '@/lib/viem';
import type { NextApiRequest, NextApiResponse } from 'next';
import { parseAbiItem } from 'viem';
import { zora } from 'viem/chains';

const ZORA_CREATOR_1155_FACTORY_PROXY = "0x777777C338d93e2C7adf08D102d45CA7CC4Ed021"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const publicClient = getPublicClient(zora.id)
    const logs = await publicClient.getLogs({
        address: ZORA_CREATOR_1155_FACTORY_PROXY,
        event: parseAbiItem("event SetupNewContract(address indexed newContract, address indexed creator,address indexed defaultAdmin,string contractURI,string name, ICreatorRoyaltiesControl.RoyaltyConfiguration defaultRoyaltyConfiguration)")
    })  
    console.log(logs)
    res.status(200).json({data: ['0xcoleccion#1', '0xcoleccion#2', '0xcoleccion#3']}); 
}

export default handler
