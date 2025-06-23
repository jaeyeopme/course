const arr = [1, 2, 3];

function map<T, U>(
	arr: T[],
	callbackfn: (value: T, index: number, array: T[]) => U,
) {
	const result: U[] = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(callbackfn(arr[i], i, arr));
	}
	return result;
}

const newArr1 = arr.map((it) => it * 2);
const newArr2 = map(arr, (it) => it * 2);

console.log(newArr1); // [2, 4, 6]
console.log(newArr2); // [2, 4, 6]

function forEach<T>(
	arr: T[],
	callbackfn: (value: T, index: number, array: T[]) => void,
) {
	for (let i = 0; i < arr.length; i++) {
		callbackfn(arr[i], i, arr);
	}
}

arr.forEach((it, i) => {
	if (arr.length === i + 1) {
		console.log(it); // 3
	}
});

forEach(arr, (it, i) => {
	if (arr.length === i + 1) {
		console.log(it); // 3
	}
});
