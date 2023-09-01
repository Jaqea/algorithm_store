/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // 法一：
  // let map1 = new Map(),
  //   map2 = new Map(),
  //   res = [];
  // nums1.forEach((item) => {
  //   if (map1.has(item)) map1.set(item, map1.get(item) + 1);
  //   else map1.set(item, 1);
  // });
  // nums2.forEach((item) => {
  //   if (map2.has(item)) map2.set(item, map2.get(item) + 1);
  //   else map2.set(item, 1);
  // });
  // nums1.forEach((item) => {
  //   if (map1.has(item) && map2.has(item)) {
  //     const number =
  //       map1.get(item) > map2.get(item) ? map2.get(item) : map1.get(item);
  //     for (let i = 0; i < number; i++) res.push(item);
  //     map1.delete(item);
  //     map2.delete(item);
  //   }
  // });
  // return res;
  // 法二：
  let map = new Map(),
    res = [];
  nums1.forEach((item) => {
    if (map.has(item)) map.set(item, map.get(item) + 1);
    else map.set(item, 1);
  });
  nums2.forEach((item) => {
    if (map.has(item) && map.get(item) != 0) {
      map.set(item, map.get(item) - 1);
      res.push(item);
    }
  });
  return res;
};
// @lc code=end
