import { BookData, ReviewData } from "@/types";
import style from "./page.module.css";
import ReviewItem from "@/components/review-item";
import ReviewEditor from "@/components/review-editor";
import { notFound } from "next/navigation";

async function BookDetail({ bookId }: { bookId: string }) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`,
	);

	if (!response.ok) {
		if (response.status === 404) {
			notFound();
		}
		throw new Error("Fetching book failed");
	}

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

async function ReviewList({ bookId }: { bookId: string }) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`,
	);

	if (!response.ok) {
		if (response.status === 404) {
			notFound();
		}
		throw new Error("Fetching reviews failed");
	}

	const reviews: ReviewData[] = await response.json();

	return (
		<section>
			{reviews.map((review) => (
				<ReviewItem key={review.id} {...review} />
			))}
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
			<ReviewList bookId={id} />
		</div>
	);
}
