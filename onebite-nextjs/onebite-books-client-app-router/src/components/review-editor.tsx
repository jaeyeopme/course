import { createReviewAction } from "@/app/actions/create-review.action";
import style from "./review-editor.module.css";

export default function ReviewEditor({ bookId }: { bookId: string }) {
	return (
		<section>
			<form className={style.form_container} action={createReviewAction}>
				<input type="hidden" name="bookId" value={bookId} />
				<textarea required name="content" placeholder="리뷰내용" />
				<div className={style.submit_container}>
					<input required name="author" placeholder="작성자" />
					<button type="submit">작성하기</button>
				</div>
			</form>
		</section>
	);
}
