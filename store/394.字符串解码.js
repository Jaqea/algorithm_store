/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let temp = [],
    top = 0;
  s = s.split("]").filter((item) => item);
  s.forEach((item) => {
    if (item[0] - "0") temp[top++] = item;
    else {
      temp[top++] = item.slice(0, item.indexOf("[") - 1);
      temp[top++] = item.slice(item.indexOf("[") - 1);
    }
  });

  s = temp;
  temp = null;

  const decode = (k = 1, str) => {
    if (!str) return;
    if (!str.includes("[")) return str.repeat(k);
    else {
      const index = str.indexOf("[");
      const key = str[index - 1];
      const value = str.slice(index + 1);
      const res = str.slice(0, index - 1) + decode(key, value);
      console.log(res);
      return res.repeat(k);
    }
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i][0] - "0") {
      const k = s[i][0] - "0";
      const value = s[i].slice(2);
      console.log(k, value);
      s[i] = decode(k, value);
    }
  }

  console.log(s);

  return s.join("");
};
// @lc code=end
