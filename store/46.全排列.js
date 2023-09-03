/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [],
    used = new Array(nums.length).fill(0),
    item = [];
  const backtracking = (nums) => {
    if (item.length === nums.length) {
      res.push([...item]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      item.push(nums[i]);
      used[i] = 1;
      backtracking(nums);
      item.pop();
      used[i] = 0;
    }
  };
  backtracking(nums, 0);
  return res;
};
// @lc code=end
