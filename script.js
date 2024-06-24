'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
displayMove(account1.movements);
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
let arr = ['a', 'b', 'r', 'b', 'g'];
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
