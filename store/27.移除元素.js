/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 法一：双指针
  // let slow, fast, len;
  // slow = 0;
  // len = nums.length;
  // 写法一：
  // fast = 0;
  // while (fast < nums.length) {
  //   if (nums[fast] === val) {
  //     fast++;
  //     len--;
  //   } else {
  //     nums[slow] = nums[fast];
  //     slow++;
  //     fast++;
  //   }
  // }
  // 写法二：
  // for (fast = 0; fast < nums.length; fast++) {
  //   if (nums[fast] !== val) nums[slow++] = nums[fast];
  //   else len--;
  // }
  // nums.length = len;
  // 法二：暴力
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === val) {
      for (let j = i + 1; j < len; j++) {
        nums[j - 1] = nums[j];
      }
      --i;
      --len;
    }
  }
  return len;
};
// @lc code=end
