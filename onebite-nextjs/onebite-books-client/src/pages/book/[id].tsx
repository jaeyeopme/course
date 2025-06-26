import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import style from "./[id].module.css";
import fetchBook from "@/lib/fetch-book";
import { useRouter } from "next/router";

export const getStaticProps = async ({
	params,
}: GetStaticPropsContext) => {
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
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } },
      ],
      fallback: true,
  }
}

export default function Page({
	book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  if (router.isFallback) return <div>로딩 중...</div>;

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
