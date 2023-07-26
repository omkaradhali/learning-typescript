// Function return types.
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult2(num: number): void {
  console.log(num);
}

// Function type
let combineValues: Function;

let combValue: (a: number, b: number) => number;

combineValues = add;

combValue = add;

console.log(combineValues(8, 8));

// call back
function addHandle(a: number, b: number, cb: (num: number) => void) {
  const result = a + b;
  cb(result);
}

addHandle(4, 5, printResult2);
