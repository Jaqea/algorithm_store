/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let map = new Map(),
    max = 0,
    items = [],
    left,
    right;
  for (let num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
      max = max > 1 ? max : 1;
    } else {
      map.set(num, map.get(num) + 1);
      max = max > map.get(num) ? max : map.get(num);
    }
  }

  for (let [key, value] of map) if (max === value) items.push(key);

  let min = nums.length;
  for (let i = 0; i < items.length; i++) {
    let k = max;
    left = right = 0;
    while (k && right < nums.length) {
      if (nums[right] === items[i]) --k;
      ++right;
    }
    while (nums[left] !== items[i]) ++left;
    min = min < right - left ? min : right - left;
  }

  return min;
};
// @lc code=end
