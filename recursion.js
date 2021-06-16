/** product: calculate the product of an array of numbers. */

function product(nums, i = 0, output = 1) {
  if (nums.length === i) return output;
  output *= nums[i];
  return product(nums, i + 1, output);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestWord = words[0]) {
  if (words.length === i) return longestWord.length;
  else if (words[i].length > longestWord.length) longestWord = words[i];
  return longest(words, i + 1, longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, output = "") {
  if (str.length === i) return output;
  else if (i % 2 === 0) output += str[i];
  return everyOther(str, i + 1, output);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, x = 0, y = str.length - 1) {
  if (x === str.length && y < 0) return true;
  else if (str[x] !== str[y]) return false;
  return isPalindrome(str, x + 1, y - 1); 
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr.length === i) return -1;
  else if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, output = "") {
  if (i < 0) return output;
  output += str[i];
  return revString(str, i - 1, output);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, output = []) {
  for (let val of Object.values(obj)) {
    if (typeof val === "object") gatherStrings(val, output);
    else if (typeof val === "string") output.push(val);
  }
  return output;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (end < start) return -1;

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] < val) return binarySearch(arr, val, mid + 1, end);
  else if (arr[mid] > val) return binarySearch(arr, val, start, mid - 1);
  else return mid;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
