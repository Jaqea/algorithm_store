/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i,
    j,
    max,
    windo = new Map();
  i = j = max = 0;
  for (let char of s) windo.set(char, 0);

  while (j < s.length) {
    windo.set(s[j], windo.get(s[j]) + 1);
    while (windo.get(s[j]) > 1) {
      windo.set(s[i], windo.get(s[i]) - 1);
      i++;
    }
    max = max > j - i + 1 ? max : j - i + 1;
    j++;
  }
  return max;
};
// @lc code=end
