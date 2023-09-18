/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let map = new Map(),
    res = [],
    maxRight = 0;
  for (let i = s.length - 1; i > -1; i--) {
    if (!map.has(s[i])) map.set(s[i], i);
  }
  for (let i = 0; i < s.length; i++) {
    maxRight = maxRight > map.get(s[i]) ? maxRight : map.get(s[i]);
    if (i === maxRight) res.push(i + 1);
  }
  return res.map((val, index) => {
    if (index > 0) return val - res[index - 1];
    return val;
  });
};
// @lc code=end
