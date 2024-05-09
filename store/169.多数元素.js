/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  nums.forEach((item) => {
    if (!map.has(item)) map.set(item, 1);
    else map.set(item, map.get(item) + 1);
  });

  for (let [key, value] of map.entries()) {
    if (value > Math.floor(nums.length / 2)) return key;
  }
};
// @lc code=end
