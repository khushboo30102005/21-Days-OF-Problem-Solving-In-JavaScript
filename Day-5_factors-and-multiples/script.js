// 🏫 Class Questions

/*1. Print All Factors of a Number
    Input: N = 24
      Output: [1, 2, 3, 4, 6, 8, 12, 24] */

function factors(num) {
  const factorsArr = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      factorsArr.splice(factorsArr.length / 2, 0, i);
      const pairedValue = num / i;
      if (pairedValue !== i) {
        factorsArr.splice(factorsArr.length / 2 + 1, 0, pairedValue);
      }
    }
  }
  return factorsArr;
}

console.log(factors(10));
// console.log(factors(8128));

/*2. Print All Multiples of a Number up to N
    Input: Number = 4, Limit = 30
      Output: [4, 8, 12, 16, 20, 24, 28]*/

function multiplesUpToN(num, limit) {
  const multiples = [];
  for (let i = num; i <= limit; i += num) {
    multiples.push(i);
  }
  return multiples;
}
console.log(multiplesUpToN(5,60));

/* 3. Find the HCF (Highest Common Factor) or GCD of Two Numbers
        Input: 12, 18
        Output: HCF = 6 */

// Euclidean algorithm ==>
function findHCF(n1, n2) {
  let divisor = n1 < n2 ? n1 : n2;
  let dividend = n1 > n2 ? n1 : n2;
  while (dividend % divisor !== 0) {
    const remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }
  return divisor;
}
console.log(findHCF(18, 3));
// console.log(findHCF(74, 9));

/*  4. Find the LCM (Least Common Multiple) of Two Numbers
        Input: 12, 18
        Output: LCM = 36*/

// LCM = (n1*n2)/HCF
function findLCM(n1, n2) {
  const HCF = findHCF(n1, n2);
  return (n1 * n2) / HCF;
}
console.log(findLCM(12, 18));
// console.log(findLCM(124, 160));

// 🏠 Homework Questions

/* 1. Count the Total Number of Factors of a Number */
function countFactors(num) {
  const factorsArr = factors(num);
  return `${factorsArr.length} Factors`;
}
console.log(countFactors(24));

/* Sum of All Factors of a Number */
function sumOfFactors(num) {
  const factorsArr = [];
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factorsArr.splice(factorsArr.length / 2, 0, i);
      sum += i;
      const pairedValue = num / i;
      if (pairedValue !== i) {
        sum += pairedValue;
        factorsArr.splice(factorsArr.length / 2 + 1, 0, pairedValue);
      }
    }
  }
  return sum;
}
console.log(`Sum = ${sumOfFactors(12)}`);

/* Find the Greatest Factor of a Number (Other Than Itself)
    Input: N = 36
      Output: 18 */

function greatestFactor(num) {
  const factorsArr = factors(num);
  return factorsArr[factorsArr.length - 2];
}
console.log(greatestFactor(36));

/* Check if a Number is a Perfect Number
   If sum of all proper divisors = number → Perfect Number.
 */
function isPerfectNumber(num) {
  const factorsArr = [];
  let sum = 0 - num;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factorsArr.splice(factorsArr.length / 2, 0, i);
      sum += i;
      const pairedValue = num / i;
      if (pairedValue !== i) {
        sum += pairedValue;
        factorsArr.splice(factorsArr.length / 2 + 1, 0, pairedValue);
      }
    }
  }

  return sum === num;
}

console.log(isPerfectNumber(496));
/* 5. Find the HCF and LCM of Three Numbers
HCF(a,b,c) = HCF(HCF(a,b), C)
LCM(a,b,c) = (LCM(a,b)Xc)/HCF(LCM(a,b),c)
*/
function findHcfLcm(n1, n2, n3) {
  const numArr = [n1, n2, n3];
  numArr.sort((a, b) => a - b);
  const HCF = findHCF(findHCF(numArr[1], numArr[2]), numArr[0])
  const LCM = (findLCM(numArr[1], numArr[2])*numArr[0])/findHCF(findLCM(numArr[1], numArr[2]),numArr[0])
  return {HCF, LCM}  
}
console.log(findHcfLcm(8, 12, 16));

