/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [],
    used = new Array(nums.length).fill(0),
    item = [];
  nums.sort((a, b) => a - b);
  const backtracking = (nums) => {
    if (item.length === nums.length) {
      res.push([...item]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      // if (i > 0 && nums[i - 1] === nums[i]) continue;
      if (used[i]) continue;
      if (i > 0 && !used[i - 1] && nums[i - 1] === nums[i]) continue;
      item.push(nums[i]);
      used[i] = 1;
      backtracking(nums);
      item.pop();
      used[i] = 0;
    }
  };
  backtracking(nums);
  return res;
};
// @lc code=end
