/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [],
    item = [],
    sum = 0;
  candidates.sort((a, b) => a - b);
  const backtracking = (candidates, target, start) => {
    if (sum > target) return;
    if (sum === target) {
      res.push([...item]);
      return;
    }
    for (
      let i = start;
      i < candidates.length && candidates[i] + sum <= target;
      i++
    ) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }
      item.push(candidates[i]);
      sum += candidates[i];
      backtracking(candidates, target, i + 1);
      item.pop();
      sum -= candidates[i];
    }
  };
  backtracking(candidates, target, 0);
  return res;
};
// @lc code=end
