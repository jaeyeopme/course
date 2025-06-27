import BookItem from "@/components/book-item";
import books from "@/mock/books.json";

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const { query } = await searchParams;

	return (
		<div>
			{books.map((book) => (
				<BookItem key={book.id} {...book} />
			))}
		</div>
	);
}
