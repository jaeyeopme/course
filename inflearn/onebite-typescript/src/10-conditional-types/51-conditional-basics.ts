type StringNumberSwitch<T> = T extends string ? number : string;

const a: StringNumberSwitch<number>; // string
const b: StringNumberSwitch<string>; // number

function removeSpaces1<T>(text: T): T extends string ? string : undefined {
  if (typeof text === "string") {
    // ❌ T 에 대한 런타입 타입 가드를 인식하지 못함
    // T 는 unknown 타입으로 취급됨
    return 0 as any;
  } else {
    return undefined as any;
  }
}

// 오버로드 시그니쳐의 (타입 정의)
// 제네릭을 오버로드 시그니쳐에 정의
function removeSpaces2<T>(text: T): T extends string ? string : undefined;

// any 타입으로 구현부 정의
function removeSpaces2(text: any){
  if (typeof text === "string") {
    // ✅ 실제 구현부는 any 타입으로 받아서 런타임 타입 가드 사용 가능
    return text.replaceAll(" ","");
  }
  return undefined;
}
