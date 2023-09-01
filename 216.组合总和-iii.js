/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
let res, item;
const backtracking = (k, n, start) => {
  if (n < 0) return;
  if (item.length === k && n === 0) {
    res.push([...item]);
    return;
  }
  for (let i = start; i <= 9 - (k - item.length) + 1; i++) {
    item.push(i);
    backtracking(k, n - i, i + 1);
    item.pop();
  }
};
var combinationSum3 = function (k, n) {
  res = [];
  item = [];
  backtracking(k, n, 1);
  return res;
};
// @lc code=end
