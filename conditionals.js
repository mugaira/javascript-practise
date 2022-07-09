// const a = "HELLO"
// console.log(a)

// let a = 2;
// let b = 3;

// console.log(a >= b);

// console.log('hello' != 'Hello');

// const x = 5, y = 3;
// console.log(!(x < 4));


// if(a > b){
//  console.log("a is greater");
// }
// else{
//  console.log("b is greater")
// }


// let age = 21;

// if (age % 2 === 0) {
//  console.log('Age is even');
// } else {
//  console.log('Age is odd');
// }

// const number = -20;

// if (number > 0) {
//  console.log("The number is positive");
// }

// console.log("Code outside/after the if statement");


// let age = 61;

// if(age >= 21){
//  if(age <= 60){
//   console.log("free drink")
//  }
//  else{
//   console.log("bhai age jyad he")
//  }
// }
// else{
//  console.log("not allowed")
// }


// let num = 10;
// if(num % 2 == 0){
//  console.log("even")
// }
// else{
//  console.log("odd")
// }

// const food = "wood";

// if(food === "apple" || food ==="grape"){
//  console.log("fruits")
// }

// else if(food === "onion" || food === "tomato"){
//  console.log("vegetable")
// }

// else if(food === "plastic" || food === "wood"){
//  console.log("unedible")
// }

// let x = -10;
// let y = -23;


// if (x > 0 && y > 0) {
//  console.log("both positive")
// }
// else if (x < 0 && y < 0) {
//  console.log("both negative")
// }
// else if(x > 0 && y < 0){
//  console.log("x is positive and y is negative")
// }
// else if (x < 0 && y > 0) {
//  console.log("x is negative and y is positive")
// }


// let result = (x > 0 && y > 0) ? "x & y is positive" : "x & y is negative"

// console.log(result);

// let x = 3;

// let result = (x >= 0) ? (x == 0 ? "x is zero" : "positive") : "negative";

// console.log(result);

// let age = 20

// let result = (age >= 21) ? (age >= 60 ? "aged" : "allowed") : "not allowed";

// console.log(result);

// day = 4;

// switch (day) {
//  case 1:
//   console.log("today is monday")
//   break;
//  case 2:
//   console.log("today ios tuesday")
//   break;
//  case 3:
//   console.log("today is wednesday");
//   break;

//   default:
//    console.log("not a day")
// }

// program for a simple calculator
// let result;
// take the operator input
// const operator = prompt('Enter operator ( either +,-, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch (operator) {
//  case '+':
//   result = number1 + number2;
//   console.log(`${number1} + ${number2} = ${result}`);
//   break;

//  case '-':
//   result = number1 - number2;
//   console.log(`${number1} - ${number2} = ${result}`);
//   break;

//  case '*':
//   result = number1 * number2;
//   console.log(`${number1} * ${number2} = ${result}`);
//   break;

//  case '/': result = number1 / number2;
//   console.log(`${number1} / ${number2} = ${result}`);
//   break;

//  default:
//   console.log('Invalid operator');
//   break;
// }

// multiple case switch program
// let age = 18;

// switch (age) {
//  case 18:
//  case 19:
//  case 20:
//   console.log(`${age} is a done.`);
//   break;
//  default:
//   console.log(`${fruit} is not a fruit.`);
//   break;
// }