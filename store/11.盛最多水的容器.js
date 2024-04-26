/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  /** 暴力解法(超时) */
  // let max = 0;
  // for (let i = 0; i < height.length - 1; i++) {
  //   let width = 0;
  //   for (let j = i + 1; j < height.length; j++) {
  //     if (height[j] >= height[i]) width = j - i;
  //   }
  //   max = max > width * height[i] ? max : width * height[i];
  // }

  // for (let i = height.length - 1; i > 0; i--) {
  //   let width = 0;
  //   for (let j = i - 1; j > -1; j--) {
  //     if (height[j] >= height[i]) width = i - j;
  //   }
  //   max = max > width * height[i] ? max : width * height[i];
  // }

  // return max;
  /**  */
  let left = (max = 0),
    right = height.length - 1;

  while (left < right) {
    const width = right - left;
    const s =
      height[left] > height[right]
        ? width * height[right]
        : width * height[left];
    max = max > s ? max : s;
    if (height[left] > height[right]) right--;
    else left++;
  }

  return max;
};
// @lc code=end
