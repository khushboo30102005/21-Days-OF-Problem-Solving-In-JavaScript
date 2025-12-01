// 1. 🏫 Class Questions
// 1.Check if a Number is Prime

function isPrime(n) {
  n = BigInt(n);

  if (n <= 1n || n === 4n) return false;
  if (n === 2n || n === 3n) return true;
  if (n % 2n === 0n || n % 3n === 0n) return false;

  let i = 5n;
  while (i * i <= n) {
    if (n % i === 0n || n % (i + 2n) === 0n) return false;
    i += 6n;
  }
  return true;
}

function isPrime2(num) {
  let factorCount = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factorCount++;
      const otherPair = num / i;
      if (i !== otherPair) factorCount++;
    }
  }
  return factorCount === 2;
}
// console.log(isPrime(100000007) ? 'PRIME' : 'NOT PRIME');
// console.log(isPrime2(100000007)?"PRIME": "NOT PRIME");

// 2. Check if two Numbers are Co-Prime
function isCoPrime(n1, n2) {
  if (n1 === 1 || n2 === 1) {
    return true;
  } else if (n1 - n2 === 1 || n2 - n1 === 1) {
    return true;
  } else {
    let dividend = n1 > n2 ? n1 : n1;
    let divisor = n1 < n2 ? n1 : n2;
    while (dividend % divisor !== 0) {
      const remainder = dividend % divisor;
      dividend = divisor;
      divisor = remainder;
    }
    return divisor === 1;
  }
}
// console.log(isCoPrime(46, 65));

// 3. Print Fibonacci Series up to N Terms
function FibonacciSeries(num) {
  const f = [0n, 1n];
  for (let i = 2n; i < BigInt(num); i++) {
    f.push(f[i - 1n] + f[i - 2n]);
  }
  return f.join(', ');
}
// console.log(FibonacciSeries(10));

// 4. Find the Nth Fibonacci Number
function nThFibonacciNumber(num) {
  const f = [0n, 1n];
  for (let i = 2n; i < num; i++) {
    f.push(f[i - 1n] + f[i - 2n]);
  }
  return f[f.length - 1];
}
// console.log(nThFibonacciNumber(8));

// 5. Check if a Number Belongs to the Fibonacci Series

function isFibonacciNumber(n) {
  return (
    Number.isInteger(Math.sqrt(5 * n ** 2 + 4)) ||
    Number.isInteger(Math.sqrt(5 * n ** 2 - 4))
  );
}
// console.log(isFibonacciNumber(148));

// 🏠 Homework Questions

// Print All Prime Numbers up to N

function primeUpToN(n) {
  const primeNumberArr = [];
  if (n < 2) {
    return 'Still Empty';
  }
  if (n >= 2) primeNumberArr.push(2);
  if (n >= 3) primeNumberArr.push(3);
  if (n >= 5) {
    for (let k = 1; 6 * k - 1 <= n || 6 * k + 1 <= n; k++) {
      if (isPrime(6 * k - 1) && 6 * k - 1 <= n) primeNumberArr.push(6 * k - 1);
      if (isPrime(6 * k + 1) && 6 * k + 1 <= n) primeNumberArr.push(6 * k + 1);
    }
  }
  return primeNumberArr;
}
// console.log(primeUpToN(61));

// 2. Sum of All Prime Numbers till N

function sumOfPrimeTillN(n) {
  let sum = 0;
  if (n < 2) {
    return sum;
  }
  if (n >= 2) sum += 2;
  if (n >= 3) sum += 3;
  if (n >= 5) {
    for (let k = 1; 6 * k - 1 <= n || 6 * k + 1 <= n; k++) {
      if (isPrime(6 * k - 1) && 6 * k - 1 <= n) sum += 6 * k - 1;
      if (isPrime(6 * k + 1) && 6 * k + 1 <= n) sum += 6 * k + 1;
    }
  }
  return sum;
}
// console.log(sumOfPrimeTillN(61));

// 3. Check if Two Numbers are Twin Primes

function isTwinPrimes(n1, n2) {
  if (isPrime(n1) && isPrime(n2) && Math.abs(n1 - n2) === 2) return true;
  return false;
}
// console.log(isTwinPrimes(11, 13));

