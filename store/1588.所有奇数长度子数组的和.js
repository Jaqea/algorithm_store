/*
 * @lc app=leetcode.cn id=1588 lang=javascript
 *
 * [1588] 所有奇数长度子数组的和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let len = 1,
    res = (left = right = 0);

  while (len < arr.length) {
    for (; right < arr.length; left++, right++) {
      let sum = 0;
      for (let i = left; i <= right; i++) sum += arr[i];
      res += sum;
      sum = 0;
    }
    len += 2;
    left = 0;
    right = left + len;
  }

  console.log(res);
};
// @lc code=end
