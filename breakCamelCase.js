// Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// Solution:
function solution(string) {
    return string.split('').map(c => c === c.toUpperCase() ? ' ' + c : c).join('')
}