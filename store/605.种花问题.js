/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed.length === 1 && !flowerbed[0] && n === 1) return true;

  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      i === 0 &&
      i + 1 < flowerbed.length &&
      !flowerbed[i + 1] &&
      !flowerbed[i]
    ) {
      flowerbed[i] = 1;
      count++;
    }

    if (
      i === flowerbed.length - 1 &&
      i - 1 > -1 &&
      !flowerbed[i - 1] &&
      !flowerbed[i]
    ) {
      flowerbed[i] = 1;
      count++;
    }

    if (
      i - 1 > -1 &&
      i + 1 < flowerbed.length &&
      !flowerbed[i - 1] &&
      !flowerbed[i + 1] &&
      !flowerbed[i]
    ) {
      flowerbed[i] = 1;
      count++;
    }
  }

  return count >= n;
};
// @lc code=end
