/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 法一
  // let maxLeft = new Array(height.length).fill(0),
  //   maxRight = Array(height.length).fill(0),
  //   sum = 0;
  // maxLeft[0] = height[0];
  // maxRight[height.length - 1] = height[height.length - 1];

  // for (let i = 1, len = height.length - 1; i < len; i++)
  //   maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);

  // for (let i = height.length - 2; i > 0; i--)
  //   maxRight[i] = Math.max(maxRight[i + 1], height[i]);

  // for (let i = 1, len = height.length - 1; i < len; i++)
  //   sum += Math.min(maxLeft[i], maxRight[i]) - height[i];

  // return sum;

  // 法二
  let stack = [],
    top = 0,
    sum = 0;
  stack[top++] = 0;

  for (let i = 1; i < height.length; i++) {
    if (height[stack[top - 1]] > height[i]) stack[top++] = i;
    else if (height[stack[top - 1]] === height[i]) {
      top--;
      stack[top++] = i;
    } else {
      while (height[stack[top - 1]] < height[i] && top !== 0) {
        const mid = stack[top - 1];
        top--;
        if (top !== 0) {
          const h = Math.min(height[stack[top - 1]], height[i]) - height[mid];
          const w = i - stack[top - 1] - 1;
          sum += h * w;
        }
      }
      stack[top++] = i;
    }
  }

  return sum;
};
// @lc code=end
