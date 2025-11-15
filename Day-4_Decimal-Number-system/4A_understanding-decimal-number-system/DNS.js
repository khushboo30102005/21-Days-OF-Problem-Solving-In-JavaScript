const digitsList = [2, 4, 6, 5];
const digitsList2 = [5,4,3,2,1];


function digitToNumber(digit){
let number = 0;
for (let i = digit.length - 1; i >= 0; i--) {
  number += digit[i] * 10**i;
}
return number
}
console.log(`Digit: ${digitToNumber(digitsList2)}`);
