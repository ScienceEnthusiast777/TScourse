//object
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "peter",
  age: 23,
  hobbies: ["going to the shops "],
  role: [2, "author"],
};
//array
let favouriteThings: string[];

for (let thing of favouriteThings) {
  console.log(thing.toUpperCase());
}
//tuples

let tupleEx: [number, string];
tupleEx = [22, "peter"];
// tupleEx = [22,"peter","sally"]//will cause an error

//Enum
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person2: { name: string; age: number; hobbies: string[]; role: Role } = {
  name: "peter",
  age: 23,
  hobbies: ["going to the shops "],
  role: Role.AUTHOR,
};

//Union Types 

function add2(n1: number | string, n2: number | string) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const number1 = 2.9;
const number2 = 33;

add2(number1, number2);

const combinedAges = add2(22, 4);
const combinedNames = add2("one", "two");
