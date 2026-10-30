// ==========================================
// Assignment 2: String and Array Problem-Solving Toolkit
// ==========================================

// 1. Reverse a string without using reverse()
// Approach:
// Iterate backward from the last character to the first character of the string.
// Append each character sequentially into a new result string and return it.
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// 2. Check whether a string is a palindrome
// Approach:
// Use two pointers starting at the beginning and the end of the string moving inward.
// Compare characters at both pointers; return false if a mismatch occurs, otherwise true.
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// 3. Count vowels and consonants in a string
// Approach:
// Convert the string to lowercase and loop through each character to check if it is an alphabet letter.
// Increment the vowel counter if the letter is in 'aeiou', otherwise increment the consonant counter.
function countVowelsAndConsonants(str) {
  let vowels = 0;
  let consonants = 0;
  const lowerStr = str.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    const char = lowerStr[i];
    if (char >= 'a' && char <= 'z') {
      if ('aeiou'.includes(char)) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }

  return { vowels, consonants };
}

// 4. Find the second-largest distinct number in an array
// Approach:
// Track the first and second largest values in a single pass initialized to negative infinity.
// Update both variables when a larger value appears and update only the second for distinct intermediate values.
function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

// 5. Remove duplicate elements from an array without using Set
// Approach:
// Initialize an empty result array and iterate through every element of the input array.
// Check if the current element already exists in the result array before pushing it.
function removeDuplicates(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}

// 6. Find the sum of all even numbers in an array
// Approach:
// Initialize an accumulator sum variable to zero and iterate through the array elements.
// Check each number using the modulo operator and add it to the sum if it is divisible by two.
function sumOfEvenNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }

  return sum;
}

// 7. Find the frequency of a given element in an array
// Approach:
// Initialize a counter to zero and iterate through each element in the input array.
// Compare each item with the target element and increment the counter upon every match.
function findFrequency(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  return count;
}

// 8. Check whether two strings are anagrams
// Approach:
// Normalize both strings by removing non-alphanumeric characters and converting them to lowercase.
// Use a frequency map to count occurrences in the first string and decrement counts with the second string.
function areAnagrams(str1, str2) {
  const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  const charCount = {};

  for (let char of cleanStr1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of cleanStr2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

// 9. Move all zeros to the end while maintaining the order of non-zero elements
// Approach:
// Traverse the array to shift all non-zero elements to the front using a write-pointer index.
// Fill all remaining indices up to the end of the array with zeros in-place.
function moveZeros(arr) {
  let insertPos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertPos] = arr[i];
      insertPos++;
    }
  }

  while (insertPos < arr.length) {
    arr[insertPos] = 0;
    insertPos++;
  }

  return arr;
}

// ==========================================
// Sample Tests
// ==========================================
console.log("1. reverseString:", reverseString("hello")); // "olleh"
console.log("2. isPalindrome:", isPalindrome("madam")); // true
console.log("3. countVowelsAndConsonants:", countVowelsAndConsonants("hello world")); // { vowels: 3, consonants: 7 }
console.log("4. secondLargest:", secondLargest([10, 5, 20, 8, 20])); // 10
console.log("5. removeDuplicates:", removeDuplicates([1, 2, 2, 3, 1])); // [1, 2, 3]
console.log("6. sumOfEvenNumbers:", sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // 12