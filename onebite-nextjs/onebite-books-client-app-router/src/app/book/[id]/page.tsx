import { BookData } from "@/types";
import style from "./page.module.css";
import { notFound } from "next/navigation";
import { createReviewAction } from "@/app/actions/create-review.action";

async function BookDetail({ bookId }: { bookId: string }) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`,
	);

	if (response.status === 404) notFound();

	const {
		title,
		subTitle,
		description,
		author,
		publisher,
		coverImgUrl,
	}: BookData = await response.json();

	return (
		<section>
			<div
				className={style.cover_img_container}
				style={{ backgroundImage: `url('${coverImgUrl}')` }}
			>
				<img src={coverImgUrl} alt={title} />
			</div>
			<div className={style.title}>{title}</div>
			<div className={style.subTitle}>{subTitle}</div>
			<div className={style.author}>
				{author} | {publisher}
			</div>
			<div className={style.description}>{description}</div>
		</section>
	);
}

function ReviewEditor({ bookId }: { bookId: string }) {
	return (
		<section>
			<form action={createReviewAction}>
				<input type="hidden" name="bookId" value={bookId} />
				<input required name="content" placeholder="리뷰내용" />
				<input required name="author" placeholder="작성자" />
				<button type="submit">작성하기</button>
			</form>
		</section>
	);
}

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return (
		<div className={style.container}>
			<BookDetail bookId={id} />
			<ReviewEditor bookId={id} />
		</div>
	);
}
