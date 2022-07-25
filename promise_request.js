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

//-----XMLHttpRequest----------

// const req = new XMLHttpRequest() // make new object
// // provide 2 callbacks
// req.onload = function () { // if successful
// const data = JSON.parse(this.responseText)
// console.log(data)
// }
// req.onerror = function (err) { // if failure
// console.log('ERROR', err)
// }
// req.open('get', 'https://swapi.dev/api/people/1',true) // request type and url
// req.setRequestHeader('Accept', 'application/json')// send headers
// req.send() // send request

// const req = new XMLHttpRequest();
// // Adding event listeners instead of attributes
// req.addEventListener("load", function () {
//  const data = JSON.parse(this.responseText);
//  // console.log('It worked!', data)
//  for (let planet of data.results) {
//   console.log(planet);
//   console.log(planet.name);
//   console.log(planet.diameter);
//  }
// });
// req.addEventListener("error", function (err) {
//  console.log("Error", err);
// });
// req.open("get", "https://swapi.dev/api/planets", true);
// req.send();
// console.log(req); // req object has the responseText field;

// const req = new XMLHttpRequest();
// req.addEventListener("load", function () {
//   console.log("First Request");
//   const data = JSON.parse(this.responseText);
//   // Second Request (nested)
//   const filmUrl = data.results[0].films[0];
//   const filmReq = new XMLHttpRequest();
//   filmReq.addEventListener("load", function () {
//     console.log("Second Request");
//     const filmData = JSON.parse(this.responseText);
//     console.log(filmData.title);
//   });
//   filmReq.addEventListener("error", function (err) {
//     console.log(err);
//   });
//   filmReq.open("GET", filmUrl);
//   filmReq.send();
// });
// req.addEventListener("error", function (err) {
//   console.log("Error", err);
// });
// req.open("get", "https://swapi.dev/api/planets", true);
// req.send();

//-------------Fetch---------------------

// fetch("https://swapi.dev/api/planets", {
//  headers: { Accept: "application/json" },
// })
//  .then((response) => {
//   if (response.status !== 200) {
//    console.log("Problem", response.status);
//    return;
//   }
//   // Have to use response.json as we get back a stream;
//   // and not the json directly.
//   response.json().then((data) => {
//    // itself is a promise;
//    console.log(data);
//   });
//  })
//  .catch(function (err) {
//   console.log("Fetch err", err);
//  });

// fetch("https://swapi.dev/api/planets")
//  .then((response) => {
//   if (!response.ok) {
//    throw new Error(`Status code error: ${response.status}`);
//   }
//   return response.json();
//  })
//  .then((data) => {
//   console.log("Fetched all planets");
//   console.log(data.results[0].films[0]);
//   const filmUrl = data.results[0].films[0];

//   return fetch(filmUrl);
//  })
//  .then((response) => {
//   if (!response.ok) {
//    throw new Error(`Status code error:${response.status}`);
//   }
//   return response.json();
//  })
//  .then((data) => {
//   console.log("Fetched first film");
//   console.log(data.title);
//  })
//  .catch((err) => {
//   console.log("ERROR!", err);
//  });

//--------------Axios--------------------

// axios
//  .get('https://swapi.dev/api/planets')
//  .then(data => {
//   // data is already parsed for us
//   const filmUrl = data.data.results[0].films[0]
//   console.log(data.data.results[0].films[0]);
//   return axios.get(filmUrl)
//  })
//  .then(data => {
//   console.log(data.data.title)
//  })
//  .catch(err => console.log('In Catch Block: \n\n',err))
// // You don't have to parse JSON
// You don't have to manually segregate the bad status codes

// axios
//  .get("https://swapi.dev/api/planets")
//  .then(({ data }) => {
//   for (let planet of data.results) {
//    console.log(planet.name);
//   }
//   return axios.get(data.next);
//  })
//  .then(({ data }) => {
//   for (let planet of data.results) {
//    console.log(planet.name);
//   }
//   return axios.get(data.next);
//  })
//  .then(({ data }) => {
//   for (let planet of data.results) {
//    console.log(planet.diameter);
//   }
//  })
//  .catch((err) => console.log("ERROR OCCURRED", err));