// 4. Print All Fibonacci Numbers up to a Given Limit
function fibonacciUpToN(n) {
  n = BigInt(n);
  const fib = [0n, 1n];
  let i = 2;
  while (fib[i - 1] + fib[i - 2] <= n) {
    fib[i] = fib[i - 1] + fib[i - 2];
    i++;
  }
  return fib.join(', ');
}
// console.log(fibonacciUpToN(200));

// 5. Generate Fibonacci Numbers Within a Range
function fibonacciRange(n1, n2) {
  n1 = BigInt(n1);
  n2 = BigInt(n2);
  const endLimit = n1 > n2 ? n1 : n2;
  const startLimit = n1 < n2 ? n1 : n2;
  let count = 0;
  let fib = [0n, 1n];
  let i = 2;
  while (fib[i - 1] + fib[i - 2] <= endLimit) {
    count++;
    fib[i] = fib[i - 1] + fib[i - 2];
    i++;
  }
  console.log(count);
  fib = fib.filter((i) => i >= startLimit);
  return fib.join(', ');
}
function fibonacciRange2(n1, n2) {
  n1 = BigInt(n1);
  n2 = BigInt(n2);
  let count = 0;
  const start = n1 < n2 ? n1 : n2;
  const end = n1 > n2 ? n1 : n2;

  let a = 0n,
    b = 1n;
  const result = [];

  while (a <= end) {
    count++;
    if (a >= start) result.push(a); // only store values in the range
    [a, b] = [b, a + b]; // generate next Fibonacci number
  }
  console.log(count);
  return result.join(', ');
}
// console.log(fibonacciRange2(5000, 10000));
// console.log(fibonacciRange(5000, 1000));

// 6. Find the Sum of Even Fibonacci Numbers up to N Terms
function sumOfEvenFib(n) {
  n = BigInt(n);
  let a = 0n;
  let b = 1n;
  let sum = 0n;
  while (a <= n) {
    if (a % 2n === 0n) sum += a;
    [a, b] = [b, a + b];
  }
  return sum;
}
// console.log(sumOfEvenFib(10));

// 7. Check if the Sum of Two Consecutive Fibonacci Numbers is Prime
function consecutiveFibNumSumIsPrime(n1, n2) {
  const sum = BigInt(n1) + BigInt(n2);
  return isPrime(sum);
}

console.log(consecutiveFibNumSumIsPrime(5, 8));

// 8. Print First N Prime Fibonacci Numbers
function firstNPrimeFibonacci(count) {
  let a = 0n;
  let b = 1n;
  const result = [];

  while (result.length < count) {
    if (isPrime(a)) result.push(a);
    [a, b] = [b, a + b];
  }

  return result;
}
// console.log(firstNPrimeFibonacci(10));

/* // ---------- FAST isPrime (Replaces  old one) ----------
function isPrime(n) {
  n = BigInt(n);

  if (n < 2n) return false;
  if (n === 2n || n === 3n) return true;
  if (n % 2n === 0n) return false;

  // Miller–Rabin setup: write n-1 = d * 2^s
  let s = 0n;
  let d = n - 1n;
  while (d % 2n === 0n) {
    d /= 2n;
    s++;
  }

  // Deterministic bases (correct for BigInt)
  const bases = [2n, 3n, 5n, 7n, 11n, 13n, 17n];

  for (const a of bases) {
    if (a >= n - 2n) continue;

    let x = modPow(a, d, n);
    if (x === 1n || x === n - 1n) continue;

    let isComposite = true;
    for (let r = 1n; r < s; r++) {
      x = modPow(x, 2n, n);
      if (x === n - 1n) {
        isComposite = false;
        break;
      }
    }
    if (isComposite) return false;
  }

  return true;
}

// ---------- Fast modular pow for BigInt ----------
function modPow(base, exp, mod) {
  let result = 1n;
  base %= mod;
  while (exp > 0n) {
    if (exp & 1n) result = (result * base) % mod;
    base = (base * base) % mod;
    exp >>= 1n;
  }
  return result;
}

// ----------  Fibonacci Prime Function (Unchanged) ----------
function firstNPrimeFibonacci(count) {
  let a = 0n;
  let b = 1n;
  const result = [];

  while (result.length < count) {
    if (isPrime(a)) result.push(a);
    [a, b] = [b, a + b];
  }

  return result;
}

console.log(firstNPrimeFibonacci(20));
 */
