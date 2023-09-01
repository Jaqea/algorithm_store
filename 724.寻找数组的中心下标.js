/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum, leftSum, rightSum, res;
  sum = leftSum = rightSum = 0;
  res = -1;
  nums.forEach((item) => {
    sum += item;
  });
  nums.some((item, index) => {
    leftSum += item;
    rightSum = sum - leftSum + item;
    if (leftSum == rightSum) {
      res = index;
      return true;
    }
  });

  return res;
};
// @lc code=end
