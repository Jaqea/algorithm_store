/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [],
    item = [];
  const backtracking = (nums, start) => {
    res.push([...item]);
    for (let i = start; i < nums.length; i++) {
      item.push(nums[i]);
      backtracking(nums, i + 1);
      item.pop();
    }
  };
  backtracking(nums, 0);
  return res;
};
// @lc code=end
