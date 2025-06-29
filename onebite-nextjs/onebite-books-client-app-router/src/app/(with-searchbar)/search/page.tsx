import { Suspense } from "react";
import BookItem from "@/components/book-item";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import type { BookData } from "@/types";
import { delay } from "@/util/delay";

async function SearchBooks({ query }: { query: string }) {
	await delay(1500);
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

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const { query } = await searchParams;

	return (
		// key prop 이 변경될 때 마다 로딩 상태 초기화
		<Suspense key={query} fallback={<BookListSkeleton count={3} />}>
			<SearchBooks query={query || ""} />
		</Suspense>
	);
}
