/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [],
    item = [];
  nums.sort((a, b) => a - b);
  const backtracking = (nums, start) => {
    res.push([...item]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i - 1] === nums[i]) continue;
      item.push(nums[i]);
      backtracking(nums, i + 1);
      item.pop();
    }
  };
  backtracking(nums, 0);
  return res;
};
// @lc code=end
