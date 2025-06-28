import { type ReactNode, Suspense } from "react";
import Searchbar from "@/components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Suspense fallback={<div>로딩 중...</div>}>
				<Searchbar />
			</Suspense>
			{children}
		</>
	);
}
