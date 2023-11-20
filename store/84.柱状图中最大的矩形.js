/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let minIndex = new Array(heights.length).fill(1),
    maxIndex = new Array(heights.length).fill(1),
    sum = 0;

  minIndex[0] = -1;
  maxIndex[heights.length - 1] = heights.length;
  for (let i = heights.length - 1; i > 0; i--) {
    let t = i;
    while (t >= 0 && heights[t] >= heights[i]) t--;
    minIndex[i] = t;
  }

  for (let i = 0; i < heights.length; i++) {
    let t = i;
    while (t < heights.length - 1 && heights[t] >= heights[i]) t++;
    maxIndex[i] = t;
  }

  console.log(minIndex, maxIndex);

  for (let i = 0; i < heights.length; i++) {
    const w = maxIndex[i] - minIndex[i] - 1;
    const h = heights[i];
    if (w > 0) sum = Math.max(sum, w * h);
  }

  return sum;
};
// @lc code=end
