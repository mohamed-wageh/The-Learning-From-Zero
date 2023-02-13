// التكليف 01
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.floor(100000)); // 100000
console.log(Math.ceil(100000)); // 100000
console.log(Math.round(100000)); // 100000
console.log(Number(100000)); // 100000
console.log(+100000); // 100000
console.log(Math.min(100000)); // 100000
console.log(Math.max(100000)); // 100000
console.log(100000+0); // 100000
console.log(100000+""); // 100000
console.log(100000-0); // 100000

// التكليف 02
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// التكليف 03
console.log(Number.MIN_SAFE_INTEGER + Number.MAX_SAFE_INTEGER +16); // 16

// التكليف 04
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57

// التكليف 05
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// التكليف 06
let flt = 10.4;

console.log(flt.toFixed(0)); // 10
console.log(parseInt(flt)); // 10
console.log(parseInt(flt).toFixed(0)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10

// التكليف 07
console.log((Math.random()*4).toFixed(0)); // 0 || 1 || 2 || 3 || 4