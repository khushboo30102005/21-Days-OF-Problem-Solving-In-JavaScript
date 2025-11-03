// 1. Find the Maximum of Three Numbers

function findMax() {
  const max1 = Number(document.querySelector('#num1').value);
  const max2 = Number(document.querySelector('#num2').value);
  const max3 = Number(document.querySelector('#num3').value);
  const maxResult = document.querySelector('#maxResult');
  if (max1 && max2 && max3) {
    let max = max1 >= max2 && max1 >= max3 ? max1 : max2 >= max3 ? max2 : max3;
    maxResult.textContent = `✅ Maximum: ${max}`;
  } else {
    maxResult.textContent = '⚠️ Please enter valid numbers.';
  }
}
// Alternate solution: use Math.max() built in method

// 2. Check if a Number is Positive, Negative, or Zero
function checkSign() {
  const num = Number(document.querySelector('#checkNum').value);
  const signResult = document.querySelector('#signResult');
  if (num) {
    const sign = num > 0 ? 'Positive' : num < 0 ? 'negative' : 'zero';
    signResult.textContent = `✅ Number is ${sign}.`;
  } else {
    signResult.textContent = '⚠️ Please Enter A Valid Number.';
  }
}

// 3. Calculate Electricity Bill
function calculateBill() {
  const usedUnits = Number(document.querySelector('#units').value);
  const billResult = document.querySelector('#billResult');
  let electricityBill = 0;
  if (usedUnits) {
    if (usedUnits <= 100) {
      electricityBill = usedUnits * 5;
    } else if (usedUnits <= 200) {
      electricityBill = 100 * 5 + (usedUnits - 100) * 7;
    } else if (usedUnits <= 300) {
      electricityBill = 100 * 5 + 100 * 7 + (usedUnits - 200) * 10;
    } else {
      electricityBill = 100 * 5 + 100 * 7 + 100 * 10 + (usedUnits - 300) * 12;
    }
    billResult.textContent = `Total Bill: ₹${electricityBill}.`;
  } else {
    billResult.textContent = 'Please Enter Your Used Units.';
  }
}

// 4. Check if a Character is a Vowel or Consonant

function checkVowel() {
  const charInput = document.querySelector('#charInput').value;
  const vowelResult = document.querySelector('#vowelResult');
  const regex = /^[A-Za-z]+$/;
  const char = charInput.toLowerCase();
  if (char.length === 1 && regex.test(char)) {
    if ('aeiou'.includes(char)) {
      vowelResult.textContent = 'your Character is a Vowel.';
    } else {
      vowelResult.textContent = 'your Character is a Consonant.';
    }
  } else {
    vowelResult.textContent = 'Enter A Valid Alphabet ,only.';
  }
}

// 5.  Check if a Year is a Leap Year

function checkLeapYear() {
  const yearInput = document.querySelector('#yearInput').value;
  const leapResult = document.querySelector('#leapResult');
  if (yearInput) {
    if (
      (yearInput % 4 === 0 && yearInput % 100 !== 0) ||
      yearInput % 400 === 0
    ) {
      leapResult.innerText = 'yes, this a Year is a Leap Year.';
    } else {
      leapResult.innerText = 'Not a Leap year.';
    }
  } else {
    leapResult.innerText = 'Please Enter A Valid Year.';
  }
}

// // 🏠 Homework / Practice Challenge

// // 1. Check if a Character is Uppercase, Lowercase, Digit, or Special Character

function getCharType() {
  const char = document.querySelector('#charTypeInput').value;
  const result = document.querySelector('#charTypeResult');
  const unicode = char.charCodeAt(0);
  if (!char || char.length !== 1) {
    result.textContent = '⚠️ Please enter exactly one character';
    return;
  }
  if (unicode >= 65 && unicode <= 90) {
    result.textContent = '🔠 Character is Uppercase';
  } else if (unicode >= 97 && unicode <= 122) {
    result.textContent = '🔡 Character is Lowercase';
  } else if (unicode >= 48 && unicode <= 57) {
    result.textContent = '🔢 Character is Digit';
  } else {
    result.textContent = '🔣 Special Character';
  }
}

// // 2. Check Triangle Type Using Sides and Angles
function checkTriangleType() {
  const sideA = Number(document.querySelector('#sideA').value);
  const sideB = Number(document.querySelector('#sideB').value);
  const sideC = Number(document.querySelector('#sideC').value);
  const result = document.querySelector('#triangleResult');
  const sides = [sideA, sideB, sideC].sort((x, y) => x - y);

  if (!sideA || !sideB || !sideC) {
    result.textContent = '⚠️ Please enter all side lengths.';
    return;
  }
  if (sides[0] + sides[1] <= sides[2]) {
    result.textContent = 'Not a valid triangle';
  } else if (sideA === sideB && sideB === sideC) {
    result.textContent = 'Equilateral';
  } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    result.textContent = 'Isosceles';
  } else if (Math.abs(sides[0] ** 2 + sides[1] ** 2 - sides[2] ** 2) < 0.0001) {
    result.textContent = 'Right-angled Triangle';
  } else {
    result.textContent = 'Scalene';
  }
}

// // 3.Calculate Income Tax Based on Slab3
function calculateTax() {
  const income = Number(document.querySelector('#income').value);
  const result = document.querySelector('#taxResult');
  const Slab1 = 250000;
  const Slab2 = 500000;
  const Slab3 = 1000000;
  let tax = 0;
  if (!income) {
    result.textContent = '⚠️ Please enter a valid income amount.';
    return;
  }

  if (income <= Slab1) {
    tax = 0;
  } else if (income <= Slab2) {
    tax = Slab1 * 0 + (income - Slab1) * 0.05;
  } else if (income <= Slab3) {
    tax = Slab1 * 0 + (Slab2 - Slab1) * 0.05 + (income - Slab2) * 0.2;
  } else if (income > Slab3) {
    tax =
      Slab1 * 0 +
      (Slab2 - Slab1) * 0.05 +
      (Slab3 - Slab2) * 0.2 +
      (income - Slab3) * 0.3;
  }
  result.textContent = `💰 Tax Payable: ₹${tax.toFixed(2)}`;
}
