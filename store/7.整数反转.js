/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res;
  if (x < 0) res = String(x).split("").slice(1).join("");
  else res = x + "";

  res = res.split("").reverse().join("") - "0";
  if (res > Math.pow(2, 31) - 1) return 0;

  return x < 0 ? "-" + res : res;
};
// @lc code=end
