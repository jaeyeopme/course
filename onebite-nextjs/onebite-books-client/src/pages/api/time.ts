import type { NextApiResponse } from "next";

type Data = {
	time: string;
};

export default function handler(res: NextApiResponse<Data>) {
	const date = new Date();
	return res.status(200).json({ time: date.toLocaleString() });
}
