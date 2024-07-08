/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // const res = [-1, -1];
  // let left = 0,
  //   right = nums.length - 1,
  //   mid;
  // while (left <= right) {
  //   mid = Math.floor((left + right) / 2);
  //   if (target === nums[mid]) {
  //     res[0] = left;
  //     res[1] = right;
  //     break;
  //   } else if (target > nums[mid]) left = mid + 1;
  //   else right = mid - 1;
  // }

  // // console.log(res);

  // if (res[0] !== -1) {
  //   while (nums[left] !== target) res[0] = ++left;
  //   while (nums[right] !== target) res[1] = --right;
  // }

  // return res;

  let leftBorder = (rightBorder = -2);
  const getLeftBorder = () => {
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
        leftBorder = right;
      }
    }
  };
  const getRightBorder = () => {
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
        rightBorder = left;
      }
    }
  };

  getLeftBorder();
  getRightBorder();

  if (leftBorder === -2 || rightBorder === -2) {
    return [-1, -1];
  }

  if (rightBorder - leftBorder > 1) {
    return [leftBorder + 1, rightBorder - 1];
  }

  return [-1, -1];
};
// @lc code=end
