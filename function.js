// greetMe()
// greetMe()
// greetMe()
// greetMe()


// function greetMe() {
//  console.log("hey")
// }

// // function add(x,y){
// //  console.log(x + y);
// // }

// // add(3,4)

// for (let i = 0; i < 50; i++) {
//  greetMe();
// }

// 


// function greet(abc){
//  console.log("hii " + abc);
// }

// name = "john";

// greet(name)

// function rollDie() {
//  let roll = Math.floor(Math.random() * 6) + 1;
//  console.log(`Rolled: ${roll}`);
// }
// function rollDice(times) {
//  for (let i = 0; i < times; i++) {
//   rollDie()
//  }
// }
// rollDice(3);

// function add(a, b) {
//  return a + b;
// }

// console.log(add(3, 4))
// console.log(add(5, 4))
// const addtion = add(8, 4)
// console.log(addtion)

// let firstName = 'Chaggan';
// function greet() {
//  let firstName = 'Jack';
//  return `Hello, ${firstName}`;
// }
// console.log(greet());

// const add = function(x,y){return x + y};

// console.log(add(3,4))

// const multiply = function(a,b){return a * b};

// console.log(multiply(2,2))
// console.log(multiply(2,-2))


// function generate_even(){
//  for(let i = 0; i < 50 ; i++){
//   if(i % 2 == 0){
//    console.log(i)
//   }
//  }
// }

// generate_even()

// function return_day(num){
//  switch (num) {
//   case 1:
//    console.log("today is monday")
//    break;
//   case 2:
//    console.log("today is tuesday")
//    break;
//   case 3:
//    console.log("today is wednesday");
//    break;
//   case 4:
//    console.log("today is thurs");
//    break;
//   case 5:
//    console.log("today is fri");
//    break;
//   case 6:
//    console.log("today is sat");
//    break;
//   case 7:
//    console.log("today is sun");
//    break;

//   default:
//    return console.log(null);
//  }
// }
// return_day(1)



// function math(a, b, fn) {
//  return fn(a, b);
// }

// function add(num1, num2) {
//  return num1 + num2;
// }

// function sub(x,y){
//  return x - y;
// }
// console.log(math(10, 5, function(x,y){
//  return x - y ;
// }))
// console.log(math(10, 5, add))


// const res = math(10, 5, function (a, b) {
//  return a - b;
// });

// console.log(res);


// const maths = [
//  function (a, b) {
//   return a + b;
//  },
//  function (a, b) {
//   return a - b;
//  },
//  function (a, b) {
//   return a * b;
//  },
//  function (a, b) {
//   return a / b;
//  },
// ];


// console.log(maths[1](5,3))
// console.log(maths[3](5,3))


// const operater = {
//  add :function(a,b){
//   return a+b;
//  },
//  sub : function(a,b){
//   return a-b;
//  },
//  multiply : function(a,b){
//   return a*b;
//  }
// };

// console.log(operater.add(3,4))

// function multipleGreets(fn) {
//  fn();
//  fn();
//  fn();
// }

// function sayHello() {
//  console.log('Hello World!');
// }
// function sayGoodbye() {
//  console.log('Bye World!');
// }
// multipleGreets(sayHello);
// multipleGreets(sayGoodbye);

// function repeat(func, num) {
//  for (let i = 0; i < num; i++) {
//   func();
//  }
// }

// repeat(sayGoodbye,10)

// function sayHello() {
//  console.log('Hello World!');
// }
// function sayGoodbye() {
//  console.log('Bye World!');
// }


// function randomPick(f1, f2) {
//  let randNum = Math.random();
//  if (randNum < 0.5) {
//   f1();
//  } else {
//   f2();
//  }
// }

// randomPick(sayHello, sayGoodbye);


// function raiseBy(num) {
//  return function (x) {
//   return x ** num;
//  };
// }
// const cube = raiseBy(3);
// const square = raiseBy(2);

// console.log(cube(2));
// console.log(square(2));


// function isBetween(x, y) {
//  return function (num) {
//   return num >= x && num < y;
//  };
// }
// const underAge = isBetween(18, 21);
// const correctAge = isBetween(21, 65);
// const overAge = isBetween(65, 200);


// console.log(underAge(20))
// console.log(correctAge(30))
// console.log(overAge(70))



// function outer() {
//  let movie = 'Dr Strange';
//  function inner() {
//   let movie = 'Chandramukhi';
//   console.log(movie);
//  }
//  inner();
//  console.log(movie);
// }
// outer();

// function square(num){
//  return num * num;
// }

// const cube = function (num) {
//  return num * num * num;
// };


// console.log(square(3))
// console.log(cube(3))

// function lastItem(num) {
//  if (num.length === 0) {
//   return null
//  } else {
//   return num[num.length - 1]
//  }
// }

// console.log(lastItem([1, 2, 3]));


// function number_compare(a,b){
//  return (a >= b) ? (a > b  ? "first is greater ":"both are equal" ) :"second is greater"
// }
// console.log(number_compare(4,5))
// console.log(number_compare(1,1))
// console.log(number_compare(1,0))
// console.log(number_compare(2,4))


// setTimeout(function () {
//   console.log('HELLO WORLD');
// }, 5000);
// console.log(add(10, 5));

// setTimeout(function(){
//  console.log("abc");
// },5000);
// const nums = [1, 2, 3, 4, 5, 6,"arr"];
// // for (let num of nums) {
// //  console.log(num);
// // }
// nums.forEach(function (num) {
//  // console.log(i, num);
//  if (num % 2 === 0) {
//   console.log(num)
//  }
// });


// const movies = [
//  {
//   title: 'Avengers',
//   rating: 4.1,
//  },
//  {
//   title: 'Dr. Strange',
//   rating: 3.9,
//  },
//  {
//   title: 'Tenet',
//   rating: 4.3,
//  },
//  {
//   title: 'Joker',
//   rating: 4.7,
//  },
// ];
// movies.forEach(function (movie, i) {
//  console.log(i + 1, movie.title.toUpperCase());
// });


// const names = [
//  {
//   1 : "mugaira"
//  },
//  {
//   2 : "yasin"
//  }
// ]

// names.forEach(function(nam){
//  console.log(nam[2])
// })


// const names = ['john', 'jack', 'jane', 'james'];

// const uppercasedNames = names.map(function (nam) {
//   return nam.toUpperCase();
// });

// console.log(uppercasedNames)

// const uppercasedNames = [];
// for (let name of names) {
//   uppercasedNames.push(name.toUpperCase());
// }
// console.log(uppercasedNames);

// console.log(names)


// names.forEach(function(nam){
//  console.log(nam.toUpperCase())
// })

// for(let i of names){
//  console.log(i.toUpperCase())
// }