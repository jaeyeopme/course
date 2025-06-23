import { Head, Html, Main, NextScript } from "next/document";

// React 의 index.html 파일과 동일한 역할
export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
