/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const LEN1 = num1.length,
    LEN2 = num2.length,
    res = [];

  let i = LEN1 - 1,
    j = LEN2 - 1,
    carry = 0;
  while (i >= 0 || j >= 0) {
    const n1 = i >= 0 ? Number(num1[i]) : 0;
    const n2 = j >= 0 ? Number(num2[j]) : 0;
    const sum = n1 + n2 + carry;
    res.unshift(sum % 10);
    carry = Math.floor(sum / 10);
    --i;
    --j;
  }

  if (carry) {
    res.unshift(carry);
  }

  return res.join("");
};
// @lc code=end
