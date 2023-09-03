/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let left,
    right,
    vaild,
    s1Map = new Map(),
    s2Map = new Map();
  left = right = vaild = 0;
  Array.prototype.forEach.call(s1, (str) => {
    s1Map.set(str, (s1Map.get(str) || 0) + 1);
  });
  console.log(s1.length, s1Map.size);
  while (right < s2.length) {
    let str = s2[right];
    right++;
    if (s1Map.has(str)) {
      s2Map.set(str, (s2Map.get(str) || 0) + 1);
      if (s1Map.get(str) == s2Map.get(str)) vaild++;
    }
    while (right - left >= s1.length) {
      if (vaild === s1Map.size) return true;
      let str = s2[left];
      left++;
      if (s1Map.has(str)) {
        if (s2Map.get(str) === s1Map.get(str)) vaild--;
        s2Map.set(str, s2Map.get(str) - 1);
      }
    }
  }
  return false;
};
// @lc code=end
