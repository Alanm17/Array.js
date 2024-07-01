'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Humoyun Rustamov',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Muhammadjon Komilov',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Muhammadaziz Xoldarov',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Jahongir Pulatov',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
console.log(accounts);
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMove = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${Math.abs(mov)}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMove(account1.movements);
//chain methods
const displaySum = function (account) {
  const sumIncome = account?.movements
    .filter(value => value > 0)
    .reduce((acc, curr) => acc + curr, 0);
  const sumSpent = account.movements
    .filter(value => value < 0)
    .reduce((acc, curr) => acc + curr, 0);
  const sumInterest = account.movements
    .filter(value => value > 0)
    .map(value => (value * account.interestRate) / 100)
    .filter(inter => inter >= 1)
    .reduce((acc, inter) => acc + inter, 0);
  labelSumIn.textContent = `${sumIncome}€`;
  labelSumOut.textContent = `${Math.abs(sumSpent)}€`;
  labelSumInterest.textContent = `${sumInterest}€`;
};
// displaySum(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// .innerHTML = innerHTML is an HTML element property that has two uses for web developers: 1) You can use it to get the internal HTML content of any HTML element as an HTML string. 2) You can also use it to set or change elements' innerHTML content
// .insertAdjacentHTML() method provides an efficient way to manipulate web page structure without replacing all the content of an element. It's also the go-to method for inserting HTML elements or text elements into a specific position.
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//======================== destrucitng for practice
// let arr = ['a', 'b', 'r', 'b', 'g'];
// const [a, b, ...r] = arr;
// console.log(a, b, r);
// const [...jake] = [a, b, r];
// console.log(jake);
// console.log(a, jake);
// jake[1] = 's';

// console.log(arr);
// console.log(jake);
//=============================================================== SPLICE ARRAY METHOD
// console.log(arr.slice(2, 3));
// console.log(arr);
// console.log(arr.splice(2, 2));
// console.log(arr.splice(1));

// console.log(arr);
// let arr2 = ['a', 'b', 'r', 'b', 'g'];
// console.log(arr2.reverse());
// console.log(arr2.reverse(2, 3));

// console.log(arr2.join(' '));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [index, value] of movements.entries()) {
//   value > 0
//     ? console.log(`The move ${index + 1} You have deposited ${value}`)
//     : console.log(
//         `The move ${index + 1} You have withdrawn ${Math.abs(value)}`
//       );
// }

// console.log(
//   'for each method!================================================='
// );

// movements.forEach(function (value, index, array) {
//   value > 0
//     ? console.log(
//         `The move ${index + 1} You have deposited ${value} with ${array}`
//       )
//     : console.log(
//         `The move ${index + 1} You have withdrawn ${Math.abs(
//           value
//         )} with ${array}`
//       );
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, [...map]) {
//   console.log(`${key}: ${value} ${map}`);
// });
// const newCurrencies = new Set(['USD', 'GBP', 'UZS', 'UZS']);
// console.log(newCurrencies);
// newCurrencies.forEach(function (value, key) {
//   console.log(`${key}: ${value}`); // there are no any keys in this Array so forEach method takes the value itself as key and logs it javaScript made this to avoid any confusions
// });

// challange
// function for age seppereation with forEach() method
// using shallow copying using slice() method to remove 2 ages from julia
// create one array with full corrected info of kate and julia
// For each remaining dog,log to the console whether it's an adult("Dog number 1 is an adult,and is 5 years old"') or a puppy ("Dog number 2 is still a puppy"）
// Julia = [3, 5, 2, 12, 71] , kate's data [4,2,15,8,3]
// julia = [9,16,6,8,3], kate's [10,5,6,1,4]
// const me = [3, 2, 1, 8];
// const createOne = function (julie, kate) {
//   const shallowCopy = julie.slice();
//   shallowCopy.splice(0, 1);
//   shallowCopy.splice(-2);
//   console.log(shallowCopy);
//   const fullData = shallowCopy.concat(kate);
//   fullData.forEach(function (value, i) {
//     value > 3
//       ? console.log(`Dog number ${i + 1} is an adult,and is ${value} years old`)
//       : console.log(`Dog number ${i + 1} is still a puppy`);
//   });
// };

// const julie = [3, 5, 2, 12, 71];
// const kate = [4, 2, 15, 8, 3];

// createOne(julie, kate);

// const usdCur = 1.1;
// const transferUSD = movements.map(value => value * usdCur);

// console.log(movements);
// console.log(transferUSD);

// const newTestArray = [];
// for (const value of movements) newTestArray.push(value * usdCur);
// console.log(newTestArray);

// movements.forEach(function (value, i) {
//   console.log(`${i + 1} of ${Math.abs(value)}`);
// });
// // console.log(james);
// console.log('=====map method below========');
// const newmove = movements.map(function (value, i) {
//   return `${i + 1} of ${Math.abs(value)}`;
// });
// console.log(newmove);

// const nameOf = 'Steven Thomas Williams';
// const user = nameOf
//   .toLowerCase()
//   .split(' ')
//   .map(value => value[0])
//   .join('');
// console.log(user);
////////// ==========USING forEach() METHOD WITH MAP TO CREATE USERNAME ========================
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(value => value[0])
      .join('');
  });
};

