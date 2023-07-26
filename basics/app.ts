let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

function genError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
