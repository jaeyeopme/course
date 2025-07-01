"use client";

import { useRouter } from "next/navigation";
import { type MouseEvent, type ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import style from "./modal.module.css";

export default function Modal({ children }: { children: ReactNode }) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const router = useRouter();

	useEffect(() => {
		if (dialogRef.current && !dialogRef.current.open) {
			dialogRef.current.showModal();
			dialogRef.current.scrollTo({ top: 0 });
		}
	}, []);

	const handleClose = (event: MouseEvent<HTMLDialogElement>) => {
		if ((event.target as HTMLElement).nodeName === "DIALOG") {
			router.back();
		}
	};

	return createPortal(
		// biome-ignore lint/a11y/useKeyWithClickEvents: modal can be closed via ESC key
		<dialog onClick={handleClose} ref={dialogRef} className={style.modal}>
			{children}
		</dialog>,
		document.getElementById("modal-root") as HTMLElement,
	);
}
