import { useRouter } from "next/router";


/**
 * Dynamic Routing
 *
 * 1. Dynamic Segment: [id].tsx
 *    - 파일 이름에 대괄호를 사용하여 동적 경로를 생성
 *    - URL에서 'id' 부분을 동적으로 받아와서 페이지를 렌더링
 *    - 예시: /posts/123 → id = "123"
 *
 * 2. Catch All Segment: [...id].tsx
 *    - 파일 이름에 대괄호와 rest 문법을 사용하여 모든 하위 경로를 캐치
 *    - URL에서 '/'로 구분된 모든 경로의 값들을 배열 형태로 받아옴
 *    - 예시: /posts/a/b/c → id = ["a", "b", "c"]
 *    - 경로 값이 없으면 404 페이지로 이동
 *
 * 3. Optional Catch All Segment: [[...id]].tsx
 *    - 파일 이름에 이중 대괄호와 rest 문법을 사용
 *    - Catch All과 동일하지만 경로 값이 없을 경우에도 페이지가 렌더링됨
 *    - 예시: /posts → id = []
 *    - 예시: /posts/a/b → id = ["a", "b"]
 */
export default function Page() {
  const router = useRouter();
  const { id } = router.query;
	return <h1>Hello, {id}</h1>;
}
