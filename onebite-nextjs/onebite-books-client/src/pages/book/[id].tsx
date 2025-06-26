import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import style from "./[id].module.css";
import fetchBook from "@/lib/fetch-book";
import { useRouter } from "next/router";
import Head from "next/head";

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	const book = await fetchBook(Number(params!.id));

	if (!book) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			book,
		},
	};
};

export const getStaticPaths = () => {
	return {
		paths: [
			{ params: { id: "1" } },
			{ params: { id: "2" } },
			{ params: { id: "3" } },
		],
		fallback: true,
	};
};

export default function Page({
	book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const router = useRouter();
	if (router.isFallback)
		return (
			<>
				<Head>
					<title>한입북스</title>
					<meta
						property="og:title"
						content="한입북스 - 당신의 책을 찾아보세요"
					/>
					<meta
						property="og:description"
						content="한입북스는 다양한 도서를 추천하고, 당신이 원하는 책을 쉽게 찾을 수 있는 곳입니다."
					/>
				</Head>
				<div>로딩 중...</div>
			</>
		);

	const { title, subTitle, author, publisher, description, coverImgUrl } = book;

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta property="og:title" content={title} />
				<meta property="og:image" content={coverImgUrl} />
				<meta
					property="og:description"
					content={description || "책에 대한 설명이 없습니다."}
				/>
			</Head>
			<div className={style.container}>
				<div
					className={style.cover_img_container}
					style={{ backgroundImage: `url(${coverImgUrl})` }}
				>
					<img src={coverImgUrl} alt={title} />
				</div>
				<div className={style.title}>{title}</div>
				<div className={style.subTitle}>{subTitle}</div>
				<div className={style.author}>
					{author} | {publisher}
				</div>
				<div className={style.description}>{description}</div>
			</div>
		</>
	);
}
