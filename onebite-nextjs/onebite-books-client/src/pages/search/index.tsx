import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

/**
 * Query Parameter
 *
 * 1. URL 쿼리 파라미터: ?query=value
 *    - URL에 쿼리 파라미터를 추가하여 페이지에 데이터를 전달
 *    - 예시: /?query=hello → query = "hello"
 *
 * 2. useRouter 훅을 사용하여 쿼리 파라미터 접근
 *    - useRouter 훅을 통해 현재 라우터 객체에 접근
 *    - query 속성을 사용하여 URL에서 전달된 쿼리 파라미터를 가져옴
 *
 * Navigating
 *
 * 1. Link 컴포넌트를 사용한 클라이언트 사이드 네비게이션
 *    - Link 컴포넌트를 사용하여 페이지를 이동
 *    - href 속성에 지정된 URL로 페이지를 이동
 *    - 예시: <Link href="/search?query=nextjs">
 *
 * 2. router.push()를 사용한 프로그래매틱 네비게이션
 *    - useRouter 훅의 push 메서드로 페이지를 이동
 *    - 버튼 클릭 등의 이벤트 핸들러에서 사용
 *    - 예시: router.push("/book/15")
 */
export default function Page() {
	const router = useRouter();
	const { query } = router.query;

	const handleClick = () => {
		// back, forward, replace 등 다양한 메서드 사용 가능
		router.push("/book/15");
	};

	useEffect(() => {
		router.prefetch("/book"); // 동적 라우팅은 프리페치를 수동으로 활성화해야 함
	}, [router]);

	// Link 컴포넌트는 기본적으로 프리페칭이 활성화되어있고, prefetch props 를 통해 비활성화 가능
	return (
		<>
			<h1>Hello, {query}</h1>
			<Link prefetch={false} href="/search?query=nextjs">
				nextjs link
			</Link>
			&nbsp;|&nbsp;
			<button type="button" onClick={handleClick}>
				world button
			</button>
		</>
	);
}
