"use server";

import { revalidateTag } from "next/cache";

export default async function deleteReviewAction(
	_: unknown,
	formData: FormData,
) {
	const reviewId = formData.get("reviewId");
	const bookId = formData.get("bookId");

	if (!reviewId) {
		return { ok: false, error: "삭제할 리뷰가 없습니다" };
	}

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/${reviewId}`,
			{
				method: "DELETE",
			},
		);

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		revalidateTag(`review-${bookId}`);

		return { ok: true, error: null };
	} catch (error) {
		console.error("리뷰 삭제 중 에러 발생:", error);
		return { ok: false, error: "리뷰 삭제에 실패했습니다" };
	}
}
