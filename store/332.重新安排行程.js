/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const compareStr = (strList1, strList2) => {
  let str1 = strList1[0] + strList1[1],
    str2 = strList2[0] + strList2[1];
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] > str2[i]) return 1;
    else if (str1[i] < str2[i]) return -1;
  }
  return 0;
};

const sortStrLists = (strLists) => {
  for (let i = 0; i < strLists.length - 1; i++) {
    for (let j = 0; j < strLists.length - i - 1; j++) {
      if (compareStr(strLists[j], strLists[j + 1]) > 0) {
        let temp = strLists[j];
        strLists[j] = strLists[j + 1];
        strLists[j + 1] = temp;
      }
    }
  }
};

let res, used;

const track = (tickets, ticketNum, start) => {
  if (res.length === ticketNum + 1) {
    return;
  }
  for (let i = 0; i < ticketNum; i++) {
    if (used[i]) continue;
    if (start === tickets[i][0]) {
      res.push(tickets[i][1]);
      used[i] = 1;
      track(tickets, ticketNum, tickets[i][1]);
      if (res.length === ticketNum + 1) return;
      res.pop();
      used[i] = 0;
    }
  }
};
var findItinerary = function (tickets) {
  res = [];
  used = new Array(tickets.length).fill(0);
  sortStrLists(tickets);
  res.push("JFK");
  track(tickets, tickets.length, "JFK");
  return res;
};
// @lc code=end
