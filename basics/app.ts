let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

// The following function returns a return type never.
function genError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

// Function can be also declared as below.
const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

// Data de-structuring.
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);

// Object Destructuring
const person1 = {
  first_name: "MAX",
  age: 30,
};
const copiedPerson = { ...person1 };

// Array destructuring
const newAdd = (...numbers: number[]) => {
  return numbers.reduce((result, item) => {
    return result + item;
  }, 0);
};
const numberToAdd = newAdd(5, 4, 3, 4, 5, 6);

// Destructuring array to new variables.
const [hobbies1, hobbies2] = hobbies;

// Destructuring object to new variables.
const { first_name: username, age: userAge } = person1;
