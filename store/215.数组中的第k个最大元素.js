/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const partition = (arr, left, right) => {
    let pivot = arr[left];

    while (left < right) {
      while (left < right && arr[right] <= pivot) {
        right--;
      }

      arr[left] = arr[right];

      while (left < right && arr[left] >= pivot) {
        left++;
      }

      arr[right] = arr[left];
    }

    arr[left] = pivot;

    return left;
  };

  const quickSort = (arr, left, right, index) => {
    const mid = partition(arr, left, right);

    if (mid === index) return mid;
    else if (mid > index) {
      return quickSort(arr, left, mid - 1, index);
    } else {
      return quickSort(arr, mid + 1, right, index);
    }
  };

  return nums[quickSort(nums, 0, nums.length - 1, k - 1)];
};
// @lc code=end
