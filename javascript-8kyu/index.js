// 10-04-2023 If you can't sleep, just count sheep
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

/*
Given a non-negative integer, 3 for example, returns a string with a murmur:
"1 sheep...2 sheep...3 sheep..." Input will always be valid, i.e. no negative integers.
*/

const countSheep = (num) => {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

// 10-04-2023 Find out whether the shape is a cube
// https://www.codewars.com/kata/58d248c7012397a81800005c

/* 
To find the volume (centimeters cubed) of a cuboid you use the formula:
                volume = Length * Width * Height
But someone forgot to use proper record keeping, sso we only have the volume, 
and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer.
*/

const cubeChecker = (volume, side) => {
  return volume > 0 || side > 0 ? Math.cbrt(volume) === side : false;
};

// 10-04-2023 Contamination #1 -String-
// https://www.codewars.com/kata/596fba44963025c878000039

/*
An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.
*/

const contamination = (text, char) => {
  if (text === "" || char === "") return "";
  let str = "";
  for (let i = 0; i < text.length; i++) {
    str += char;
  }
  return str;

  //   Alternate solutions
  //   return char.repeat(text.length);
  //   return text.replace(/./g, char);
};

// 10-04-2023 Thinkful - Logic Drills: Traffic light
// https://www.codewars.com/kata/58649884a1659ed6cb000072

/* 
You're writing code to control your town's traffic lights. 

You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light 
and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/

const updateLight = (current) => {
  switch (current) {
    case "green":
      return "yellow";
      break;
    case "yellow":
      return "red";
      break;
    case "red":
      return "green";
      break;
    default:
      break;
  }

  // Alternate solutions
  //   return current === "green"
  //     ? "yellow"
  //     : current === "yellow"
  //     ? "red"
  //     : "green";
};

// 10-04-2023 You Can't Code Under Pressure #1
// https://www.codewars.com/kata/53ee5429ba190077850011d4

/* 
Code as fast as you can! You need to double the integer and return it.
*/

const doubleInteger = (i) => {
  return i * 2;
};

// 10-04-2023 Calculate BMI
// https://www.codewars.com/kata/57a429e253ba3381850000fb

/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

const bmi = (weight, height) => {
  const calcBmi = weight / (height * height);

  return calcBmi <= 18.5
    ? "Underweight"
    : calcBmi <= 25.0
    ? "Normal"
    : calcBmi <= 30.0
    ? "Overweight"
    : "Obese";
};

// 10-04-2023 Gravity Flip
// https://www.codewars.com/kata/5f70c883e10f9e0001c89673

const flip = (d, a) => {
  return d === "R" ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a);
};
