// Given an array nums return return an array of the running sum.

// runningSum([1,2]) -> [1,3]
// Explanation: [1, 1+2]

// runningSum([1,2,3,4,5]) -> [1,3,6,10,15]
// Explanation: [1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5]

// runningSum([1,6,2,3,7]) -> [1,7,9,12,19])
// Explanation: [1, 1+6, 1+6+2, 1+6+2+3, 1+6+2+3+7]


// Solution:
const runningSum = arr => {
    let result = [ arr[0] ]
    for(let i = 1; i < arr.length; i++){
        result.push(arr[i] + result[i-1])
    }
    return result
}