"use server";

import { revalidateTag } from "next/cache";

export async function createReviewAction(formData: FormData) {
	const bookId = formData.get("bookId");
	const content = formData.get("content");
	const author = formData.get("author");

	if (!bookId || !content || !author) return;

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
			throw new Error("리뷰 작성에 실패했습니다.");
		}

		revalidateTag(`review-${bookId}`);
	} catch (error) {
		console.error("리뷰 작성 중 에러 발생:", error);
		return;
	}
}
