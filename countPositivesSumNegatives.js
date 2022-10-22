// Count of positives / sum of negatives

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Solution:
function countPositivesSumNegatives(input) {
    if (input && input.length > 0){
        let count = [0, 0];
        input.forEach(n => n > 0 ? count[0] += 1 : count[1] += n);
        return count;
    }else{
        return [];
    }
}