"use client";

import { useActionState, useEffect } from "react";
import { createReviewAction } from "@/app/actions/create-review.action";
import style from "./review-editor.module.css";

export default function ReviewEditor({ bookId }: { bookId: string }) {
	const [state, formAction, isPending] = useActionState(
		createReviewAction,
		null,
	);

	useEffect(() => {
		if (state && !state.ok) {
			alert(state.error);
		}
	}, [state]);

	return (
		<section>
			<form className={style.form_container} action={formAction}>
				<input type="hidden" name="bookId" value={bookId} />
				<textarea
					required
					disabled={isPending}
					name="content"
					placeholder="리뷰 내용"
				/>
				<div className={style.submit_container}>
					<input
						required
						disabled={isPending}
						name="author"
						placeholder="작성자"
					/>
					<button type="submit" disabled={isPending}>
						{isPending ? "작성중..." : "리뷰 작성"}
					</button>
				</div>
			</form>
		</section>
	);
}
