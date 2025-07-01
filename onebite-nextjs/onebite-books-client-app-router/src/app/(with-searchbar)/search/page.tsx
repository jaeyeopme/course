import { Suspense } from "react";
import BookItem from "@/components/book-item";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import type { BookData } from "@/types";

async function SearchBooks({ query }: { query: string }) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${query}`,
		{ cache: "force-cache" },
	);

	if (!response.ok) {
		return <div>에러가 발생했습니다</div>;
	}

	const books: BookData[] = await response.json();

	return (
		<div>
			{books.map((book) => (
				<BookItem key={book.id} {...book} />
			))}
		</div>
	);
}

export async function generateMetadata({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const { query } = await searchParams;

	return {
		title: query,
		description: `"${query}"에 대한 검색 결과입니다`,
		images: ["/thumbnail.png"],
	};
}

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const { query } = await searchParams;

	return (
		<Suspense key={query} fallback={<BookListSkeleton count={3} />}>
			<SearchBooks query={query || ""} />
		</Suspense>
	);
}
