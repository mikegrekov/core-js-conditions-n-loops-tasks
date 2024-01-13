/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number < 0) return false;
  return true;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > b) return a;
  if (b > a && b > c) return b;
  if (c > b && c > a) return c;
  return 5;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;
  if (queen.y - queen.x === king.y - king.x) return true;
  if (queen.y + queen.x === king.y + king.x) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (Math.min(a, b, c) <= 0) return false;
  if (a === b && c <= 2 * a) return true;
  if (a === c && b <= 2 * a) return true;
  if (b === c && a <= 2 * b) return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const roman = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
  };
  if (num < 11) return roman[num];
  if (num < 20 && num >= 11) return roman[10] + roman[num - 10];
  if (num < 30 && num >= 21) return roman[10] + roman[10] + roman[num - 20];
  if (num < 40 && num >= 31)
    return roman[10] + roman[10] + roman[10] + roman[num - 30];

  return false;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let num = 1;
  const nums = {
    '-': 'minus',
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    '.': 'point',
    ',': 'point',
  };

  switch (numberStr) {
    case '0':
      num = 1;
      break;
    default:
      num = 1;
  }

  let resStr = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    resStr += nums[numberStr[i]];
    if (i !== numberStr.length - 1) resStr += ' ';
  }
  if (num === 1) return resStr;
  return resStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let resultStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    resultStr += str[i];
  }
  return resultStr === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = `${num}`;
  const strDigit = `${digit}`;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === strDigit) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  function getSum(start, end, arr1) {
    let result = 0;
    for (let i = start; i <= end; i += 1) {
      result += arr1[i];
    }
    return result;
  }

  for (let i = 1; i < arr.length; i += 1) {
    if (getSum(0, i - 1, arr) === getSum(i + 1, arr.length - 1, arr)) return i;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const n = size;
  const arr = Array(n);
  for (let i = 0; i < n; i += 1) {
    arr[i] = [];
  }

  let row = 0;
  let col = 0;
  let rowEnd = n - 1;
  let colEnd = n - 1;
  let counter = 1;
  while (col <= colEnd && row <= rowEnd) {
    for (let i = col; i <= colEnd; i += 1) {
      arr[row][i] = counter;
      counter += 1;
    }
    row += 1;
    for (let i = row; i <= rowEnd; i += 1) {
      arr[i][colEnd] = counter;
      counter += 1;
    }
    colEnd -= 1;
    for (let i = colEnd; i >= col; i -= 1) {
      arr[rowEnd][i] = counter;
      counter += 1;
    }
    rowEnd -= 1;
    for (let i = rowEnd; i >= row; i -= 1) {
      arr[i][col] = counter;
      counter += 1;
    }
    col += 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const finalMatrix = matrix;
  const rows = matrix.length;
  const cols = matrix[0].length;

  const arr = Array(rows);
  for (let i = 0; i < rows; i += 1) {
    arr[i] = [];
  }

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      arr[j][rows - 1 - i] = matrix[i][j];
    }
  }

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      finalMatrix[i][j] = arr[i][j];
    }
  }

  return finalMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const A = arr;
  let i = 0;
  let j = A.length - 1;
  let s = true;
  let t;
  while (i < j && s) {
    s = false;
    for (let k = i; k < j; k += 1) {
      if (A[k] > A[k + 1]) {
        t = A[k];
        A[k] = A[k + 1];
        A[k + 1] = t;
        s = true;
      }
    }
    j -= 1;
    if (s) {
      s = false;
      for (let k = j; k > i; k -= 1) {
        if (A[k] < A[k - 1]) {
          t = A[k];
          A[k] = A[k - 1];
          A[k - 1] = t;
          s = true;
        }
      }
    }
    i += 1;
  }
  return A;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let tempStr = str;
  let iterationFlag = true;
  let iterationIndex = -1;
  const len = str.length;

  const tempArr = [str, '', '', '', ''];
  for (let j = 1; j <= iterations; j += 1) {
    if (!iterationFlag) break;
    let tempOdd = '';
    let tempEven = '';
    if (iterationFlag) {
      for (let i = 0; i < len; i += 1) {
        if (i % 2 !== 0) {
          tempOdd += tempStr[i];
        } else {
          tempEven += tempStr[i];
        }
      }
      tempStr = `${tempEven}${tempOdd}`;
      if (tempStr !== str) {
        tempArr[j] = tempStr;
      } else {
        iterationFlag = false;
        iterationIndex = j;
      }
    }
  }
  if (iterationFlag) return tempArr[iterations];
  if (!iterationFlag) return tempArr[iterations % iterationIndex];
  return false;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const str = `${number}`;
  const arr = Array(...str);
  const lengthArr = arr.length;
  let minNum = -1;
  let minInd = -1;

  for (let i = lengthArr - 1; i > 0; i -= 1) {
    if (arr[i] > arr[i - 1]) {
      minNum = arr[i - 1];
      minInd = i - 1;
      break;
    }
  }
  if (minNum === -1) return number;

  let smallest = minInd + 1;
  let smallSubNumber = -1;

  for (let j = minInd + 1; j < lengthArr; j += 1) {
    if (arr[j] > minNum && arr[j] < arr[smallest]) smallest = j;
  }
  smallSubNumber = arr[smallest];
  arr[minInd] = smallSubNumber;
  arr[smallest] = minNum;

  const temp = [...arr];
  const temp1 = [...arr];

  const nextInd = minInd + 1;
  const resArr = [
    ...temp.splice(0, minInd + 1),
    ...temp1.splice(nextInd).sort((a, b) => a - b),
  ];

  return +resArr.join('');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
