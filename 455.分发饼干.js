/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let i = (j = num = 0);
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  while (j < s.length) {
    if (g[i] <= s[j]) {
      num++;
      i++;
    }
    j++;
  }
  return num;
};
// @lc code=end
