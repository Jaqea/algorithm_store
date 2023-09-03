/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
function diff(arr) {
  this.diffArr = [];
  this.diffArr[0] = arr[0];
  arr.forEach((_, index) => {
    if (index) this.diffArr[index] = arr[index] - arr[index - 1];
  });
}
diff.prototype.increase = function (val, i, j) {
  this.diffArr[i] += val;
  if (j + 1 < this.diffArr.length) this.diffArr[j + 1] -= val;
};
diff.prototype.result = function () {
  let res = [];
  res[0] = this.diffArr[0];
  for (let i = 1; i < this.diffArr.length; i++)
    res[i] = res[i - 1] + this.diffArr[i];
  return res;
};
var corpFlightBookings = function (bookings, n) {
  let df = new diff(Array(n).fill(0));
  bookings.forEach((item) => {
    df.increase(item[2], item[0] - 1, item[1] - 1);
  });
  return df.result();
};
// @lc code=end
