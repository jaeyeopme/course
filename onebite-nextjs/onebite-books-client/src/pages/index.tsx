import BookItem from "@/components/book-item";
import books from "@/mock/books.json";
import type { BookData } from "@/types";
import style from "./index.module.css";

export default function Home() {
	return (
		<div className={style.container}>
			<section>
				<h3>지금 추천하는 도서</h3>
				{books.map((book: BookData) => (
					<BookItem key={book.id} {...book} />
				))}
			</section>
			<section>
				<h3>등록된 모든 도서</h3>
				{books.map((book: BookData) => (
					<BookItem key={book.id} {...book} />
				))}
			</section>
		</div>
	);
}
