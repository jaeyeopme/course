export interface BookData {
	id: string;
	title: string;
	subTitle: string;
	description: string;
	author: string;
	publisher: string;
	coverImgUrl: string;
}

export interface ReviewData {
	id: string;
	content: string;
	author: string;
	createdAt: string;
	bookId: string;
}
