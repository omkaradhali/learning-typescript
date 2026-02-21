## Learning Typescript

### Objective

Primary objective is to get up to speed with Typescript. Will probably develop few front end React projects as well as backend.
Not entirely sure about the different projects I will dive into, but I will try to consistently work on this bit by bit.

## Core Types: All core primitive types in TypeScript are all lowercase.

1. number (1, 1.5) - All number no differentiation between integers and floats
2. string ('Hi', "hi", `hi`) - All Text values
3. boolean (true, false)
4. Object {age: 30}
5. Array [1,2,3] - Any javascript array, type can be flexible or strict (regarding element types)
6. Tuple [1,2] Added by TypeScript: Fixed length and type array
7. Enum enum { NEW, OLD } Added by TpeScript: Automatically enumerated global constant identifiers.
8. Any - Any kind of value.
9. Unknown

## Let vs Var

1. Let is block scoped var is function scoped.
2. If we declare let inside of if statement then it will be accessible only in that block. If we declare var inside if statement then it will be accessible globally.
3. let tightens the scope that var missed.
