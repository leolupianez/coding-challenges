// Replace With Alphabet Position

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// Solution:
function alphabetPosition(text) {
    let arr = []
    text
      .toLowerCase()
      .split('')
      .forEach(n => (n.charCodeAt(0) > 96 && n.charCodeAt(0) <= 122) ? arr.push(n.charCodeAt(0)-96) : '')
    return arr.join(' ')
}