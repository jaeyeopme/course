import type { BookData } from "@/types";

export default async function fetchBooks(query?: string): Promise<BookData[]> {
	const url = `http://localhost:12345/book${query ? `/search?q=${query}` : ""}`;

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error("Failed to fetch books:", error);
		return [];
	}
}
