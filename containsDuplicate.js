// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// [2,2,1,4] => true
// [1,2,3,4] => false
// [-5,2,-1,-1] => true

// Solution:
const containsDuplicate = nums => {
    const uniqueArr = new Set(nums)
    return uniqueArr.size != nums.length
}