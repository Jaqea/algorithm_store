/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let left,
    right,
    queue = [],
    front,
    rear,
    max = [];
  left = front = rear = 0;
  right = k - 1;
  for (let i = left; i <= right; i++) {
    while (front !== rear && queue[rear - 1] < nums[i]) rear--;
    queue[rear++] = nums[i];
  }
  max.push(queue[front]);
  right++;
  for (; right < nums.length; right++) {
    if (queue[front] === nums[left++]) front++;
    while (front !== rear && queue[rear - 1] < nums[right]) rear--;
    queue[rear++] = nums[right];
    max.push(queue[front]);
  }

  return max;
};
// @lc code=end
