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
  // let hash = new Array(2000 + 2).fill(0),
  //   sameHash = new Array(999 + 2).fill(0);
  // arr.forEach((item) => {
  //   hash[item + 1000]++;
  // });
  // hash.forEach((item) => {
  //   if (item > 0) sameHash[item]++;
  // });
  // return sameHash.every((item) => {
  //   if (item <= 1) return true;
  // });

  const map = new Map(),
    countMap = new Map();
  arr.forEach((item) => {
    if (!map.has(item)) {
      map.set(item, 0);
    } else map.set(item, map.get(item) + 1);
  });
  for (let value of map.values()) {
    if (!countMap.has(value)) countMap.set(value, 1);
    else return false;
  }
  return true;
};
// @lc code=end
