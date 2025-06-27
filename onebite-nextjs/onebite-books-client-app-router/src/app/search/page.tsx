export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ query: string }>;
}) {
	const { query } = await searchParams;

	return (
		<>
			<div>Search Page</div>
			<div>Query is '{query}'</div>
		</>
	);
}
