/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 双指针法
  // 写法一：
  // let slow, fast, count;
  // slow = fast = count = 0;
  // while (fast < nums.length) {
  //   if (nums[fast] === 0) {
  //     fast++;
  //     count++;
  //   } else {
  //     nums[slow] = nums[fast];
  //     slow++;
  //     fast++;
  //   }
  // }
  // nums.forEach((_, index) => {
  //   if (index >= nums.length - count) nums[index] = 0;
  // });
  // 写法二：
  // let slow, fast, count;
  // count = 0;
  // for (slow = 0, fast = 0; fast < nums.length; fast++) {
  //   if (nums[fast] !== 0) nums[slow++] = nums[fast];
  //   else count++;
  // }
  // for (fast = nums.length - count; fast < nums.length; fast++) nums[fast] = 0;

  // 写法三
  let slow = (fast = 0);
  while (fast !== nums.length) {
    while (nums[fast] === 0) fast++;
    if (fast < nums.length) nums[slow++] = nums[fast++];
  }
  while (slow !== nums.length) nums[slow++] = 0;
  return nums;
};
// @lc code=end
