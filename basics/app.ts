enum Role {
  ADMIN = 5,
  READ_ONLY = 100,
  AUTHOR = 999,
  DEV = "DEV",
}

// Typescripts representation of Object (good practice to define it this way)
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
  unique_id: [number, string]; //tuple
} = {
  name: "max",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
  unique_id: [1, "random_name"],
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map())  This will error out and typescript will throw an error.
}
