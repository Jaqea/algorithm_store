/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p,
    q,
    sign = 0,
    num;
  p = l1;
  q = l2;

  while (p && q) {
    num = p.val + q.val + sign;
    if (num > 9) {
      sign = 1;
      num %= 10;
    }
    q.val = num;
    p = p.next;
    q = q.next;
  }

  return l2;
};
// @lc code=end
