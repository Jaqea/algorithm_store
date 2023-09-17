/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
const mySort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1][0] < arr[j][0]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};
var eraseOverlapIntervals = function (intervals) {
  let num = 0,
    minRight;
  intervals.sort((a, b) => a[0] - b[0]);
  minRight = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (minRight > intervals[i][0]) {
      num++;
      minRight = Math.min(minRight, intervals[i][1]);
    } else minRight = intervals[i][1];
  }
  return num;
};
// @lc code=end
