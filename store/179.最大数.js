/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const partition = (arr, left, right) => {
    const pviot = arr[left];
    while (left < right) {
      while (left < right && pviot + arr[right] >= arr[right] + pviot) right--;

      arr[left] = arr[right];

      while (left < right && arr[left] + pviot >= pviot + arr[left]) left++;

      arr[right] = arr[left];
    }
    arr[left] = pviot;
    return left;
  };

  const quickSort = (arr, left, right) => {
    if (left >= right) return;

    const mid = partition(arr, left, right);

    quickSort(arr, left, mid - 1);
    quickSort(arr, mid + 1, right);
  };

  nums = nums.map((item) => String(item));
  quickSort(nums, 0, nums.length - 1);

  return nums.join("")[0] !== "0" ? nums.join("") : "0";
};
// @lc code=end
