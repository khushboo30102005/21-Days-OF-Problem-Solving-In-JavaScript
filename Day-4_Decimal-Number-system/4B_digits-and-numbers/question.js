// 2. Reverse a Number

function reverseNumber(num) {
  actualNum = num;
  let reversed = 0;
  while (num > 0) {
    let digit = num % 10; // receive last digit
    reversed = reversed * 10 + digit; // create reverse number
    num = Math.floor(num / 10); //  reset the number
  }
  return `Reverse of ${actualNum} is: ${reversed}`;
}

console.log( reverseNumber(12345));

// 6. Check if a Number is a Palindrome
// Input: N = 121
// Output: Palindrome
function checkPalindrome(num) {
  actualNum = num;
  let reverse = 0;
  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }
  return actualNum === reverse
}
console.log(checkPalindrome(121));
// 7. Check if a Number is an Armstrong Number (also called a Narcissistic Number)
// ✨ Armstrong Number: 1³ + 5³ + 3³ = 153, 1⁴ + 6⁴ + 3⁴ + 4⁴ = 1634.
function isArmstrong(num) {
  const N = num;
  let numArr = [];
  while (num > 0) {
    numArr.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  armstrongAddition = 0;
  for (let i = 0; i < numArr.length; i++) {
    armstrongAddition += numArr[i] ** numArr.length;
  }
 return N === armstrongAddition
}
console.log(isArmstrong(153));
