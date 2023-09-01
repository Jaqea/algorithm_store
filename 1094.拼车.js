/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 *
 * [1094] 拼车
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
function diff(arr) {
  this.diffArr = [];
  this.diffArr[0] = arr[0];
  arr.forEach((element, index) => {
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

var carPooling = function (trips, capacity) {
  let df = new diff(Array(1001).fill(0));
  trips.forEach((item) => {
    df.increase(item[0], item[1], item[2] - 1);
  });
  let res = df.result();
  console.log(res, df.diffArr);
  return res.every((item) => item <= capacity);
};
// @lc code=end
