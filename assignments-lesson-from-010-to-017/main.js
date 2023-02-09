// التكليف 01
// Add Variables Here
Number_One = 10;
Number_two = 20;
// Ouput
console.log(Number_One + "" + Number_two); // Normal Concatenate => 1020
console.log(typeof (Number_One + "" + Number_two)); // Normal Concatenate => String
console.log(`${Number_One}${Number_two}`); // Template Literals Way => 1020
console.log(typeof `${Number_One}${Number_two}`); // Template Literals Way => String

console.log(Number_One + "\n" + Number_two);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${Number_One}
${Number_two}`);
/*
  Template Literals Way
  20
  10
*/

// التكليف 02
// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object

// التكليف 03
console.log("`I'm In\n\\\\\nLove \\\\ \"\"\" \'\'\'\n\+\+ With \+\+\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"\`\`");

// التكليف 04
let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_