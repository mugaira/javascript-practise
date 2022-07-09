// let students = ['John', 'Jane', 'Jack'];
// using forEach

// function myFunction(item) {
//  console.log(item);
// }

// students.forEach(myFunction);



// using function express as a callback
// let arr = [];
// students.forEach(function (abc) {
//  arr.push(abc)
//  console.log(abc)
// })

// console.log(arr)

// students.forEach((item) => console.log(item) )

// console.log(even)

// nums.forEach(function (item){
//  if(item % 2 === 0){
//   console.log(item)
//  }
// })
// nums.forEach((item) => {
//  if(item % 2 === 0){
//   console.log(item)
//  }
// } )

// const movies = [
//  {
//   title: 'Avengers',
//   rating: 4.1
//  },
//  {
//   title: 'Dr. Strange',
//   rating: 3.9
//  },
//  {
//   title: 'Tenet',
//   rating: 4.3
//  },
//  {
//   title: 'Joker',
//   rating: 4.7
//  }
// ]

// movies.forEach(function(item,i){
//  console.log(i + 1,item.title.toLocaleUpperCase())
// })

// const arrayItems = ['item1', 'item2', 'item3'];
// const copyItems = [];
// // using for loop
// for (let i = 0; i < arrayItems.length; i++) {
// copyItems.push(arrayItems[i]);
// }
// console.log(copyItems);

// arrayItems.forEach(function(a){
//  copyItems.push(a);
// })
// console.log(copyItems)

// [1, 2, 3, 4, 5].forEach(v => {
//  if (v % 2 !== 0) {
//    return;
//  }
//  console.log(v);
// });


// const nums = [1,2,3,4,5,6]

// const even = nums.forEach(function(item){
//  if(item % 2 !== 0){
//  return ;
//  }
//  console.log(item);
// })

// string = "yasinmalik"

// let i = 0;
// for(let item of string){
//  while(i < 5){
//   console.log(item)
//   i++
//  }

// }

// const employees1 = [
//  {
//   name: "John", salary: 5000, bonus: 500, tax: 1000
//  },
//  {
//   name: "Jack", salary: 8000, bonus: 1500, tax: 2500
//  },
//  {
//   name: "Jane", salary: 1500, bonus: 500, tax: 200
//  },
//  {
//   name: "James", salary: 4500, bonus: 1000, tax: 900
//  },
// ];

// let newArr1 = employees1.map((obj) => {
//  newObj = {};
//  newObj.name = obj.name;
//  newObj.netSalary = obj.salary + obj.bonus - obj.tax;
//  return newObj;

//  // console.log(newObj)
// })

// console.log(newArr1)

// const prods = [
//  {
//    name: 'prod 1',
//    price: 5,
//  },
//  {
//    name: 'prod 2',
//    price: 90,
//  },
//  {
//    name: 'prod 3',
//    price: 8,
//  },
// ];
// const res = prods.map(product =>{
//  return  product.name 
// })
// console.log(res)

// const string = "Hello World";
// const stringArr = string.split('');

// // console.log(stringArr);

// let aiscc =  stringArr.map((x) => {
//  return x.charCodeAt();
// })

// console.log(aiscc)

// stringArr.forEach(function(item){
//  console.log(item.charCodeAt())
// })

// const nums = [2, 3, 4, 7, 6, 8, 13, 10, 19, 12, 14, 22, 21, 16];

// let newarr = nums.map((x) => {
//  return x * 2;
// })

// console.log(newarr)

// nums.forEach((item) =>{
//  console.log(item * 2);
// })

// function add(a, b) {
//   console.log(a + b);
//   return 'hqwerkjnsdklcjbnsdlkjfbnilj';
// }
// console.log(add(10, 5));


// function something() {

//  const nums = [];

//  for (let i = 1; i < 51; i++) {
//   nums.push(i);
//  }
//  const evens = [];
//  // console.log(nums)

// for (let num in nums) {
//  if (num % 2 === 0) {
//   evens.push(num);
//  }
// }

//  let num = nums.map((x) => {
//   if(x%2 === 0){
//    evens.push(x)
//   }
//   // return num;
//  })
//  return evens;
// }

// console.log(something());

//-----------------------------------------

// Array Find

//-------------------------------------------


// let movies = ['The Terminator', 'The Avengers',  'Jurassic Park', 'Titanic', 'The Avengers'];

// const searchMovie = 'The Avengers';


