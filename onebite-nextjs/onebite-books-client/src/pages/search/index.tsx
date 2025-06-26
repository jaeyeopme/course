import { useRouter } from "next/router";
import { type ReactNode, useEffect, useState } from "react";
import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import fetchBooks from "@/lib/fetch-books";
import type { BookData } from "@/types";

export default function Page() {
	const [books, setBooks] = useState<BookData[]>([]);
	const router = useRouter();
	const query = router.query.query;

	useEffect(() => {
		if (!query || typeof query !== "string") return;

		const handleSearch = async () => {
			const data = await fetchBooks(query);
			setBooks(data);
		};

		handleSearch();
	}, [query]);

	return (
		<div>
			{books.map((book: BookData) => (
				<BookItem key={book.id} {...book} />
			))}
		</div>
	);
}

Page.getLayout = (page: ReactNode) => {
	return <SearchableLayout>{page}</SearchableLayout>;
};
