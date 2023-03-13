// 1. JSON => stringify , parse

const student = {
  name: "sakib kahan",
  age: 32,
  movies: ["king khan", "dhakar mastan"],
};
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentOb = JSON.parse(studentJSON);
// console.log(studentOb);
