// 1. Split Number into Digits

function splitIntoDigits(N) {
  digitsArr = [];
  while (N > 0) {
    digitsArr.unshift(N % 10);
    N = Math.floor(N / 10);
  }
  return digitsArr;
}

console.log(splitIntoDigits(12345));  // Output ==> [ 1, 2, 3, 4, 5 ]

// 2. Remove the Decimal Point Mathematically

function removeDecimal(num) {
  while (!Number.isInteger(num)) {
    num = num * 10;
  }
  return num;
}

console.log(removeDecimal(12.34));         // Output ==> 1235

// 3. Separate Whole and Fractional Parts of a Number
function separateNumber(N) {
  const fractionalPart = Number((N % 1).toFixed(10));
  const wholePart = Number((N - fractionalPart).toFixed(10));
  return `Whole part: ${wholePart} & Fractional part: ${fractionalPart}`;
}
console.log(separateNumber(4324.9787));  // Output ==> Whole part: 4324 & Fractional part: 0.9787

// 4. Count Whole and Fractional Digits Separately
function countDigits(N) {
  const fractionalPart = Number((N % 1).toFixed(10));
  const wholePart = Number((N - fractionalPart).toFixed(10));
  const wholeCount = splitIntoDigits(wholePart).length;
  const fractionalCount = splitIntoDigits(removeDecimal(fractionalPart)).length;
  return `Whole digits count: ${wholeCount} and Fractional digits count is ${fractionalCount}.`;
}
console.log(countDigits(12.345)); // OutPut ==> Whole digits count: 2 and Fractional digits count is 3.

// 5. Generate a Decimal Number from Whole and Fractional Digits
// Input: Whole = [1, 2], Fraction = [3, 4]
// Output: 12.34
function generateDecimal(whole, fractional) {
  let wholeNum = 0;
  for (let i = whole.length - 1; i >= 0; i--) {
    wholeNum += whole[i] * 10 ** (whole.length - 1 - i);
  }
  let fractionalNum = 0;
  for (let i = fractional.length - 1; i >= 0; i--) {
    fractionalNum += fractional[i] * 10 ** (-i - 1);
  }
  return wholeNum + Number(fractionalNum.toFixed(10));
}
console.log(generateDecimal([1, 2, 4], [3, 9, 4]));

