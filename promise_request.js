// console.log('The first log')
// setTimeout(() => {
// console.log('The line that takes time to complete')
// }, 5000)
// console.log('The last log')

// function greet(name, callme) {
//  console.log('Hi' + ' ' + name);
//  callme();
//  }

//  // callback function
//  function callMe() {
//  console.log('I am callback function');
//  }

//  // passing function as an argument
//  greet('John', callMe);

// function greet() {
// console.log('Hello world');
// }
// function sayName(name) {

//  console.log('Hello' + ' ' + name);
// }
// // calling the function
// setTimeout(greet, 2000);
// sayName('John');

// const btn = document.querySelector("button");
// // We add it to setTimeout so the movement happens after a second
// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
// }, 1000);

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`;
//         setTimeout(() => {
//           btn.style.transform = `translateX(500px)`;
//           setTimeout(() => {
//             btn.style.transform = `translateX(600px)`;
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// let promise = new Promise(function(resolve, reject){
//  //do something
//  });

// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//  if (count) {
//   resolve("count is true");
//  } else {
//   reject("count is false");
//  }
// });

// console.log(countValue);

// const randomNumber = new Promise((resolve,reject) => {
//  random = Math.random()

//  if(random > 0.5){
//   resolve();
//  }
//  else{
//   reject();
//  }
// });

// // console.log(randomNumber);

// randomNumber.then(() => {
//  console.log("win")
// })
// randomNumber.catch(() => {
//  console.log("lose");
// })

// const count = true;

// let countValue = new Promise(function (resolve,reject) {
//  resolve("Promise resolved");
//  });

//  // executes when promise is resolved successfully
//  countValue

//  .then(function successValue(result) {
//  console.log(result);
//  })

//  .then(function successValue1() {
//  console.log("You can call multiple functions this way.");
//  })

//  .then( function successValue2(){
//   console.log('this is 2')
//  })

// const countValue = new Promise((resolve,reject) => {
//  reject ("this is rejected")
// });

// countValue
// // .catch((result) => {
// //  console.log(result);
// // })
// .then(()=>{
//  console.log("true")
// })

// .catch(() => {
//  console.log('false')
// })

// const makePlayStationPromise = () => {
//  return new Promise((resolve, reject) => {
//   setTimeout(() => {
//    const rand = Math.random();
//    if (rand < 0.5) {
//     resolve("Awesome");
//    } else {
//     reject("Too bad");
//    }
//   }, 5000);
//  });
// };

// makePlayStationPromise()
//  .then((result) => {
//   console.log(result);
//   console.log("I got a playstation!");
//  })
//  .catch((error) => {
//   console.log(error);
//   console.log("$@#$% I didn't get anything!");
//  });

// const fakeRequest = (res) => {
//  return new Promise((resolve, reject) => {
//   setTimeout(() => {
//    const pages = {
//     "/users": [
//      { id: 5, username: "john" },
//      { id: 2, username: "jane" },
//     ],
//     "/users/1": {
//      id: 1,
//      username: "johndoe",
//      topPostId: 53231,
//      city: "mumbai",
//     },
//     "/users/5": {
//      id: 1,
//      username: "janedoe",
//      topPostId: 32443,
//      city: "pune",
//     },
//     "/posts/53231": {
//      id: 1,
//      title: "Really amazing post",
//      slug: "really-amazing-post",
//     },
//    };
//    const data = pages[url];
//    if (data) {
//     resolve({ status: 200, data });
//    } else {
//     reject({ status: 404 });
//    }
//   }, 1000);
//  });
// };

// fakeRequest('/users')
//  .then((res) => {
//   console.log('Got 1st data', res);
//   const user = res.data[0] ;
//   return fakeRequest(`/users/${user.id}`);
//  })
//  .then((res) => {
//   console.log('Got 2nd data', res);
//   const topPostId = res.data.topPostId;
//   return fakeRequest(`/posts/${topPostId}`);
//  })
//  .then((res) => {
//   console.log('Got final data', res);
//  })
//  .catch((err) => console.error(err));

// fakeRequest("/users")
//  .then((res) => {
//   console.log(res);
//   const id = res.data[0].id;
//   return fakeRequest(`/users/${id}`);
//  })
//  .then((res) => {
//   console.log(res);
//   const postId = res.data.topPostId;
//   return fakeRequest(`/posts/${postId}`);
//  })
//  .then((res) => {
//   console.log(res);
//   console.log(res);
//  })
//  .catch((err) => console.log(err));

