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

  return num === 2;
};

const findPath = (str, wordList) => {
  const path = [];
  for (let i of wordList) {
    if (compare(str, i) && !map.has(i)) path.push(i);
  }
  // console.log(path);
  return path;
};

const bfs = (beginWord, endWord, wordList) => {
  const queue = [];
  let num = (front = rear = 0);
  queue[rear++] = beginWord;
  while (front !== rear) {
    const item = queue[front++];
    if (!map.has(item)) map.set(item, 1);
    num++;
    if (item === endWord) return num;
    const paths = findPath(item, wordList);
    for (let i of paths) queue[rear++] = i;
    console.log(item, paths, queue.slice(front));
  }
};

var ladderLength = function (beginWord, endWord, wordList) {
  map = new Map();
  return bfs(beginWord, endWord, wordList);
};
// @lc code=end
