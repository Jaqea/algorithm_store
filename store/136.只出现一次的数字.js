/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map();
  nums.forEach((item) => {
    if (!map.has(item)) map.set(item, 1);
    else map.set(item, map.get(item) + 1);
  });

  for (let [key, value] of map) if (value === 1) return key;
};
// @lc code=end
