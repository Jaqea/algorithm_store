/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let res, item;
const backtracking = (n, k, start) => {
  if (k === 0) {
    let temp = [...item];
    res.push(temp);
    return;
  }
  for (let i = start; i <= n - k + 1; i++) {
    item.push(i);
    backtracking(n, k - 1, i + 1);
    item.pop();
  }
};
var combine = function (n, k) {
  res = [];
  item = [];
  backtracking(n, k, 1);
  return res;
};
// @lc code=end
