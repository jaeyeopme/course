type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

// template literal types: 문자열 리터럴 타입을 조합하여 새로운 문자열 리터럴 타입을 생성
// "red-dog" | "red-cat" | "red-chicken" | "black-dog" | "black-cat" |
// "black-chicken" | "green-dog" | "green-cat" | "green-chicken"
type ColorAnimal = `${Color}-${Animal}`;
