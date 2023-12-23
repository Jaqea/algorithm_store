/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  // let i, j, temp;
  // j = 1;
  // for (i = 0; i < nums.length; i += 2) {
  //   if (nums[i] % 2 == 1) {
  //     while (j < nums.length && nums[j] % 2 != 0) j += 2;
  //     if (j < nums.length) {
  //       temp = nums[i];
  //       nums[i] = nums[j];
  //       nums[j] = temp;
  //     }
  //   }
  // }
  // return nums;

  let odd, even;
  (even = 0), (odd = 1);
  while (even < nums.length && odd < nums.length) {
    if (nums[even] % 2 === 0) even += 2;
    if (nums[odd] % 2 !== 0) odd += 2;
    if (nums[even] % 2 && nums[odd] % 2 === 0) {
      const temp = nums[even];
      nums[even] = nums[odd];
      nums[odd] = temp;
      even += 2;
      odd += 2;
    }
  }
  return nums;
};
// @lc code=end
