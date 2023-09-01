/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  // let min, i, j, d, sum, index;
  // min = Math.min(...weights);
  // i = j = d = sum = index = 0;
  // while (sum <= min) {
  //   sum += weights[index];
  //   if (sum > min) break;
  //   index++;
  // }

  // sum = 0;
  // while (j < weights.length) {
  //   if (sum + weights[j] > min) {
  //     d++;
  //     i = j;
  //     sum = 0;
  //   } else {
  //     sum += weights[j];
  //     j++;
  //   }
  //   // console.log(d);
  //   if (d > days) {
  //     console.log(min, sum);
  //     min += weights[index++];
  //     i = j = index;
  //     d = 1;
  //   }
  // }
  // return min;

  // 二分查找
  let left, right, mid;
  left = Math.max(...weights);
  right = weights.reduce((pre, next) => pre + next);
  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    let cur = 0,
      d = 1;
    for (const weight of weights) {
      if (cur + weight > mid) {
        d++;
        cur = 0;
      }
      cur += weight;
    }
    if (d <= days) right = mid;
    else left = mid + 1;
  }
  return left;
};
// @lc code=end
