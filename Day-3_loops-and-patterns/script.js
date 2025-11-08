

//  1. Print Right-Angled Star Triangle
function rightAngledStarTriangle(row) {
  let output = '';
  for (let i = 1; i <= row; i++) {
    output += '*';
    print(output);
  }
}

// 2. Print Inverted Right-Angled Triangle
// ✅ Great for understanding logic step-by-step ==>
function starsInput(row) {
  let output = '';
  for (let i = 1; i <= row; i++) {
    output += '*';
  }
  return output;
}
function InvertedRightAngledTriangle(input) {
  let stars = starsInput(input);
  for (let i = 0; i < input; i++) {
    let invertedStars = stars.slice(0, input - i);
    print(invertedStars);
  }
}
// ✅ Clean, short, and professional ==>
function InvertedRightAngledTriangleWithRepeat(n) {
  for (let i = n; i > 0; i--) {
    print('*'.repeat(i));
  }
}

// 3. Print Pyramid Pattern
function printPyramidPattern(row) {
  for (let j = 1; j <= row; j++) {
    print(' '.repeat(row - j) + '*'.repeat(j + j - 1));
  }
}

// 4. Print Inverted Pyramid Pattern

function invertedPyramidPattern(row) {
  for (let j = row; j > 0; j--) {
    print(' '.repeat(row - j) + '*'.repeat(j + j - 1));
  }
}

// 5. Print Hollow Square Pattern
function hollowSquarePattern(row) {
  for (let i = 1; i <= row; i++) {
    print(
      i === 1 || i === row ? '*'.repeat(row) : '*' + ' '.repeat(row - 2) + '*'
    );
  }
}

// 6. Print Hollow Pyramid Pattern

function printHollowPyramidPattern(n) {
  for (let i = 1; i <= n; i++) {
    print(
      ' '.repeat(n - i) +
        (i === 1
          ? '*'
          : i === n
          ? '*'.repeat(n + n - 1)
          : '*' + ' '.repeat(i + i - 3) + '*')
    );
  }
}

// 7. Print Alternating Binary Triangle

function alternatingBinaryTriangle(row) {
  for (let i = 1; i <= row; i++) {
    let output = '';
    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 === 0) {
        output += '1 ';
      } else {
        output += '0 ';
      }
    }

    print(output);
  }
}

// 🏠 Homework / Practice Challenge

// 1. Print Hollow Inverted Pyramid

function printHollowInvertedPyramidPattern(n) {
  for (let i = n; i > 0; i--) {
    print(
      ' '.repeat(n - i) +
        (i === 1
          ? '*'
          : i === n
          ? '*'.repeat(n + n - 1)
          : '*' + ' '.repeat(i + i - 3) + '*')
    );
  }
}

// 2.Print Butterfly Pattern
function butterflyPattern(row) {
  for (let i = 1; i <= row; i++) {
    const upperPart =
      i === row
        ? '*'.repeat(2 * i - 1)
        : '*'.repeat(i) + ' '.repeat(2 * row - 2 * i - 1) + '*'.repeat(i);
    print(upperPart);
  }
  for (let i = 1; i <= row; i++) {
    const upperPart =
      '*'.repeat(row - i) + ' '.repeat(i + i - 1) + '*'.repeat(row - i);
    print(upperPart);
  }
}

// 3. Print Diamond Pattern
function diamondPattern(row) {
  for (let i = 1; i <= row; i++) {
    print(' '.repeat(row - i) + '*'.repeat(i + i - 1));
  }
  for (let i = row - 1; i > 0; i--) {
    print(' '.repeat(row - i) + '*'.repeat(i + i - 1));
  }
}

// 4. Print Hourglass Pattern
function hourglassPattern(row) {
  for (let i = row; i > 0; i--) {
    print(' '.repeat(row - i) + '*'.repeat(i + i - 1));
  }
  for (let i = 2; i <= row; i++) {
    print(' '.repeat(row - i) + '*'.repeat(i + i - 1));
  }
}

// 5.   Print Hollow Diamond Pattern
function hollowDiamondPattern(row) {
  for (let i = 1; i <= row; i++) {
    print(
      i === 1
        ? ' '.repeat(row - i) + '*'
        : ' '.repeat(row - i) + '*' + ' '.repeat(2 * i - 3) + '*'
    );
  }
  for (let i = row - 1; i > 0; i--) {
    print(
      i === 1
        ? ' '.repeat(row - i) + '*'
        : ' '.repeat(row - i) + '*' + ' '.repeat(2 * i - 3) + '*'
    );
  }
}

// 6. Print Rhombus Pattern
function rhombusPattern(row) {
  for (let i = 1; i <= row; i++) {
    print(' '.repeat(row - i) + '*'.repeat(row));
  }
}
// 7. Print Multiplication Table (Single and Upto N)
//  Single

function singleTable(num) {
  print(`Multiplication Table of ${num}`);
  for (let i = 1; i <= 10; i++) {
    print(`${num} x ${i} = ${num * i}`);
  }
}
//  Upto N
function uptoNTable(num) {
  for (let i = 1; i <= num; i++) {
    print(`Multiplication Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
      print(`${i} x ${j} = ${i * j}`);
    }
  }
}
function print(text = "") {
  document.getElementById("output").innerText += text + "\n";
}

function clearOutput() {
  document.getElementById("output").innerText = "";
}
// Main Display
function showAllPatterns() {
  clearOutput();

  print("⭐ 1. Right-Angled Star Triangle");
  rightAngledStarTriangle(10);

  print("\n⭐ 2. Inverted Right-Angled Triangle");
  InvertedRightAngledTriangleWithRepeat(10);

  print("\n⭐ 3. Pyramid Pattern");
  printPyramidPattern(10);

  print("\n⭐ 4. Inverted Pyramid Pattern");
  invertedPyramidPattern(10);

  print("\n⭐ 5. Hollow Square Pattern");
  hollowSquarePattern(10);

  print("\n⭐ 6. Hollow Pyramid Pattern");
  printHollowPyramidPattern(10);

  print("\n⭐ 7. Alternating Binary Triangle");
  alternatingBinaryTriangle(10);

  print("\n⭐ 8. Hollow Inverted Pyramid");
  printHollowInvertedPyramidPattern(10);

  print("\n⭐ 9. Butterfly Pattern");
  butterflyPattern(10);

  print("\n⭐ 10. Diamond Pattern");
  diamondPattern(10);

  print("\n⭐ 11. Hourglass Pattern");
  hourglassPattern(10);

  print("\n⭐ 12. Hollow Diamond Pattern");
  hollowDiamondPattern(10);

  print("\n⭐ 13. Rhombus Pattern");
  rhombusPattern(10);

  print("\n⭐ 14. Multiplication Table (Single)");
  singleTable(5);

  print("\n⭐ 15. Multiplication Tables (Upto 3)");
  uptoNTable(3);
}

