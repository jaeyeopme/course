import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function GlobalLayout({ children }: Props) {
	return (
		<>
			<header>HEADER</header>
			<main>{children}</main>
			<footer>FOOTER</footer>
		</>
	);
}
