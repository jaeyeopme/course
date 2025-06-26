import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next";
import type { ReactNode } from "react";
import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import fetchBooks from "@/lib/fetch-books";
import type { BookData } from "@/types";

export const getServerSideProps = async ({
	query,
}: GetServerSidePropsContext) => {
	const books = await fetchBooks(query.query as string);

	return {
		props: {
			books,
		},
	};
};

export default function Page({
	books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
