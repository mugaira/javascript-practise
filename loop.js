// for(let i = 5 ; i >= 0 ; i--){
//  console.log(`${i} - hello world`);
// }

// let sum = 0;
// let num = 100;

// for(let i = 1 ; i <= num ; i++){
//  // sum = sum + i;
//  sum += i ;
//  // console.log(i)
// }

// console.log('sum:', sum)

// const arr = [1,2,3,4,5,6];

// for(let i = arr.length - 1 ; i >= 0 ; i--){
//  console.log(arr[i]);
// }

// const movies = [
//   { movieName: 'Inception', rating: 3.8 },
//   { movieName: 'Avengers', rating: 3.4 },
//   { movieName: 'Iron Man', rating: 2.9 },
// ];

// for(let i = 0 ; i < movies.length ; i++){
//  let movie = movies[i];
//  console.log(`${movie.movieName} is good`)
// }

// const name = "YASIN"
// let rev = ""

// for(let i = name.length - 1 ; i >= 0 ; i--){
//  (rev += name[i]);
// }
// console.log(rev);

// for(let i = 1 ; i <= 5 ; i++){
//  for(let j = 1 ; j <= i ; j++){
//   console.log(j)
//  }
// }


// for (let i = 1; i <= 4; i++) {
//  console.log(`i is: ${i}`)
//  for (let j = 1; j < 4; j++) {
//   console.log(`j is: ${j}`)
//  }
// }


// for (let i = 0; i < 5; i++) {
//  console.log(i);
//  for (let j = 0; j < 5; j++) {
//   console.log('   ', j);
//   for (let k = 0; k < 5; k++) {
//    console.log('      ', k);
//   }
//  }
// }

// const gameBoard = [
//  [4, 64, 8, 4],
//  [128, 32, 4, 16],
//  [16, 4, 4, 32],
//  [2, 16, 16, 2],
// ];

// for (let i = 0; i < gameBoard.length; i++) {
//  for (let j = 0; j < gameBoard[i].length; j++) {
//   console.log(gameBoard[i][j]);
//  }
// }



// const seatingChart = [
//  ['John', 'Jane', 'Jack'],
//  ['James', 'Jason', 'Jackie', 'Janice'],
//  ['Jim', 'Jon', 'Jessica', 'Jesse']
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//  const row = seatingChart[i];
//  console.log(`ROW #${i + 1}`)
//  for (let j = 0; j < row.length; j++) {
//   console.log(row[j])
//  }
// }

// let i = 0;
// while(i < 10){
//  console.log(i);
//  i++;
// }


// let rands = [];
// let i = 0;
// let num = 5;

// while(i < num){
//  rands.push(Math.floor(Math.random() * 10) + 1);
//  i++;
//  console.log(`The current size of the array is ${i}`)
// }

// console.log(rands);


// let cars = ["BMW", "Lamborghini", "Saab", "Ford"];
// let text = "";
// let i = 0;
// while (i < cars.length) {
//  text += cars[i] + "\n";
//  i++;
// }
// console.log(typeof text) // string

// let cars = ["BMW", "Lamborghini", "Saab", "Ford"];
// let cars = "Lamborghin";

// for(let i of cars){
//  console.log(i);
// }

// const salarie= {
//  Jack : 24000,
//  Paul : 34000,
//  Monica : 55000,
// }

// for(let i in salarie){
//  console.log(i,salarie[i])
// }

// const arr1 = [13,35,32,54,2,87]

// for(let i of arr1){
//  console.log(i)
// }

// const arr1 = [13,35,32,54,2,87,114,55,67,88,32,114,146];

// let sum = "";

// for(let i = 0;i < arr1.length ;i++){
//  while(i % 2 == 0){
//   sum += i
//  }
// }
// console.log(sum)

// const target = Math.floor(Math.random() * 10) + 1;
// let guess = Math.floor(Math.random() * 10) + 1;
// let i = 0;
// while (target !== guess) {
//  console.log(`Target: ${target} | Guess: ${guess}`);
//  guess = Math.floor(Math.random() * 10) + 1;
//  i++;
// }
// console.log(`You won: \nTarget: ${target} |No Of Guess: ${i}`);

// const target = Math.floor(Math.random() * 10) +  1;
// let guess = Math.floor(Math.random() * 10) +  1;
// let i = 0;

// while(true){
//  console.log(`Target: ${target} | Guess: ${guess}`)
//  if(target == guess){
//   break;
//  }
//  guess = Math.floor(Math.random() * 10) +  1;
//  i++;
// }

// console.log(`You won: \nTarget: ${target} |No Of Guess: ${i}`)