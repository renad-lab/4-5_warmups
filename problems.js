Write a function that takes a string as input and returns the string reversed.

function reverseString(str) {

}

// Test cases
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("12345")); // Output: "54321"



Write a function that takes an array of numbers and returns the maximum number in the array.

function findMax(arr) {

}

// Test cases
console.log(findMax([1, 3, 5, 2, 4])); // Output: 5
console.log(findMax([-10, -5, -8])); // Output: -5
console.log(findMax([100, 200, 150])); // Output: 200

Write a function that takes a string as input and returns the number of vowels in the string (a, e, i, o, u).

function countVowels(str) {

}

// Test cases
console.log(countVowels("hello")); // Output: 2
console.log(countVowels("world")); // Output: 1
console.log(countVowels("JavaScript")); // Output: 3

Write a function that takes a string as input and returns true if it's a palindrome, false otherwise.

function isPalindrome(str) {

}

// Test cases
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("level")); // Output: true

Write a function that takes an array of numbers and returns the sum of all even numbers in the array.

function sumOfEvens(arr) {

}

// Test cases
console.log(sumOfEvens([1, 2, 3, 4, 5, 6])); // Output: 12
console.log(sumOfEvens([2, 4, 6, 8, 10])); // Output: 30
console.log(sumOfEvens([1, 3, 5, 7, 9])); // Output: 0

Write a function that takes an array of consecutive (increasing) numbers starting from 1 and returns the missing number in the sequence.

function findMissingNumber(arr) {

}

// Test cases
console.log(findMissingNumber([1, 2, 3, 5])); // Output: 4
console.log(findMissingNumber([1, 3, 4, 5])); // Output: 2
console.log(findMissingNumber([2, 3, 4, 5])); // Output: 1

Write a function that rotates an array to the right by a given number of steps.

function rotateArray(arr, steps) {

}

// Test cases
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
console.log(rotateArray([1, 2, 3, 4, 5], 3)); // Output: [3, 4, 5, 1, 2]
console.log(rotateArray([1, 2, 3, 4, 5], 1)); // Output: [5, 1, 2, 3, 4]

Write a function that takes a completed sudoku puzzle represented as a 9x9 matrix and returns true if the puzzle is valid, false otherwise.

function isValidSudoku(board) {

}

// Test cases
const sudokuBoard = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];
console.log(isValidSudoku(sudokuBoard)); // Output: true

Write a function that takes two strings and returns the length of the longest common subsequence.

function longestCommonSubsequence(text1, text2) {

}

// Test cases
console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3
console.log(longestCommonSubsequence("abc", "abc")); // Output: 3
console.log(longestCommonSubsequence("abc", "def")); // Output: 0

