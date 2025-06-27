import { useRouter } from "next/router";
import {
	type ChangeEvent,
	type KeyboardEvent,
	type ReactNode,
	useEffect,
	useState,
} from "react";
import style from "./searchable-layout.module.css";

interface Props {
	children: ReactNode;
}

export default function SearchableLayout({ children }: Props) {
	const [search, setSearch] = useState<string>("");
	const router = useRouter();

	const query = router.query.query as string;

	useEffect(() => {
		setSearch(query || "");
	}, [query]);

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleSearchSubmit = () => {
		search.trim() && router.push(`/search?query=${search.trim()}`);
	};

	const handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		e.key === "Enter" && handleSearchSubmit();
	};

	return (
		<>
			<div className={style.searchbar_container}>
				<input
					value={search}
					onChange={handleSearchChange}
					onKeyDown={handleSearchKeyDown}
					placeholder="검색어를 입력하세요..."
				/>
				<button type="submit" onClick={handleSearchSubmit}>
					검색
				</button>
			</div>
			{children}
		</>
	);
}
