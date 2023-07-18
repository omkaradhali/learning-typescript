console.log("Hello World!!");

function add(n1: number, n2: number, printResult: boolean) {
  if (printResult) {
    console.log(n1 + n2);
  }
  return n1 + n2;
}

const number1: number = 5; // This is redundant as typescript assigns type by inference.
const number2 = 2.8;

// This is allowed
let number3: number;
number3 = 6;

const printResult = true;

const result = add(number1, number2, printResult);
