export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<h1>Search Layout</h1>
			<div>{children}</div>
		</>
	);
}
