"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./serachbar.module.css";

export default function Searchbar() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [search, setSearch] = useState("");

	const query = searchParams.get("query");

	useEffect(() => {
		setSearch(query || "");
	}, [query]);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleSearchSubmit = () => {
		if (search && query !== search) {
			router.push(`/search?query=${search.trim()}`);
		}
	};

	const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		e.key === "Enter" && handleSearchSubmit();
	};

	return (
		<div className={style.container}>
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
	);
}
