// التكليف 01
// Test Case 1
let num = 9; // "009"

// Test Case 2
// let num = 20; // "020"

// Test Case 3
// let num = 110; // "110"
num < 10 ? console.log(`00${num}`) : num > 10 && num <100 ? console.log(`0${num}`) : num >= 100 ? console.log(`${num}`) : console.log(`${num}`)

// التكليف 02
let num1 = 9;
let str = "9";
let str2 = "20";

// Output
if (num1 == str) {
  console.log(`"${num1} Is The Same Value As ${str}"`)
}
if (typeof num1 != typeof str) {
  console.log(`"${num1} Is The Same Value As ${str} But Not The Same Type"`)
}
if (num1 != str2 || typeof num1 != typeof str2) {
  console.log(`"${num1} Is Not The Same Value Or The Same Type As ${str2}" `)
}
if (typeof str == typeof str2 &&  str != str2) {
  console.log(`"${str} Is The Same Type As ${str2} But Not The Same Value" `)
}

// التكليف 03
let num0 = 10;
let num2 = 30;
let num3 = "30";

// Needed Output
if (num3 > num0 && typeof num3 != typeof num2) {
  console.log(`"${num3} Is Larger Than 10 And type ${typeof num3} Not The Same Type As ${typeof num2}"`)
}else if(num3 > num0 && num3 == num2 && typeof num3 == typeof num2){
  console.log(`"${num3} Is Larger Than ${num0} And Value Is The Same As ${num2} And Type ${typeof num3} Not The Same Type As ${typeof num2}"`)
}else if(num3 !== num0 && typeof num3 != typeof num2){
  console.log(`"${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}"`)
}

// التكليف 04
// Edit What You Want Here

let num5 = 15;
let num6 = 10;
let num7 = 15;
let num8 = 41;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num5 > num6) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num5 > num6 && num5 < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num5 > num6 && num5 === num7) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num5 + num6) < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num5 + num7) < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num5 + num6 + num7) < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num8 - (num5 + num7) + num6 === 21) {
  console.log("True");
} else {
  console.log("False");
}