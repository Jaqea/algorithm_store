/*
 * @lc app=leetcode.cn id=1365 lang=javascript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  // let i,
  //   hash = [],
  //   res = [];
  // let sortNums = [...nums];
  // sortNums.sort((a, b) => a - b);
  // for (i = sortNums.length - 1; i >= 0; i--) hash[sortNums[i]] = i;
  // for (let i = 0; i < nums.length; i++) {
  //   res[i] = hash[nums[i]];
  // }

  // return res;

  const res = [...nums];
  const map = new Map();
  nums.forEach((item) => {
    if (!map.has(item)) map.set(item, -1);
  });
  nums.sort((a, b) => a - b);
  nums.forEach((item, index) => {
    if (map.get(item) === -1) map.set(item, index);
  });
  for (let i = 0; i < res.length; i++) res[i] = map.get(res[i]);
  return res;
};
// @lc code=end
