/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const sortMap = (map) => {
  return new Map([...map].sort((a, b) => b[1] - a[1]));
};
// class MinHeap{
//   constructor() {
//     this.heap = [null]
//   }
//   getMin () {
//     return this.heap[1]
//   }
// }
var topKFrequent = function (nums, k) {
  // 法一
  let map = new Map(),
    queue = [],
    front,
    rear;
  front = rear = 0;
  nums.forEach((item) => {
    if (map.has(item)) map.set(item, map.get(item) + 1);
    else map.set(item, 1);
  });
  map = sortMap(map);
  for (let key of map.keys()) {
    queue[rear++] = key;
    if (rear - front === k) break;
  }
  return queue.slice(front, rear);
  // 法二：堆
};
// @lc code=end
