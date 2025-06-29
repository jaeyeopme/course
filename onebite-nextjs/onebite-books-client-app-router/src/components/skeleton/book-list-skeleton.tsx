import BookItemSkeleton from "./book-item-skeleton";

export default function BookListSkeleton({ count }: { count: number }) {
	return (
		<>
			{Array.from({ length: count }, (_, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: skeleton items are static placeholders
				<BookItemSkeleton key={index} />
			))}
		</>
	);
}
