import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	logging: {
		fetches: {
			fullUrl: true, // 모든 fetch 요청의 전체 URL을 로깅
		},
	},
};

export default nextConfig;
