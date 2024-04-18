/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  s = s.split(" ");
  if (s.length !== pattern.length) return false;

  const mapP = new Map(),
    mapS = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (!mapP.has(pattern[i])) {
      mapP.set(pattern[i], s[i]);
    }
    if (!mapS.has(s[i])) mapS.set(s[i], pattern[i]);

    if (mapP.has(pattern[i]) && mapS.has(s[i])) {
      if (mapP.get(pattern[i]) !== s[i] || mapS.get(s[i]) !== pattern[i])
        return false;
    }
  }

  return true;
};
// @lc code=end
