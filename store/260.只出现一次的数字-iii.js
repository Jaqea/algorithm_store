/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  /** 法一 */
  // const map = new Map(),
  //   res = [];
  // nums.forEach((item) => {
  //   if (!map.has(item)) map.set(item, 1);
  //   else map.set(item, map.get(item) + 1);
  // });

  // for (let [key, value] of map.entries()) if (value === 1) res.push(key);

  // return res;

  /** 法二 */
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i += 2) {
    if (nums[i] !== nums[i + 1]) return [nums[i], nums[i + 1]];
  }
};
// @lc code=end
