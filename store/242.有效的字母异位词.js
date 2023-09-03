/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = new Map();
  for (let item of s) {
    if (map.has(item)) map.set(item, map.get(item) + 1);
    else map.set(item, 1);
  }
  Array.from(t).forEach((item) => {
    if (map.has(item)) map.set(item, map.get(item) - 1);
    else map.set(item, 1);
  });
  for (let value of map.values()) if (value !== 0) return false;
  return true;
};
// @lc code=end
