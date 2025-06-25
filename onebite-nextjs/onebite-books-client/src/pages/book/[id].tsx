import mock from "@/mock/books.json";
import { BookData } from "@/types";
import style from "./[id].module.css";

export default function Page() {
	const { title, subTitle, author, publisher, description, coverImgUrl } = (
		mock as BookData[]
	)[0];

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
