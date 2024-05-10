/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let sum,
    carry = 0,
    res = "";
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    sum = carry;
    sum += i >= 0 ? a[i] - "0" : 0;
    sum += j >= 0 ? b[j] - "0" : 0;
    res += (sum % 2) + "";
    carry = Math.floor(sum / 2);
  }

  if (carry > 0) res += carry + "";

  return res.split("").reverse().join("");
};
// @lc code=end
