/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;
  let start, end;
  start = 0;
  end = arr.length - 1;
  while (start + 1 < arr.length && arr[start + 1] > arr[start]) start++;
  while (end - 1 >= 0 && arr[end - 1] > arr[end]) end--;
  if (start != 0 && end != arr.length - 1 && start >= end) return true;
  else return false;
};
// @lc code=end
