import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import style from "./[id].module.css";
import fetchBook from "@/lib/fetch-book";

export const getServerSideProps = async ({
	params,
}: GetServerSidePropsContext) => {
	const book = await fetchBook(Number(params!.id));

	return {
		props: {
			book,
		},
	};
};

export default function Page({
	book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	if (!book) {
		return <div>책 정보를 불러올 수 없습니다.</div>;
	}

	const { title, subTitle, author, publisher, description, coverImgUrl } = book;

	return (
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
	);
}
