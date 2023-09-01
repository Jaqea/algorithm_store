/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // 法一：
  // let map = new Map();
  // Array.from(ransomNote).forEach((item) => {
  //   if (map.has(item)) map.set(item, map.get(item) + 1);
  //   else map.set(item, 1);
  // });
  // Array.from(magazine).forEach((item) => {
  //   if (map.has(item)) map.set(item, map.get(item) - 1);
  // });
  // for (let value of map.values()) if (value > 0) return false;
  // return true;
  // 法二：
  let arr = new Array(26).fill(0);
  Array.from(ransomNote).forEach((item) => {
    const index = item.charCodeAt() - "a".charCodeAt();
    if (arr[index]) arr[index]++;
    else arr[index] = 1;
  });
  Array.from(magazine).forEach((item) => {
    const index = item.charCodeAt() - "a".charCodeAt();
    if (arr[index]) arr[index]--;
  });
  for (let item of arr) if (item > 0) return false;
  return true;
};
// @lc code=end
