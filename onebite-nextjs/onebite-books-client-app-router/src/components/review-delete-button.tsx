"use client";

import { useActionState, useEffect, useRef } from "react";
import deleteReviewAction from "@/app/actions/delete-review.action";

export default function ReviewDeleteButton({
	reviewId,
	bookId,
}: {
	reviewId: string;
	bookId: string;
}) {
	const formRef = useRef<HTMLFormElement>(null);
	const [state, formAction, isPending] = useActionState(
		deleteReviewAction,
		null,
	);

	useEffect(() => {
		if (state && !state.ok) {
			alert(state.error);
		}
	}, [state]);

	const handleSubmit = () => {
		if (isPending) return;
		formRef.current?.requestSubmit();
	};

	return (
		<form ref={formRef} action={formAction}>
			<input type="hidden" name="reviewId" value={reviewId} />
			<input type="hidden" name="bookId" value={bookId} />

			{/** biome-ignore lint/a11y/useKeyWithClickEvents: submit */}
			{/** biome-ignore lint/a11y/noStaticElementInteractions: submit */}
			<div onClick={() => handleSubmit()}>
				{isPending ? "삭제중 ..." : "리뷰 삭제"}
			</div>
		</form>
	);
}
