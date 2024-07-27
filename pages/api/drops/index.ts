import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(['0xcoleccion#1', '0xcoleccion#2', '0xcoleccion#3']); 
}
