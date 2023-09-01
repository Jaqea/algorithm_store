/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const isAnagram = (str1, str2) => {
  let map = new Map();
  Array.from(str1).forEach((value) => {
    if (map.has(value)) map.set(value, map.get(value) + 1);
    else map.set(value, 1);
  });
  Array.from(str2).forEach((value) => {
    if (map.has(value)) map.set(value, map.get(value) - 1);
    else map.set(value, 1);
  });
  for (let value of map.values()) if (value !== 0) return false;
  return true;
};
const getPrime = (num) => {
  let res = [],
    i,
    j;
  for (i = 2; i < num; i++) {
    for (j = 2; j < i; j++) {
      if (i % j === 0) break;
    }
    if (i === j) res.push(i);
  }
  return res;
};
var groupAnagrams = function (strs) {
  // 法一：暴力，AC不了
  // let res = [],
  //   index,
  //   resItem,
  //   temp,
  //   len = strs.length,
  //   leng = len;
  // while (len) {
  //   index = 0;
  //   temp = strs[0];
  //   resItem = [];
  //   for (let i = 0; i < leng; i++) {
  //     if (isAnagram(temp, strs[i])) {
  //       resItem.push(strs[i]);
  //       len--;
  //     } else {
  //       strs[index++] = strs[i];
  //     }
  //   }
  //   leng = len;
  //   res.push(resItem);
  // }
  // return res;
  // 法二：
  let map = new Map(),
    primes = getPrime(102),
    res = [];
  strs.forEach((item) => {
    sortItem = Array.from(item).map((item) => item.charCodeAt() - 97);
    let msum = 1;
    sortItem.forEach((item) => {
      msum = msum * primes[item];
    });
    if (map.has(msum)) {
      map.get(msum).push(item);
    } else {
      map.set(msum, [item]);
    }
  });
  for (let value of map.values()) res.push(value);
  return res;
};
// @lc code=end
