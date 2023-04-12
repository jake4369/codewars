// 10-04-2023 Power of two
// https://www.codewars.com/kata/534d0a229345375d520006a0

/*
Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.
*/

const isPowerOfTwo = (n) => {
  return Number.isInteger(Math.log2(n));
};

// 10-04-2023 Sort array by string length
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c

/* 
Write a function that takes an array of strings as an argument and returns a 
sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, 
so you will not have to decide how to order multiple strings of the same length.
*/

const sortByLength = (array) => {
  return array.sort((a, b) => a.length - b.length);
};

// 10-04-2023 No oddities here
// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce

/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

const noOdds = (values) => {
  return values.filter((value) => value % 2 === 0);
};

// 10-04-2023 Between Extremes
// https://www.codewars.com/kata/56d19b2ac05aed1a20000430

/*
Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. 
Input data range guarantees that max-min will cause no integer overflow.
*/

const betweenExtremes = (numbers) => {
  return Math.max(...numbers) - Math.min(...numbers);
};

// 10-04-2023 Fix My Phone Numbers!
// https://www.codewars.com/kata/596343a24489a8b2a00000a2

/*
Oh thank goodness you're here! The last intern has completely ruined everything!

All of our customer's phone numbers have been scrambled, and we need those phone numbers to annoy 
them with endless sales calls!

The Format
Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.

However, something strange has happened and now all of the phone numbers contain lots of random characters, 
whitespace and some are not phone numbers at all!

For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more 
lines that we need to check.

The Task
Given a string, you must decide whether or not it contains a valid phone number. 
If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or 
special characters, else return "Not a phone number".
*/

const isItANum = (str) => {
  //   const number = str
  //     .split("")
  //     .filter(function (char) {
  //       return !isNaN(char);
  //     })
  //     .join("")
  //     .split(" ")
  //     .join("");

  //   return number.startsWith(0) && number.length === 11
  //     ? number
  //     : "Not a phone number";

  // Alternate solutions
  str = str.replace(/[^0-9]/g, "");
  return /^0\d{10}$/.test(str) ? str : "Not a phone number";
};

// 11-04-2023 Find all non-consecutive numbers
// https://www.codewars.com/kata/58f8b35fda19c0c79400020f

/*
Your task is to find all the elements of an array that are non consecutive.

A number is non consecutive if it is not exactly one larger than the previous element in the array. 
The first element gets a pass and is never considered non consecutive.

Create a function named allNonConsecutive

E.g., if we have an array [1,2,3,4,6,7,8,15,16] then 6 and 15 are non-consecutive.

You should return the results as an array of objects with two values i: 
<the index of the non-consecutive number> and n: <the non-consecutive number>.

E.g., for the above array the result should be:

[
  {i: 4, n:6},
  {i: 7, n:15}
]
If the whole array is consecutive or has one element then return an empty array.

The array elements will all be numbers. The numbers will also all be unique and in ascending order. 
The numbers could be positive and/or negetive and the gap could be larger than one.
*/

const allNonConsecutive = (arr) => {
  const nonConsec = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== arr[i] + 1 && arr[i + 1] !== undefined) {
      nonConsec.push({ i: i + 1, n: arr[i + 1] });
    }
  }

  return nonConsec;
};

// 11-04-2023 How many consecutive numbers are needed?
// https://www.codewars.com/kata/559cc2d2b802a5c94700000c

/*
Create the function consecutive(arr) that takes an array of integers and 
return the minimum number of integers needed to make the contents of arr consecutive 
from the lowest number to the highest number.

For example:
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to 
be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. 
Numbers in arr will be unique.
*/

const consecutive = (arr) => {
  arr.sort(function (a, b) {
    return a - b;
  });

  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i + 1] - arr[i] - 1;
  }

  return sum;
};

// 11-04-2023 Insert dashes
// https://www.codewars.com/kata/55960bbb182094bc4800007b

/*
Write a function insertDash(num) that will insert dashes ('-') between each two odd digits in num. 
For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

const insertDash = (num) => {
  const numStr = String(num);
  let result = "";

  for (let i = 0; i < numStr.length; i++) {
    const currentDigit = numStr[i];
    const nextDigit = numStr[i + 1];

    if (
      currentDigit % 2 !== 0 &&
      nextDigit % 2 !== 0 &&
      currentDigit !== "0" &&
      nextDigit !== "0"
    ) {
      result += currentDigit + "-";
    } else {
      result += currentDigit;
    }
  }

  return result.replace(/-$/, "");

  // Alternate solution
  // return String(num).replace(/([13579])(?=[13579])/g, '$1-');
};

// 10-04-2023 Decreasing Inputs
// https://www.codewars.com/kata/555de49a04b7d1c13c00000e

/*
This kata is all about adding numbers.

You will create a function named add. It will return the sum of all the arguments. Sounds easy, doesn't it?

Well Here's the Twist. The inputs will gradually decrease with their index as parameter to the function.

  add(3,4,6); 

  returns ( 3 / 1 ) + ( 4 / 2 ) + ( 6 / 3 ) = 7

  Remember the function will return 0 if no arguments are passed and it must round the result if sum is a float.

  Example
  
    add(); //=> 0
    add(1,2,3); //=> 3
    add(1,4,-6,20); //=> 6
*/

const add = (...args) => {
  return Math.round(
    args.reduce((acc, cur, index) => acc + cur / (index + 1), 0)
  );
};

// 12-04-2023 Sum even numbers
// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3

/*
Complete the function that takes a sequence of numbers as single parameter. 
Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.

Examples
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0
*/

const sumEvenNumbers = (input) => {
  return input
    .filter((num) => num % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
};
