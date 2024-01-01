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
  // let mapS = new Map(),
  //   mapT = new Map(),
  //   res = true;
  // s.split("").forEach((item, index) => {
  //   if (mapS.has(item) && mapS.get(item) !== t[index]) res = false;
  //   mapS.set(item, t[index]);
  // });
  // t.split("").forEach((item, index) => {
  //   if (mapT.has(item) && mapT.get(item) !== s[index]) res = false;
  //   mapT.set(item, s[index]);
  // });

  // if (mapS.size !== mapT.size) res = false;
  // for (let key of mapS.keys()) if (key !== mapT.get(mapS.get(key))) res = false;
  // return res;

  let mapS = new Map(),
    mapT = new Map(),
    temp = "";
  [].slice.call(s).forEach((e, i) => {
    if (!mapS.has(e) && !mapT.has(t[i])) {
      mapS.set(e, t[i]);
      mapT.set(t[i], 1);
    }
  });
  for (let str of s) temp = temp.concat(mapS.get(str));
  if (temp === t) return true;
  return false;
};
// @lc code=end
