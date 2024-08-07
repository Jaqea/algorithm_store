/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  /** 法一: 暴力解法 */
  // if (target < nums[0]) return 0;
  // if (target > nums[nums.length - 1]) return nums.length;
  // let res;
  // nums.some((item, index) => {
  //   if (target <= item) {
  //     res = index;
  //     return true;
  //   }
  // });
  // return res;
  /** 法二: 二分法 */
  // let left, right, middle;
  // left = 0;
  // right = nums.length - 1;
  // while (left <= right) {
  //   middle = Math.floor((left + right) / 2);
  //   if (target < nums[middle]) right = middle - 1;
  //   if (target > nums[middle]) left = middle + 1;
  //   if (target == nums[middle]) return middle;
  // }
  // return left;

  // let left, right, mid;
  // (left = 0), (right = nums.length - 1);
  // while (left <= right) {
  //   mid = Math.floor((right + left) / 2);
  //   if (nums[mid] > target) right = mid - 1;
  //   else if (nums[mid] < target) left = mid + 1;
  //   else return mid;
  // }
  // return left;

  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
// @lc code=end
