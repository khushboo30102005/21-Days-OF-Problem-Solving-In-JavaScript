// 🎯 Day 15 – Linear Search
// 🏫 Class Questions

/* 1️⃣ Find an Element in an Array Using Linear Search

    Input: array = [4, 2, 7, 1, 9], element = 7
    Output: Found at index 2
 */

function linerSearch(qrr, e) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === e) {
      console.log(` Found at index ${i}`);
      return true;
    }
  }
  console.log('Not Found..');
  return false;
}

const arr = [4, 2, 7, 1, 9];
// linerSearch(arr,9);

/* 2️⃣ Find the First Occurrence of an Element

    Input: [3, 5, 3, 7, 3], search = 3
    Output: index 0
 */
function firstOccurrence(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      console.log(`Index: ${i}`);
      return i;
    }
  }
  console.log('Not Found');
  return -1;
}

// firstOccurrence([3, 5, 3, 7, 3], 3)

/* 3️⃣ Find the Last Occurrence of an Element

    Input: [3, 5, 3, 7, 3], search = 3
    Output: index 4
 */
function lastOccurrence(arr, elem) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === elem) {
      console.log(`Index: ${i}`);
      return i;
    }
  }
  console.log('Not Found');
  return -1;
}

// lastOccurrence([3, 5, 3, 7, 3], 3)

/* 4️⃣ Count How Many Times an Element Appears

    Input: [1, 2, 2, 3, 2, 4], element = 2
    Output: 3 times
 */

function elemCount(arr, elem) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      count++;
    }
  }
  console.log(`${count} times.`);
  return count;
}

elemCount([1, 2, 2, 3, 2, 4], 2);

/* 5️⃣ Find All Indexes Where the Element Appears

    Input: [5, 7, 5, 9, 5], search = 5
    Output: [0, 2, 4]
 */

function allIndexes(arr, elem) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      res.push(i);
    }
  }
  console.log(res);
  return res;
}
// allIndexes([5, 7, 5, 9, 5], 5);

/* 6️⃣ Linear Search in Array of Objects

Input:

[
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
];

Search id = 2

Output: {id:2, name:"B"}
 */
function lsOnArrOfObj(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === key) {
      console.log(arr[i]);
      return arr[i];
    }
  }
  return null;
}
// lsOnArrOfObj([
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 3, name: "C" },
// ], 2)

// 🏠 Homework Questions

/* 1️⃣ Check If an Element Exists in a 2D Array

Input:

[
  [1, 2],
  [3, 4],
  [5, 6]
]
search = 4

Output: Found at position (1,1)
 */
function isElementExists(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === elem) {
        console.log(`Found at Position: (${i}, ${j})`);
        return `(${i}, ${j})`;
      }
    }
  }
  return null;
}
// console.log(isElementExists(
//   [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ],
//   4
// ));

/* 2️⃣ Find the Minimum Value Using Linear Scan

    Input: [9, 3, 5, 1, 7]
    Output: 1
 */

function minUsingLS(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// console.log(minUsingLS([1, 3, 5, 19, 7]));

/* 3️⃣ Find the Maximum Value Using Linear Scan

    Input: [4, 9, 2, 11, 6]
    Output: 11
 */

function maxUsingLS(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// console.log(maxUsingLS([1, 3, 5, 19, 7]));

/* 4️⃣ Find the First Element Greater Than X

    Input: [2, 5, 9, 12, 15], X = 10
    Output: 12
 */

function elementGreaterX(arr, x) {
  let res;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > x) {
      res = arr[i];
      return arr[i];
    }
  }
  return null;
}
// console.log(elementGreaterX([2, 5, 9, 12, 15], 10));

/* 5️⃣ Check if Array is Strictly Increasing (Using Linear Scan)

    Input: [1, 2, 3, 5, 4]
    Output: false
 */
function isStrictlyIncreasing(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
// console.log(isStrictlyIncreasing([1, 2, 3, 5, 4]));

/* 6️⃣ Find the First String That Starts With a Given Character

    Input: ["apple", "ball", "cat", "apply"], char = 'a'
    Output: "apple"
 */
function startWithGivenChar(arr, char) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].charAt(0) === char){
      return arr[i]
    }
  }
  return null
}

console.log(startWithGivenChar(['apple', 'ball', 'cat', 'apply'], 'a'));
