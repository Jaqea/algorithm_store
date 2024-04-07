/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const map = new Map();
  let res = (odd = 0);

  for (let str of s) {
    if (!map.has(str)) {
      map.set(str, 1);
    } else map.set(str, map.get(str) + 1);
  }

  for (let value of map.values()) {
    if (value % 2 === 0) res += value;
    else odd = odd > value ? odd : value;
  }

  // if (odd) res += odd;

  return res;
};
// @lc code=end
