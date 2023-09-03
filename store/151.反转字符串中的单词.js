/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const reverse = (start, end, arr) => {
  let temp;
  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};
var reverseWords = function (s) {
  // 法一：水方法
  // let item,
  //   sArr = [],
  //   i;
  // item = "";
  // for (i = 0; i < s.length; i++) {
  //   if (i > 0 && s[i - 1] === " " && s[i] === " ") continue;
  //   if (s[i] !== " ") item += s[i];
  //   if (s[i] !== " " && (s[i + 1] === " " || i + 1 === s.length)) {
  //     sArr.push(item);
  //     item = "";
  //   }
  // }
  // reverse(0, sArr.length - 1, sArr);
  // return sArr.join(" ");
  // 法二：空间复杂度为O(1)
  let slow, fast, lastIndex;
  slow = fast = lastIndex = 0;
  s = Array.from(s);
  while (s[fast] === " ") fast++;
  for (; fast < s.length; fast++) {
    if (s[fast] === " " && (s[fast + 1] === " " || fast + 1 === s.length))
      continue;
    s[slow++] = s[fast];
  }

  s.length = slow;
  reverse(0, s.length - 1, s);
  s.forEach((item, index) => {
    if (item === " ") {
      reverse(lastIndex, index - 1, s);
      lastIndex = index + 1;
    }
    if (index === s.length - 1) reverse(lastIndex, index, s);
  });
  return s.join("");
};
// @lc code=end
