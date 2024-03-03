// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    status: boolean;
    statusCode : number;
 data : {
    id: number,
    name: string,
    price: number,
    sixe: string
 }[]
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data = [
    {
        id: 1,
        name: "Baju Baru",
        price: 500000,
        sixe: "xl"
    },
    {
        id: 2,
        name: "Baju Lama",
        price: 100000,
        sixe: "l"
    },
]
  res.status(200).json({ status: true, statusCode: 200, data });
}