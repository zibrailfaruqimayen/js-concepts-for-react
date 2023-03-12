// how to declare a variable using let and const
const fathersName = "Arnold";
let season = "rainy";
season = "winter";

// 6 basic conditions: < , >, === , !== , <= ,>=
// multiple conditions: && , ||

if (fathersName === "arnold") {
} else if (fathersName === "Arnold") {
} else {
}

// 3. array
// index
// length , push
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4. for loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// 5. function
function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}
const output = multiply(35, 45);

// 6. Object
const student = {
  name: "sakib kahan",
  age: 32,
  movies: ["king khan", "dhakar mastan"],
};
