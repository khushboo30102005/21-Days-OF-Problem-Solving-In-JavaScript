// 🏠 Homework / Practice Challenge

// 1. Find the Sum of Digits
function digitSum(num) {
  const numArr = [];
  while (num > 0) {
    numArr.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum;
}
console.log(digitSum(789));   // OutPut ==> 24

// 2. Find the Average of Digits
function digitAvg(num) {
  const numArr = [];
  while (num > 0) {
    numArr.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum / numArr.length;
}
console.log(digitAvg(4567));   // OutPut ==> 5.5

// 3. Find the Largest and Smallest Digit in a Number
function findLargestSmallest(num) {
  const numArr = [];
  while (num > 0) {
    numArr.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  let largest = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (largest <= numArr[i]) {
      largest = numArr[i];
    }
  }
  let smallest = largest;
  for (let i = 0; i < numArr.length; i++) {
    if (smallest >= numArr[i]) {
      smallest = numArr[i];
    }
  }
  return { largest, smallest };
}
console.log(findLargestSmallest(42343));

// 4. Check if a Number is a Strong Number
// strong number : 1! + 4! + 5! = 145.
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
function isStrong(num) {
  const N = num;
  const numArr = [];
  while (num > 0) {
    numArr.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  strongAddition = 0;
  for (let i = 0; i < numArr.length; i++) {
    strongAddition += factorial(numArr[i]);
  }
  return N === strongAddition;
}
console.log(isStrong(40585));

// 5. Check if a Number is an Automorphic Number

function isAutomorphic(num) {
  let numSqr = num ** 2;
  const numArr = [];
  while (num > 0) {
    numArr.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  const numSqrArr = [];
  while (numSqr > 0) {
    numSqrArr.unshift(numSqr % 10);
    numSqr = Math.floor(numSqr / 10);
  }
  const reqArr = [];
  for (
    let i = numSqrArr.length - 1;
    i >= numSqrArr.length - numArr.length;
    i--
  ) {
    reqArr.unshift(numSqrArr[i]);
  }
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] !== reqArr[i]) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(isAutomorphic(890625));
