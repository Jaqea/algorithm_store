/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let mapS = new Map(),
    mapT = new Map(),
    res = true;
  s.split("").forEach((item, index) => {
    if (mapS.has(item) && mapS.get(item) !== t[index]) res = false;
    mapS.set(item, t[index]);
  });
  t.split("").forEach((item, index) => {
    if (mapT.has(item) && mapT.get(item) !== s[index]) res = false;
    mapT.set(item, s[index]);
  });

  if (mapS.size !== mapT.size) res = false;
  for (let key of mapS.keys()) if (key !== mapT.get(mapS.get(key))) res = false;
  return res;
};
// @lc code=end
