import Link from "next/link";
import type { ReactNode } from "react";
import style from "./global-layout.module.css";

interface Props {
	children: ReactNode;
}

export default function GlobalLayout({ children }: Props) {
	return (
		<div className={style.container}>
			<header className={style.header}>
				<Link href="/">📚 ONEBITE BOOKS</Link>
			</header>
			<main className={style.main}>{children}</main>
			<footer className={style.footer}>
				@2025 ONEBITE BOOKS. All rights reserved.
			</footer>
		</div>
	);
}
