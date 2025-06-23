import "@/styles/globals.css";
import type { AppProps } from "next/app";

// React 에서 App 컴포넌트와 동일한 역할
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
