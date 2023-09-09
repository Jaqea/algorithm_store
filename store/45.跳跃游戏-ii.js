/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let lastCover = 0,
    cover = 0,
    min = 0;
  // 法1
  // if (nums.length === 1) return min;
  // for (let i = 0; i < nums.length; i++) {
  //   cover = cover > nums[i] + i ? cover : nums[i] + i;
  //   if (i === lastCover) {
  //     min++;
  //     lastCover = cover;
  //     if (cover >= nums.length - 1) return min;
  //   }
  // }
  // 法2
  for (let i = 0; i < nums.length - 1; i++) {
    cover = cover > nums[i] + i ? cover : nums[i] + i;
    if (i === lastCover) {
      min++;
      lastCover = cover;
    }
  }
  return min;
};
// @lc code=end
