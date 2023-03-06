//Primitives
let age: number;
age = 12;

let username: string;
username = "Max";

let isInstrustor: boolean;
isInstrustor = true;

//More complex types
let hobbies: string[];
hobbies = ["Sport", "reading"];

//Alias
type Person = {
  id: number;
  name: string;
};

let person: Person;

person = {
  id: 12,
  name: "Max",
};

let people: Person[];

//Type inference
let course: string | number = "React course";
course = 12345;

//Functions
function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demo = [1, 2, 3];
const updatedArray = insertAtBeginning(demo, -1); //[-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
//updatedArray[0].split("");
