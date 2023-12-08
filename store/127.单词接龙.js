/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
let map;

const compare = (str1, str2) => {
  let num = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str1[i] === str2[i]) num++;
  }

  return str1.length - num === 1;
};

const findPath = (str, wordList) => {
  const path = [];
  for (let i of wordList) {
    if (compare(str, i) && !map.has(i)) {
      path.push(i);
    }
  }
  return path;
};

const bfs = (beginWord, endWord, wordList) => {
  const queue = [];
  let front = (rear = 0),
    path = 1;
  queue[rear++] = beginWord;
  while (front !== rear) {
    const item = queue[front++];
    if (!map.has(item)) map.set(item, path);
    const paths = findPath(item, wordList);
    for (let i of paths) {
      map.set(i, map.get(item) + 1);
      queue[rear++] = i;
    }
  }
};

var ladderLength = function (beginWord, endWord, wordList) {
  map = new Map();
  bfs(beginWord, endWord, wordList);
  return map.has(endWord) ? map.get(endWord) : 0;
};
// @lc code=end
