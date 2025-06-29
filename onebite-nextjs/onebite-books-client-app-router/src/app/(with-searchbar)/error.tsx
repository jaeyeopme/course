"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

// biome-ignore lint/suspicious/noShadowRestrictedNames: next js error page
export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	const router = useRouter();

	useEffect(() => {
		console.error(error);
	}, [error]);

	const handleRetry = () => {
		startTransition(() => {
			router.refresh();
			reset();
		});
	};

	return (
		<>
			<h3>오류가 발생했습니다</h3>
			<button type="button" onClick={handleRetry}>
				다시 시도
			</button>
		</>
	);
}
