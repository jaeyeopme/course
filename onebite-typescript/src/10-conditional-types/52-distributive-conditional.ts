type StringNumberSwitch<T> = T extends string ? number : string;

// StringNumberSwitch<string> |  // number
// StringNumberSwitch<number> // string
const a: StringNumberSwitch<number | string>; // string | number

// StringNumberSwitch<number> | // string
// StringNumberSwitch<string> | // number
// StringNumberSwitch<boolean> // string
const b: StringNumberSwitch<number | string | boolean>;  // string | number

type Exclude<T, U> = T extends U ? never : T;

// Exclude<number, string> | // number
// Exclude<string, string> | // never
// Exclude<boolean, string> // boolean
// never 는 유니온 타입에서 제외됨(공집합)
type A = Exclude<number | string | boolean, string>; // number | boolean

type Extract<T, U> = T extends U ? T : never;

// Extract<number, string> | // never
// Extract<string, string> | // string
// Extract<boolean, string> // never
// // never 는 유니온 타입에서 제외됨(공집합)
type B = Extract<number | string | boolean, string>; // string