createUserNames(accounts);
// console.log(accounts);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const newFilter = movements.filter(function (value) {
  const age = value > 0 ? 45 : 43;
  return age;
});
// console.log(newFilter);

const withdrawals = movements.filter(value => value < 0);

// console.log(withdrawals);

// const reduceAr = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`${acc + curr} <=== ${curr},<===${i + 1}`);
//   return acc + curr;
// }, 200); // initial value
// console.log(reduceAr);

let reduceB = 0; // variable with ' let '  not ' const ' as it is not changable
for (const mov of movements) reduceB += mov;
// console.log(reduceB);

//for balance
const CalcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur);
  labelBalance.textContent = `${acc.balance}€`;
};

const accChalMAx = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
// console.log(accChalMAx);

// challenge
// calculate the dog age in human years using the followingformula = if the dog is < 2 years old,
// humanAge = 2 * dogAge.
// If the dog is › 2 years old,humanAge = 16 + dogAge * 4.

// console.log(dogs1);

const filtertheDogs = function (dogs) {
  const humanAge = dogs.map(ages => (ages <= 2 ? 2 * ages : 16 + ages * 4));
  const filtertheAGe = humanAge.filter(adult => adult >= 18);
  // console.log(humanAge);
  // console.log(filtertheAGe);
  // const gatherAll =
  //   filtertheAGe.reduce((acc, curr, i, arr) => acc + curr, 0) /
  //   filtertheAGe.length; // here we first calculated and reduced all values and after we are assigning divide operator to get AVG of them . what reduce method is doing here is only to add values as we ordered it to do and after it did it is becoming the single value like 23+23+23 = 69 . so this ' 69 ' is the value came from reduce method and all we need to do it is to devide it to get AVG so after the order is completed which is ) bracket we can use / divide operator and put the / array.length
  const gatherAll = filtertheAGe.reduce(
    (acc, curr, i, arr) => acc + curr / arr.length,
    0
  );
  return gatherAll;
};
const dogs1 = [5, 2, 4, 1, 15, 8, 3];
const dogs2 = [16, 6, 10, 5, 6, 1, 4];
const test1 = filtertheDogs(dogs2);
const test2 = filtertheDogs(dogs1);
// console.log(test1, test2);
// //
const humanAgefilterInDogs = datas =>
  datas
    .map(ages => (ages <= 2 ? 2 * ages : 16 + ages * 4))
    .filter(adult => adult >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
// console.log('the is new shit==============');
const withChainMethods = humanAgefilterInDogs(dogs1);
// console.log(withChainMethods);
// /
// /
// /
// //
// /

// /
// /
// /
// /

// /
// /
// /
// /
// /
// //
/////////====
// let humanAge = 0;
// const calcAvgHumanAge = function (ages) {
//   const humanAge = ages.map(dogage =>
//     dogage <= 2 ? 2 * dogage : 16 + dogage * 4
//   );
//   // return humanAge;
//   const adults = humanAge.filter(dogs => dogs >= 18);
//   // return adults;
//   const calcAvgHumanAgedDogs =
//     adults.reduce((sum, age) => sum + age, 0) / adults.length;
//   return calcAvgHumanAgedDogs;
// };

// console.log(calcAvgHumanAge(dogs1));
// console.log(dogs1);
// const usdCur = 1.1;
// const newArr = movements
//   .filter(value => value > 0)
//   .map(value => value * usdCur)
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(newArr);

//////////

// const firstWithdrawal = movements.find(value => value < 0);
// console.log(firstWithdrawal);

// const findData = accounts.find(object => object.owner === 'Jessica Davis');
// console.log(findData);

// let findDatas;
// for (const find of accounts) {
//   if (find.owner === 'Jessica Davis') {
//     findDatas = find;
//     break;
//   }
// }
// console.log(findDatas);
const updateUI = function (acc) {
  displayMove(acc.movements);
  // curBalance
  CalcDisplayBalance(currentAcc);
  //sum
  displaySum(currentAcc);
};
let currentAcc;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAcc = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (currentAcc?.pin === Number(inputLoginPin.value)) {
    // welcoming
    labelWelcome.textContent = `Welcome back ${currentAcc.owner.split(' ')[0]}`;
    // console.log(currentAcc);
    // clear input fields
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = ''; // to clear the value input
    inputLoginPin.blur(); // to hide selector(|) in pin
    // movements
    updateUI(currentAcc);
  }
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    recieverAcc &&
    currentAcc.balance >= amount &&
    recieverAcc?.username !== currentAcc.username
  ) {
    recieverAcc.movements.push(amount);
    currentAcc.movements.push(-amount);
    updateUI(currentAcc);
  }
});
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAcc.movements.some(mov => mov >= amount * 0.1)) {
    // Add positive movement to current account
    currentAcc.movements.push(amount);
    updateUI(currentAcc);
  }
  inputLoanAmount.value = '';
});
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAcc.movements.some(mov => mov >= amount * 0.1)) {
    // Add positive movement to current account
    currentAcc.movements.push(amount);
    updateUI(currentAcc);
  }
  inputLoanAmount.value = '';
});
console.log(accounts);

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('delete');
  if (
    inputCloseUsername.value === currentAcc.username &&
    Number(inputClosePin.value) === currentAcc.pin
  ) {
    const indexF = accounts.findIndex(
      acc => acc.username === currentAcc.username
    );
    console.log(indexF);
    accounts.splice(indexF, 1);
    containerApp.style.opacity = 0;
  } else {
  }
  inputCloseUsername.value = inputClosePin.value = '';
  labelWelcome.textContent = `Login in to get started`;
});
// const arr = ['banana'];
// const ar = [arr, 'apple', 'sider', 'jake', 'jake', 'apple'];
// let fruits = ar.findIndex(acc => acc === arr);
// fruits('banana');

const array = [[[[2], 3], 4, 4], [4, 4, , 2], 3, 23, 2];
console.log(array.flat(5));
// flat method The Javascript arr.flat() method was introduced in ES2019. The method in JavaScript creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. If no depth is provided, it defaults to 1.
//flat

// console.log(resultOfAll);
//The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

//flatMap
const newArr = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => acc + curr, 0);
console.log(newArr);

// sort() method
const owners = ['Muhammadjon', 'Humoyun', 'Jahongir'];
owners.sort();
console.log(owners);
// here these two values 👇 are values which should be returned they are like => a > b? '-1:1';
const movementss = [200, 450, -400, 3000, -650, -130, 70, 1300];
movementss.sort((a, b) => a - b);
console.log(movementss);
movementss.sort((a, b) => b - a);
console.log(movementss);

// movements.sort = (a, b) => {
//   if (a < b) return 1;
//   if (b < a) return -1;
// };
