/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left, right, mid;
  right = Math.max(...piles);
  left = 1;
  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    let curH = 0;
    piles.forEach((pile) => {
      if (pile % mid) curH += Math.floor(pile / mid) + 1;
      else curH += pile / mid;
    });
    if (curH <= h) right = mid;
    else left = mid + 1;
  }
  return left;
};
// @lc code=end
