/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let hash = new Array(2000 + 2).fill(0),
    sameHash = new Array(999 + 2).fill(0);
  arr.forEach((item) => {
    hash[item + 1000]++;
  });
  hash.forEach((item) => {
    if (item > 0) sameHash[item]++;
  });
  return sameHash.every((item) => {
    if (item <= 1) return true;
  });
};
// @lc code=end
