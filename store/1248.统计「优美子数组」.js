/*
 * @lc app=leetcode.cn id=1248 lang=javascript
 *
 * [1248] 统计「优美子数组」
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  /** 法一：前缀和 */
  // let res = (pre = 0);
  // const map = new Map();
  // map.set(pre, 1);

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] % 2) pre++;
  //   if (map.has(pre - k)) res += map.get(pre - k);
  //   if (!map.has(pre)) map.set(pre, 1);
  //   else map.set(pre, map.get(pre) + 1);
  // }

  // return res;
  /** 法二： */
  let res = (count = l = r = 0);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) count++;

    if (count === k) {
    }
  }

  return res;
};
// @lc code=end
