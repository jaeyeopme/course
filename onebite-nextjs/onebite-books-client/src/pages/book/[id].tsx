import { useRouter } from "next/router";

/**
 * Dynamic Routing
 *
 * 1. Dynamic Segment: [id].tsx
 *    - 파일 이름에 대괄호를 사용하여 동적 경로를 생성
 *    - 세그먼트가 제공되지 않으면 404 페이지로 이동
 *    - 예시: /posts/123 → id = "123"
 *
 * 2. Catch All Segment: [...id].tsx
 *    - 파일 이름에 대괄호와 rest 문법을 사용하여 모든 하위 경로를 캐치
 *    - 세그먼트가 제공되지 않으면 404 페이지로 이동
 *    - 예시: /posts/a/b/c → id = ["a", "b", "c"]
 *
 * 3. Optional Catch All Segment: [[...id]].tsx
 *    - Catch All Segment 와 동일하게 동작하지만, 세그먼트가 제공되지 않아도 페이지가 렌더링됨
 *    - 예시: /posts → id = []
 */
export default function Page() {
  const router = useRouter();
  const { id } = router.query;
	return <h1>Hello, {id}</h1>;
}
