// Remove Duplicate Words

// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

// Solution:
function removeDuplicateWords (s) {
    return s
      .split(' ')
      .filter((item, i, arr) => arr.indexOf(item) === i)
      .join(' ');
}