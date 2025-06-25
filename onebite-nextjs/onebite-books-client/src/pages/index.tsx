import type { InferGetServerSidePropsType } from "next";
import { type ReactNode, useEffect } from "react";
import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import mock from "@/mock/books.json";
import type { BookData } from "@/types";
import style from "./index.module.css"; //

// getServerSideProps: 서버 사이드 렌더링 시 매 요청마다 실행되는 예약된 함수명
export const getServerSideProps = () => {
	const data = mock as BookData[]; // 서버에서만 실행

	return {
		props: {
			data,
		},
	};
};

// InferGetServerSidePropsType<typeof getServerSideProps> 로 타입을 추론
export default function Page({
	data: books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	// 서버(사전 렌더링)에서 한번 실행되고, 클라이언트(하이드레이션)에서 한번 더 실행됨
	console.log("test"); // 서버와 클라이언트 모두에서 실행

	// 환경별 전용 객체 유무로 환경을 구분하여 각 환경별 코드를 실행 가능
	// window 객체는 클라이언트에서만 사용 가능하므로, 서버에서는 접근 불가
	if (typeof window === "undefined") {
		console.log("서버에서만 보이는 로그");
	} else {
		console.log("브라우저에서만 보이는 로그");
	}

	// 컴포넌트가 마운트된 후에 실행되므로, 클라이언트에서만 접근 가능한 객체 사용 가능
	useEffect(() => {
		console.log(window); // 클라이언트에서만 실행
	}, []);

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

Page.getLayout = (page: ReactNode) => {
	return <SearchableLayout>{page}</SearchableLayout>;
};
