// String repeat - https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
// 06/03/2023

/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

function repeatStr(n, s) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
}

// const repeatStr = (n,s) => s.repeat(n) ;

// Is there a vowel in there? - https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript
// 06/03/2023

/* 
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

function isVow(arr) {
  const vowelCodes = {
    97: "a",
    101: "e",
    105: "i",
    111: "o",
    117: "u",
  };
  return arr.map((num) => (vowelCodes[num] ? vowelCodes[num] : num));
}

module.exports = {
  repeatStr,
  isVow,
};
