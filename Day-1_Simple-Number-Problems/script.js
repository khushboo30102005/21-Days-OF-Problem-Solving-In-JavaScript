const inputNumber = document.querySelector('#number');
const submitBtn1 = document.querySelector('#print-1-to-N');
const submitBtn2 = document.querySelector('#print-N-to-1');
const submitBtn3 = document.querySelector('#print-even');
const submitBtn4 = document.querySelector('#submit-btn-4');
const submitBtn5 = document.querySelector('#submit-btn-5');
const submitBtn6 = document.querySelector('#submit-btn-6');
const submitBtn7 = document.querySelector('#submit-btn-7');
const submitBtn8 = document.querySelector('#submit-btn-8');
const submitBtn9 = document.querySelector('#submit-btn-9');
const submitBtn10 = document.querySelector('#submit-btn-10');
const submitBtn11 = document.querySelector('#submit-btn-11');
const btn = document.querySelectorAll('.btn');
const title = document.querySelector('.print');
const printNum = document.querySelector('#output');

// 1. Print Numbers from 1 to N

submitBtn1.addEventListener('click', (e) => {
  const num = parseInt(inputNumber.value);
  let numArr = [];
  if (num < 0) {
    printNum.textContent = 'Input must be a non-negative integer.';
  } else {
    for (let i = 1; i <= num; i++) {
      numArr.push(i);
    }
    title.textContent = ` Print Numbers from 1 to ${num}:`;
    printNum.textContent = numArr.join(',   ');
    document.body.append(printNum);
  }
});

// 2 Print Numbers from N to 1 without changing the loop condition of above question
submitBtn2.addEventListener('click', (e) => {
  const num = parseInt(inputNumber.value);
  let numArr = [];
  if (num < 0) {
    printNum.textContent = 'Input must be a non-negative integer.';
  } else {
    for (let i = 1; i <= num; i++) {
      numArr.push(num - i + 1);
    }
    title.textContent = ` Print Numbers from ${num} to 1:`;
    printNum.textContent = numArr.join(',   ');
    document.body.append(printNum);
  }
});
// 3.  Print All Even Numbers from 1 to N
submitBtn3.addEventListener('click', (e) => {
  const num = parseInt(inputNumber.value);
  let numArr = [];
  if (num < 0) {
    printNum.textContent = 'Input must be a non-negative integer.';
  } else {
    for (let i = 1; i <= num; i++) {
      if (num < 0) {
        return 'Input must be a non-negative integer.';
      } else if (i % 2 === 0) {
        numArr.push(i);
      }
    }
    title.textContent = `Print All Even Numbers from 1 to ${num}:`;
    printNum.textContent = numArr.join(',   ');
    document.body.append(printNum);
  }
});
// 4. Sum of First N Natural Numbers
submitBtn4.addEventListener('click', (e) => {
  const num = parseInt(inputNumber.value);
  if (num < 0) {
    printNum.textContent = 'Input must be a non-negative integer.';
  } else {
    const sum = (num * (num + 1)) / 2;
    title.textContent = ` Sum of First ${num} Natural Numbers:`;
    printNum.textContent = sum;
    document.body.append(printNum);
  }
});

// 5.  Product (Factorial) of N ==>

submitBtn5.addEventListener('click', (e) => {
  const num = BigInt(inputNumber.value);
  if (num < 0) {
    printNum.textContent = 'Input must be a non-negative integer.';
  } else {
    try {
      function factorial(num) {
        if (num === 0n || num === 1n) {
          return 1n;
        } else {
          return num * factorial(num - 1n);
        }
      }
      const result = factorial(num);
      title.textContent = `Factorial of ${num}:`;
      printNum.textContent = result.toString();
      document.body.append(printNum);
    } catch (error) {
      printNum.textContent = error.message;
      document.body.append(printNum);
    }
  }
});

// 6. Sum of All Even Numbers up to N ==>

submitBtn6.addEventListener('click', (e) => {
  let num = BigInt(inputNumber.value);
  if (num < 0) {
    printNum.textContent = 'Input must be a non-negative integer.';
  } else {
    num = num / 2n;
    let evenSum = num * (num + 1n);
    title.textContent = `Sum of All Even Numbers up to ${num}:`;
    printNum.textContent = evenSum;
    document.body.append(printNum);
  }
});

// 7. Print Squares of Numbers from 1 to N ==>

submitBtn7.addEventListener('click', (e) => {
  const num = BigInt(inputNumber.value);
  let square = [];
  if (num < 0) {
    printNum.textContent = 'Input must be a non-negative integer.';
  } else {
    for (let i = 1n; i <= num; i++) {
      square.push(i ** 2n);
    }
    title.textContent = `Squares of Numbers from 1 to ${num}`;
    printNum.textContent = square.join(',  ');
    document.body.append(printNum);
  }
});

// // Homework / Practice Challenge ==>

// // 1.  Print all numbers divisible by 3 and 5 up to N

submitBtn8.addEventListener('click', (e) => {
  const num = BigInt(inputNumber.value);
  if (num < 0) {
    printNum.textContent = 'Input must be a non-negative integer.';
  } else {
    let divisible = [];
    for (let i = 1n; i <= num; i++) {
      if (i % 3n === 0n && i % 5n === 0n) {
        divisible.push(i);
      }
    }
    title.textContent = `all numbers divisible by 3 and 5 up to ${num}`;
    printNum.textContent = divisible.join(',  ');
    document.body.append(printNum);
  }
});

// //  2. Find the sum of all odd numbers up to N

submitBtn9.addEventListener('click', (e) => {
  let num = BigInt(inputNumber.value);
  if (num < 0) {
    printNum.textContent = 'Input must be a non-negative integer.';
  } else {
    num = (num + 1n) / 2n;
    let oddSum = num * (num + 1n);
    title.textContent = `Sum of All Odd Numbers up to ${num}:`;
    printNum.textContent = oddSum;
    document.body.append(printNum);
  }
});

// // 3.  Print the cubes of numbers from 1 to N

submitBtn10.addEventListener('click', (e) => {
  const num = BigInt(inputNumber.value);
  let cube = [];
  if (num < 0) {
    printNum.textContent = 'Input must be a non-negative integer.';
  } else {
    for (let i = 1n; i <= num; i++) {
      cube.push(i ** 3n);
    }
    title.textContent = `Cubes of Numbers from 1 to ${num}`;
    printNum.textContent = cube.join(',  ');
    document.body.append(printNum);
  }
});

// 4.  Print only the numbers that are both even and perfect squares

submitBtn11.addEventListener('click', () => {
  const num = parseInt(inputNumber.value);
  let evenAndPerfectSqr = [];
  if (num < 0) {
    printNum.textContent = 'Input must be a non-negative integer.';
  } else {
    for (let i = 1; i <= num; i++) {
      if (i % 2 === 0 && Math.sqrt(i) % 1 === 0) {
        evenAndPerfectSqr.push(i);
      }
    }
    title.textContent = `Numbers that are both even and perfect squares`;
    printNum.textContent = evenAndPerfectSqr.join(',  ');
    document.body.append(printNum);
  }
});

btn.forEach((btn) => {
  btn.addEventListener('click', () => {
    printNum.classList.add('block');
  });
});

