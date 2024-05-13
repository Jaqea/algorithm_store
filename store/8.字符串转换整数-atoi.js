/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const MAX = Math.pow(2, 31) - 1,
    MIN = -Math.pow(2, 31);
  let sig, lastIndex, res;

  s = s.trim();
  sig = s[0];

  if (sig === "-" || sig === "+") s = s.slice(1);

  for (lastIndex = 0; lastIndex < s.length; lastIndex++) {
    if (s[lastIndex] < "0" || s[lastIndex] > "9") break;
  }
  s = s.slice(0, lastIndex);

  res = Number(s);
  res = sig === "-" ? -res : res;

  if (res >= MAX) res = MAX;
  else if (res <= MIN) res = MIN;

  return res;
};
// @lc code=end
