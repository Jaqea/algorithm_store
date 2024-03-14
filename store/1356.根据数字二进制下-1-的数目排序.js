/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  const bitCount = (num) => {
    let count = 0;
    while (num) {
      count++;
      num &= num - 1;
    }

    return count;
  };

  arr = arr.map((item) => [item, bitCount(item)]);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j][1] > arr[j + 1][1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }

      if (arr[j][1] === arr[j + 1][1]) {
        if (arr[j][0] > arr[j + 1][0]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }

  return arr.map((item) => item[0]);
};
// @lc code=end
