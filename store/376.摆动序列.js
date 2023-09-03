/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length === 1 || (nums.length === 2 && nums[0] === nums[1])) return 1;
  let last,
    i = (num = 0),
    j = 1;
  while (i < nums.length && j < nums.length) {
    const temp = nums[j] - nums[i];
    console.log(last, temp);
    if (last && last * temp < 0) {
      num++;
      i++;
    }
    if (last === undefined) {
      i++;
      num++;
    }
    last = temp;
    j++;
  }
  return num + 1;
};
// @lc code=end
