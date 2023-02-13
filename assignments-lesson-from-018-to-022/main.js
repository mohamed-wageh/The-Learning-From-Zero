// التكليف 01
// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

// التكليف 02
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * num - num); // 6

// Solution Three
console.log(num % num + num + num); // 6

// Solution Four
console.log("Write Your Code Here"); // 6

// Solution Five
console.log("Write Your Code Here"); // 6

// Solution Six
console.log("Write Your Code Here"); // 6.

// التكليف 03
let num1 = "10";

// Solution One
console.log("Write Your Code Here"); // 20

// Solution Two
console.log("Write Your Code Here"); // 20

// Solution Three
console.log("Write Your Code Here"); // 20

// Solution Four
console.log("Write Your Code Here"); // 20

// التكليف 04
let points = 10;

// Write Your Code Here

console.log(points); // 13

// Write Your Code Here

console.log(points); // 8;.


// Plus And Minus Puzzle
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); //100
/*
  [++a]
  - Value: 11
  - Explain: increment then print
  [+]
  - Explain: Addition Operator
  [+b++]
  -value:20
  -Explain:type correction then print then increment
    [+]
  - Explain: Addition Operator
    [+c++]
  -value:80
  -Explain:type correction then print then increment
    [-]
  - Explain: subtraction Operator
  [+a++]
  -value:11
  -Explain:a change from first expression from 10 to 11 and
  type correction then print then increment
  all expression will print 100
  */

// a = 12;
// b = 21;
// c = 81;

console.log(++a + -b + +c++ - -a++ + +a);
/*
  [++a]
  - Value: 13
  - Explain: increment then print
  [+]
  - Explain: Addition Operator
  [-b]
  -value:-21
  -Explain:type correction then print 
    [+]
  - Explain: Addition Operator
    [+c++]
  -value:81
  -Explain:type correction then print then increment
    [-]
  - Explain: subtraction Operator
  [-a++]
  -value:-13
  -Explain:change the sign and print and increment
  [+]
  - Explain: Addition Operator
  [+a]
  - Value: 14
  - Explain: increment then print
  all expression is [13 + -21 +81 - -13 + 14] and will print 100
*/

// a=14
// b=21
// c=82

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
  [--c]
  - Value: 81
  - Explain: decrement then print
  [+]
  - Explain: Addition Operator
  [+b]
  -value:21
  -Explain:type correction then print 
    [+]
  - Explain: Addition Operator
    [--a]
  -value:13
  -Explain: decrement then print
    [*]
  - Explain: multiply Operator
  [+b++]
  -value:21
  -Explain:coercion and print and increment
  [-]
  - Explain: subtract Operator
  [+b]
  - Value: 22
  - Explain: coercion then print
  [*]
  - Explain: multiply Operator
  [a]
  - Value: 13
  - Explain: print
  [+]
  - Explain: Addition Operator
  [--a]
  -value:12
  -Explain: decrement and print
  [-]
  - Explain: subtract Operator
  [+true]
  -value:1
  - Explain: coercion type to number
  all expression is [81+21+13*21-22*13+12-1] and will print 100
*/

// Play With Variables Values
let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(e * -d); // 2000
console.log(-d+ +e + f +f + -g + -g + -g + -g + -g + -g + -g); // 173

