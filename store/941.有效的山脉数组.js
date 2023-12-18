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
  // if (arr.length < 3) return false;
  // let start, end;
  // start = 0;
  // end = arr.length - 1;
  // while (start + 1 < arr.length && arr[start + 1] > arr[start]) start++;
  // while (end - 1 >= 0 && arr[end - 1] > arr[end]) end--;
  // if (start != 0 && end != arr.length - 1 && start >= end) return true;
  // else return false;

  if (arr.length < 3) return false;
  let left,
    right,
    i = 1;
  for (; i < arr.length - 1; i++) {
    left = i - 1;
    right = i + 1;
    while (left >= 0) {
      if (arr[left] < arr[left + 1]) left--;
      else break;
    }
    while (right < arr.length) {
      if (arr[right - 1] > arr[right]) right++;
      else break;
    }
    if (left === -1 && right === arr.length) return true;
  }
  return false;
};
// @lc code=end
