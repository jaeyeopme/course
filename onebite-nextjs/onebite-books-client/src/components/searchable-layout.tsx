import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function SearchableLayout({ children }: Props) {
	return (
		<div>
			SEARCH
			{children}
		</div>
	);
}
