import type { ReactNode } from "react";
import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import mock from "@/mock/books.json";
import type { BookData } from "@/types";

export default function Page() {
	const books = mock as BookData[];

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
