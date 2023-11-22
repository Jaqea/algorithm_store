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
  // 法一 超时
  // let minIndex = new Array(heights.length).fill(1),
  //   maxIndex = new Array(heights.length).fill(1),
  //   sum = 0;

  // minIndex[0] = -1;
  // maxIndex[heights.length - 1] = heights.length;
  // for (let i = heights.length - 1; i > 0; i--) {
  //   let t = i - 1;
  //   while (t >= 0 && heights[t] >= heights[i]) t--;
  //   minIndex[i] = t;
  // }

  // for (let i = 0; i < heights.length; i++) {
  //   let t = i + 1;
  //   while (t < heights.length && heights[t] >= heights[i]) t++;
  //   maxIndex[i] = t;
  // }

  // for (let i = 0; i < heights.length; i++) {
  //   const w = maxIndex[i] - minIndex[i] - 1;
  //   const h = heights[i];
  //   if (w > 0) sum = Math.max(sum, w * h);
  // }

  // return sum;

  // 法二
  // let minIndex = new Array(heights.length).fill(1),
  //   maxIndex = new Array(heights.length).fill(1),
  //   sum = 0;

  // minIndex[0] = -1;
  // maxIndex[heights.length - 1] = heights.length;
  // for (let i = 1; i < heights.length; i++) {
  //   let t = i - 1;
  //   while (t >= 0 && heights[t] >= heights[i]) t = minIndex[t];
  //   minIndex[i] = t;
  // }

  // for (let i = heights.length - 1; i >= 0; i--) {
  //   let t = i + 1;
  //   while (t < heights.length && heights[t] >= heights[i]) t = maxIndex[t];
  //   maxIndex[i] = t;
  // }

  // for (let i = 0; i < heights.length; i++) {
  //   const w = maxIndex[i] - minIndex[i] - 1;
  //   const h = heights[i];
  //   if (w > 0) sum = Math.max(sum, w * h);
  // }

  // return sum;

  // 法三
  let stack = [],
    top = 0,
    max = 0;
  stack[top++] = 0;
  heights.unshift(0);
  heights.push(0);
  for (let i = 1; i < heights.length; i++) {
    while (heights[i] < heights[stack[top - 1]]) {
      const item = stack[--top];
      const w = i - stack[top - 1] - 1;
      const h = heights[item];
      max = Math.max(max, w * h);
    }
    stack[top++] = i;
  }
  return max;
};
// @lc code=end
