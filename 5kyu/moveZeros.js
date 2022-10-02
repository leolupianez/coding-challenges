// Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// Solution:
const moveZeros = arr => arr.filter(n => n !== 0).concat(arr.filter(n => n === 0))