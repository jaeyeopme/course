import type { NextApiRequest, NextApiResponse } from "next";

// 반드시 request 와 response 를 인자로 받아야 함(하나라도 빠지면 인식을 못함)
export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse,
) {
	try {
		// 재생성 할 페이지의 경로를 인자로 지정
		await response.revalidate("/");
		return response.json({ revalidate: true });
	} catch {
		response.status(500).send("Revalidation Failed");
	}
}
