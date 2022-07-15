// function sum(x = 3, y = 5) {
//  // return sum
//  return x + y;
//  }

//  console.log(sum());
//  console.log(sum(5, 15));
//  console.log(sum(7));

// const nums = [5, 10, 11, 2, 1]
// console.log(...nums) // 11
// console.log(Math.min(...nums)) // 1


// const multiply = (x, y) => {
//    if (typeof x === 'undefined') {
//      x = 1;
//    }
//    if (typeof y === 'undefined') {
//      y = 1;
//    }
//    return x * y;
//  };
//  console.log(multiply());

// const multiply = (x, y = 1, z = 1) => {
//  return x * y * z;
// };
// console.log(multiply(10, 4, 2));

// function printVals(a, b, c) {
//  console.log(a);
//  console.log(b);
//  console.log(c);
// }


// const names = ['john', 'jack', 'jane', 'james','abc','bcd'];

// const name = "john";

// printVals(...names)/
// printVals(...name)

// printVals(...names);

// const arrValue = ['My', 'name', 'is', 'Jack'];
// console.log(arrValue);
// ["My", "name", "is","Jack"]
// console.log(...arrValue); // My name is Jack


// function add(...nums) {
//   return nums.reduce((acc, currVal) => acc + currVal);
// }
// console.log(add(10, 5, 23, 23, 1, 1, 1, 223, 434, 34, 3434));




// const nums1 = [1, 2, 3]
// const nums2 = [4, 5, 6]
// // View in

// console.log(['a','b',...nums1,...nums2,8,9,0])

// let users = ['john', 'jane', 'jack']
// users = [...users, 'jamie']


// console.log(users)


// let abs = "abcdef".split("")
// console.log(...abs)
// // [...abs]

// const users = ['john', 'jane', 'jack',2,4,5,6];
// // const admin = users[0];
// const mod = users[1];
// // const sub = users[2];
// const [admin,sub, ...others] = users;
// console.log(admin,sub, others);

// const moderator = { canEdit: true, authority: 5 }
// const user = { canView: true, authority: 2.5 }

// const admin = {name : "abc",...user,...moderator};

// console.log(admin);
// console.log({..."hello"})
;
// console.log({...[1, 2, 3]});
// [ 't', 'e', 's', 't', {canView: true, authority: 2.5 } ]);

// console.log([..."test", {...user}]);

// let func = function (...args) {
//  console.log(args);
// }

// func(1, 2, 3, 4, 5)

// function addAll(...nums) { // rest args
//  // console.log(nums)
//  let total = 0
//  nums.forEach(num => (total += num))
//  return total
// }

// console.log(addAll(1,2,3,4,5))


// const person = {
//  name: 'Jane',
//  age: 25,
//  gender: 'female'
// }

// // let name = person.name;
// // let age = person.age;
// // let gender = person.gender;

// // console.log(name);

// let {name : namel , gender : ling , age} = person

// console.log(ling)

// const arrValue = ['one', 'two', 'three','four'];
// // // destructuring assignment in arrays
// const [x, , , z] = arrValue;
// console.log(x); // one
// // console.log(y); // two
// console.log(z); // three

// let x = arrValue[0];

// console.log(x)



// const person = {
//  name: 'Jane',
//  age: 25,
//  gender: 'female'
// }

// // let name = person.name;
// // let age = person.age;
// // let gender = person.gender;

// // console.log(name);

// let {name,...age} = person

// console.log(info)


// const fullName = ({firstName,lastName}) => {
//  return `${firstName} ${lastName} `
//  }

//  const user = {
//  firstName: 'John',
//  lastName: 'Doe',
//  emailAddress: 'john.doe@gmail.com'
//  }


// console.log( fullName(user))


// const user = {
//  firstName: 'John',
//  lastName: 'Doe',
//  email: 'john.doe@gmail.com',
//  phone: 99982234567,
// };

// const { firstName, lastName, email: emailAddress, phone } = user;
// console.log(firstName, lastName, emailAddress, phone);

// const { firstName, lastName, ...others } = user;
// console.log(firstName, lastName, others);


// function profile({ fullName, age, profession }) {
//  console.log(`${fullName} is ${age} years old and works as a ${profession}`);
// }

// const john = {
//  fullName: 'John Doe',
//  age: 20,
//  profession: 'Programmer',
// };

// profile(john);