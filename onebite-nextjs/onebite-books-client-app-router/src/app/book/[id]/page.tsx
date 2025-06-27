import style from "./page.module.css";
import mock from "@/mock/books.json";

export default async function Page({
	params,
}: {
	params: Promise<{ id: string | string[] }>;
}) {
	const { id } = await params;

	const { title, subTitle, description, author, publisher, coverImgUrl } =
		mock[0];

	return (
		<div className={style.container}>
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
		</div>
	);
}
