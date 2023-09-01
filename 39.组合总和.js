/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [],
    sum = 0,
    item = [];
  candidates.sort((a, b) => a - b);
  const backtracking = (candidates, target, start) => {
    if (sum === target) {
      res.push([...item]);
      return;
    }

    if (sum > target) return;

    for (
      let i = start;
      i < candidates.length && sum + candidates[i] <= target;
      i++
    ) {
      item.push(candidates[i]);
      sum += candidates[i];
      backtracking(candidates, target, i);
      item.pop();
      sum -= candidates[i];
    }
  };
  backtracking(candidates, target, 0);
  return res;
};
// @lc code=end
