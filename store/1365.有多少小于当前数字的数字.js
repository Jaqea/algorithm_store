/*
 * @lc app=leetcode.cn id=1365 lang=javascript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let i,
    hash = [],
    res = [];
  let sortNums = [...nums];
  sortNums.sort((a, b) => a - b);
  for (i = sortNums.length - 1; i >= 0; i--) hash[sortNums[i]] = i;
  for (let i = 0; i < nums.length; i++) {
    res[i] = hash[nums[i]];
  }

  return res;
};
// @lc code=end
