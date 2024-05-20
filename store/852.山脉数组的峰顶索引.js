/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 0,
    right = arr.length - 1,
    mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return mid;
    else if (arr[mid] < arr[mid + 1]) left = mid + 1;
    else if (arr[mid] < arr[mid - 1]) right = mid - 1;
  }
};
// @lc code=end
