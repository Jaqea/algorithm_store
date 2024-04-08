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
  let res = 0;

  for (let str of s) {
    if (!map.has(str)) {
      map.set(str, 1);
    } else map.set(str, map.get(str) + 1);
  }

  for (let value of map.values()) {
    if (value % 2 === 0) res += value;
    else {
      res += value - 1;
    }
  }

  return res % 2 === 0 && res < s.length ? res + 1 : res;
};
// @lc code=end
