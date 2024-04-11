/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  /** 法一：滑动窗口(超时) */
  // let res = (l = 0),
  //   len = 1,
  //   r;
  // r = l + len - 1;

  // while (len <= nums.length) {
  //   for (; r < nums.length; l++, r++) {
  //     let sum = 0;
  //     for (let i = l; i <= r; i++) sum += nums[i];
  //     if (sum === k) res++;
  //   }
  //   len++;
  //   l = 0;
  //   r = l + len - 1;
  // }

  // return res;

  /** 法二：前缀和 */
  let pres = [nums[0]],
    res = 0;
  const map = new Map();
  for (let i = 1; i < nums.length; i++) pres[i] = pres[i - 1] + nums[i];

  map.set(0, 1);

  for (let i = 0; i < pres.length; i++) {
    if (map.has(pres[i] - k)) res += map.get(pres[i] - k);
    if (!map.has(pres[i])) map.set(pres[i], 1);
    else map.set(pres[i], map.get(pres[i]) + 1);
  }

  return res;
};
// @lc code=end
