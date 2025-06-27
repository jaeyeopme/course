export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<h2>Search Setting Layout</h2>
			<div>{children}</div>
		</>
	);
}
