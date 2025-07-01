import type { BookData, ReviewData } from "@/types";
import style from "./page.module.css";
import ReviewItem from "@/components/review-item";
import ReviewEditor from "@/components/review-editor";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
	);

	if (!response.ok) {
		if (response.status === 404) {
			notFound();
		}
		throw new Error("Fetching reviews failed");
	}

	const books: BookData[] = await response.json();

	return books.map((book) => ({ id: book.id.toString() }));
}

async function fetchBook({ bookId }: { bookId: string }): Promise<BookData> {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`,
		{ cache: "force-cache" },
	);

	if (!response.ok) {
		if (response.status === 404) {
			notFound();
		}
		throw new Error("Fetching book failed");
	}

	return await response.json();
}

async function fetchReviews({
	bookId,
}: { bookId: string }): Promise<ReviewData[]> {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`,
		{
			next: {
				tags: [`review-${bookId}`],
			},
		},
	);

	if (!response.ok) {
		if (response.status === 404) {
			notFound();
		}
		throw new Error("Fetching reviews failed");
	}

	return await response.json();
}

async function BookDetail({ bookId }: { bookId: string }) {
	const { title, subTitle, description, author, publisher, coverImgUrl } =
		await fetchBook({ bookId });

	return (
		<section>
			<div
				className={style.cover_img_container}
				style={{ backgroundImage: `url('${coverImgUrl}')` }}
			>
				<Image src={coverImgUrl} width={240} height={300} alt={title} />
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
	const reviews = await fetchReviews({ bookId });

	return (
		<section>
			{reviews.map((review) => (
				<ReviewItem key={review.id} {...review} />
			))}
		</section>
	);
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id: bookId } = await params;

	const { title, description, coverImgUrl }: BookData = await fetchBook({
		bookId,
	});

	return {
		title: `${title} - 한입 북스`,
		description: `${description}`,
		openGraph: {
			title: `${title} - 한입 북스`,
			description: `${description}`,
			images: [coverImgUrl],
		},
	};
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
