/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 双指针法：
  // let i,
  //   left,
  //   right,
  //   res = [];
  // nums.sort((a, b) => a - b);
  // if (nums[0] > 0) return res;
  // for (i = 0; i < nums.length; i++) {
  //   // if (i + 1 < nums.length && nums[i] === nums[i + 1]) continue;
  //   if (i > 0 && nums[i] === nums[i - 1]) continue;
  //   left = i + 1;
  //   right = nums.length - 1;
  //   while (right > left) {
  //     const sum = nums[i] + nums[left] + nums[right];
  //     if (sum > 0) right--;
  //     else if (sum < 0) left++;
  //     else {
  //       res.push([nums[i], nums[left], nums[right]]);
  //       while (nums[right] === nums[right - 1]) right--;
  //       while (nums[left] === nums[left + 1]) left++;
  //       right--;
  //       left++;
  //     }
  //   }
  // }
  // return res;

  const quickSort = (arr) => {
    const sort = (low, high) => {
      if (low >= high) {
        return;
      }

      const compableValue = arr[low];
      let left = low,
        right = high;
      while (left < right) {
        while (nums[right] >= compableValue && left < right) {
          right--;
        }

        if (left < right) {
          arr[left] = arr[right];
          left++;
        }

        while (nums[left] <= compableValue && left < right) {
          left++;
        }
        if (left < right) {
          arr[right] = arr[left];
          right--;
        }
      }

      arr[left] = compableValue;
      sort(low, left - 1);
      sort(left + 1, high);
    };

    sort(0, arr.length - 1);
  };

  quickSort(nums);

  const res = [];

  if (nums[0] > 0) {
    return res;
  }

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1] && i > 0) {
      continue;
    }

    let j = i + 1,
      k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        while (nums[k] === nums[k - 1] && j < k) {
          k--;
        }
        while (nums[j] === nums[j + 1] && j < k) {
          j++;
        }
        k--;
        j++;
      }
    }
  }

  return res;
};
// @lc code=end