// let search = movies.find((item) => {
//  return item === searchMovie;
// })

// console.log(search)

// let randomArray = [1, 2, 45, 8, 98, 7];

// let firstEven = randomArray.find(function(item){
//  return item % 2 === 0;
// })

// console.log(firstEven)

// let firstOdd = randomArray.find((item) => {
//  return item % 2 === 1
// })

// console.log(firstOdd)

// const team = [
//  { name: "John", age: 15 },
//  { name: "James", age: 17 },
//  { name: "Jack", age: 16 },
//  { name: "Jim", age: 22 },
// ];

// let teamMember = team.find((member) => {
//  return member.name === 'James';
// })

// console.log(teamMember)

// const books = [
//  {
//   title: 'The Shining',
//   author: 'Stephen King',
//   rating: 4.1,
//  },
//  {
//   title: 'Sacred Games',
//   author: 'Vikram Chandra',
//   rating: 4.5,
//  },
//  {
//   title: '1984',
//   author: 'George Orwell',
//   rating: 4.9,
//  },
//  {
//   title: 'The Alchemist',
//   author: 'Paulo Coelho',
//   rating: 3.5,
//  },
//  {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   rating: 3.8,
//  },
// ];

// let findBook = books.find((item) => {
//  return item.author.includes('Orwell')
// })

//  console.log(findBook)


// let randomArray = [1, 2, 45, 8, 98, 7];

// let evenNum = randomArray.filter((item)=>{
//  return item % 2 === 0;
// })

// console.log(evenNum);

// const prices = [1800, 2000, null, 3000, 5000,
//  'Thousand', 500, 8000];

//  let filterPrice = prices.filter(function(item){
//   return typeof(item) === 'number' && item > 2000
//  })

//  console.log(filterPrice);

// const ageArray = [34, 23, 20, 26, 12];


// let check = ageArray.every((x)=>{
//  return x > 30
// })

// console.log(check)

// let agecheck = ageArray.some((x)=>{
//  return x > 30
// })
// console.log(agecheck)


// const names = ['jack', 'james', 'john', 'jane', 'josh', 'brad'];
// const result = names.some((name) => {
//  return name[0] === 'b';
// });
// console.log(result);

// let names = ["Abhijeet", "Jim", "Farhan", "Danny","Brad"];

// let names = ["thousand", "fiftey", "two", "Danny","Brad"];

// console.log(names.sort());

// console.log(names);

// let priceList = [1000, 50, 2, 7, 14];
// priceList.sort();
// // Number is converted to string and sorted
// console.log(priceList)

// const prices = [500.4, 211, 23, 5, 4, 22.2, -23.2, 9233];

// prices.sort(function(a, b) {
//  return b - a
//  });
// console.log(prices);


// const books = [
//  {
//   title: 'E The Shining',
//   author: 'Stephen King',
//   rating: 4.1,
//  },
//  {
//   title: 'D Sacred Games',
//   author: 'Vikram Chandra',
//   rating: 4.5,
//  },
//  {
//   title: 'A 1984',
//   author: 'George Orwell',
//   rating: 4.9,
//  },
//  {
//   title: 'B The Alchemist',
//   author: 'Paulo Coelho',
//   rating: 3.5,
//  },
//  {
//   title: 'C The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   rating: 3.8,
//  },
// ];

// let rateSort = books.sort((a,b) => {
//  return a.rating - b.rating
// })

// let autSort = books.sort(function(item){
//  return item.title 
// })

// console.log(autSort);

//------------------------------------------

// Reduce 

//-----------------------------------------------


// Sum of All Values of Array
// const numbers = [1, 2, 3, 4, 5, 6];


// const sum = numbers.reduce(function(accumulator,currentValue){
//  return accumulator + currentValue;
// })

//  console.log(sum)

// const result = numbers.reduce((acc, currVal) => acc / currVal);

// console.log(result)

// const numbers = [1800, 50, 300, 20, 100];

// const sub = numbers.reduce((acc,cur) => {
//  return acc - cur
// })

// console.log(sub)

// let nums = [21, 221, 2, 1, 34, 123, 4342, 56, 4];

// let maxVal = nums.reduce((acc,cur) => {
//  if(cur > acc){
//   return cur;
//  }
//  return acc;
// })

// console.log(maxVal);


// acc   curr
// 21    221
// 221   2
// 221   1
// 221


let num = [1,2,3,4]