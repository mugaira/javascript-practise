// function initializeDeck() {
//  const deck = [];
//  const suits = ["hearts", "diamonds", "spades", "clubs"];
//  const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
//  for (let value of values.split(",")) {
//   for (let suit of suits) {
//    deck.push({ value, suit });
//   }
//  }
//  return deck;
// }

// // console.log(initializeDeck())

// function drawCard(deck, drawnCards) {
//  const card = deck.pop();
//  drawnCards.push(card);
//  return card;
// }

// function drawMultiple(numCards, deck, drawnCards) {
//  const cards = [];
//  for (let i = 0; i < numCards; i++) {
//   cards.push(drawCard(deck, drawnCards));
//  }
//  return cards;
// }

// function shuffle(deck) {
//  // loop over array backwards
//  for (let i = deck.length - 1; i > 0; i--) {
//   // pick random index before current element
//   let j = Math.floor(Math.random() * (i + 1));
//   [deck[i], deck[j]] = [deck[j], deck[i]];
//  }
//  return deck;
// }

// const deck = initializeDeck();
// shuffle(deck);
// const cardsInHand = [];
// drawCard(deck, cardsInHand);
// // drawCard(deck, cardsInHand);
// drawMultiple(3, deck, cardsInHand);
// console.log(cardsInHand);

// const makeDeck = () => {
//  return {
//   deck: [],
//   drawnCards: [],
//   suits: ["hearts", "diamonds", "spades", "clubs"],
//   values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
//   initializeDeck() {
//    const { suits, values, deck } = this;
//    for (let value of values.split(",")) {
//     for (let suit of suits) {
//      deck.push({ value, suit });
//     }
//    }
//    return deck;
//   },
//   drawCard() {
//    const card = this.deck.pop();
//    this.drawnCards.push(card);
//    return card;
//   },
//   drawMultiple(numCards) {
//    const cards = [];
//    for (let i = 0; i < numCards; i++) {
//     cards.push(this.drawCard());
//    }
//    return cards;
//   },
//   shuffle() {
//    const { deck } = this;
//    for (let i = deck.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [deck[i], deck[j]] = [deck[j], deck[i]];
//    }
//   },
//  };
// };
// const deck1 = makeDeck();
// const deck2 = makeDeck();
// const deck3 = makeDeck();
// console.log(deck1);
// console.log(deck2);
// console.log(deck3);
// deck1.initializeDeck();
// deck1.shuffle();
// deck1.drawMultiple(4);
// console.log(deck1);

// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.job = "Programmer";
//   this.salary = 50000;
// }

// Person.prototype.sayName = function () {
//   console.log(`My name is ${this.firstName} ${this.lastName}`);
// };
// // Person.prototype.greet = "Nice!";

// function personFactory(firstName, lastName, age) {
//   return {
//     firstName,
//     lastName,
//     age,
//     sayName() {
//       console.log(`My name is ${this.firstName} ${this.lastName}`);
//     },
//   };
// }

// const user1 = new Person("John", "Doe", 25);
// // const user2 = new Person('Jack', 'Doe', 25);
// const user2 = personFactory("Jack", "Doe", 25);
// // console.log(user1);
// console.log(user2);
// // user1.sayName();
// user2.sayName();

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.job = "Programmer";
//   }
//   sayName() {
//     console.log(`My name is ${this.firstName} ${this.lastName} and age is ${this.age}`);
//   }
// }
// const user1 = new Person("John", "Doe", 25);
// // console.log(user1);
// user1.sayName()
