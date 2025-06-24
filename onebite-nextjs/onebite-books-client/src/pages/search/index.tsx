import { useRouter } from "next/router";

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
 */
export default function Page() {
	const router = useRouter();
	const { query } = router.query;

	return <h1>Hello, {query}</h1>;
}
