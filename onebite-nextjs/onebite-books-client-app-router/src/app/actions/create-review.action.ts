"use server";

import { revalidateTag } from "next/cache";

export async function createReviewAction(_: unknown, formData: FormData) {
	const bookId = formData.get("bookId");
	const content = formData.get("content");
	const author = formData.get("author");

	if (!bookId || !content || !author) {
		return { ok: false, error: "작성자와 리뷰 내용을 입력해주세요" };
	}

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
			{
				method: "POST",
				body: JSON.stringify({
					bookId,
					content,
					author,
				}),
			},
		);

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		revalidateTag(`review-${bookId}`);

		return { ok: true, error: null };
	} catch (error) {
		console.error("리뷰 작성 중 에러 발생:", error);
		return { ok: false, error: "리뷰 작성에 실패했습니다." };
	}
}
