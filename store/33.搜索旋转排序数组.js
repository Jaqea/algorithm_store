/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // let left = 0,
  //   right = nums.length - 1,
  //   mid;
  // while (left <= right) {
  //   mid = Math.floor((left + right) / 2);
  //   if (nums[mid] === target) return mid;
  //   else if (target > nums[mid]) {
  //     if (nums[mid] > nums[left]) left = mid + 1;
  //     else if (target === nums[right]) return right;
  //     else if (target > nums[right]) right = mid - 1;
  //     else left = mid + 1;
  //   } else if (target < nums[mid]) {
  //     if (nums[mid] < nums[left]) right = mid - 1;
  //     else if (target === nums[left]) return left;
  //     else if (target > nums[left]) right = mid - 1;
  //     else left = mid + 1;
  //   }
  // }

  // return -1;

  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (target > nums[mid]) {
      if (nums[mid] > nums[left]) {
        left = mid + 1;
      } else {
        if (target === nums[right]) {
          return right;
        } else if (target > nums[right]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
    if (target < nums[mid]) {
      if (nums[mid] < nums[right]) {
        right = mid - 1;
      } else {
        if (target === nums[left]) {
          return left;
        } else if (target > nums[left]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
  }

  return -1;
};
// @lc code=end
