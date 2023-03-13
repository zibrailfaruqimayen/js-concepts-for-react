// 'almas',5, true,{},[]
// '', 0, false,null,undefined

// check truthy
let myVar = 5;
// check any truthy
if (myVar) {
  myVar = myVar * 100;
} else {
  myVar = 0;
}

// ypu check negative or falsy anything

let myMoney = 50;
if (!myMoney) {
}

const money = 80;
let food;
if (money > 100) {
  food = "biriany";
} else {
  food = "cha biscuit";
}

// ternary
let food1 = money > 100 ? "biriany" : "cha biscuit";
