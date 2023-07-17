console.log("Hello World!!");
function add(n1, n2, printResult) {
    if (printResult) {
        console.log(n1 + n2);
    }
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var result = add(number1, number2, printResult);
