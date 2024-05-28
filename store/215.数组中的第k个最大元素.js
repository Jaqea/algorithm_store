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
  const quickSort = (arr, index) => {
    const big = [],
      equal = [],
      small = [];

    console.log(Math.random());
    const pivot = arr[Math.floor(Math.random() * arr.length)];

    arr.forEach((item) => {
      if (item > pivot) big.push(item);
      else if (item < pivot) small.push(item);
      else equal.push(item);
    });

    if (index <= big.length) return quickSort(big, index);
    if (index > big.length + equal.length)
      return quickSort(small, k - big.length - equal.length);
    return pivot;
  };

  // const quickSort = (arr, l, r, index) => {
  //   if (l === r) return arr[index];
  //   let partition = arr[l],
  //     i = l - 1,
  //     j = r + 1;
  //   while (i < j) {
  //     do {
  //       i++;
  //     } while (arr[i] < partition);
  //     do {
  //       j--;
  //     } while (arr[j] > partition);
  //     if (i < j) {
  //       let t = arr[i];
  //       arr[i] = arr[j];
  //       arr[j] = t;
  //     }
  //   }
  //   if (index <= j) return quickSort(nums, l, j, index);
  //   else return quickSort(nums, j + 1, r, index);
  // };

  return quickSort(nums, k);
};
// @lc code=end
