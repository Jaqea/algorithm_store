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
    len1 = (len2 = 1),
    num;
  p = l1;
  q = l2;

  while (p) {
    p = p.next;
    len1++;
  }

  while (q) {
    q = q.next;
    len2++;
  }

  p = l1;
  q = l2;
  if (len1 > len2) {
    while (p) {
      if (q) num = p.val + q.val + sign;
      else num = p.val + sign;
      if (num > 9) {
        sign = 1;
        num %= 10;
      }
      p.val = num;
      p = p.next;
      if (q) q = q.next;
    }
  } else {
    while (q) {
      if (p) num = p.val + q.val + sign;
      else num = q.val + sign;
      if (num > 9) {
        sign = 1;
        num %= 10;
      }
      q.val = num;
      q = q.next;
      if (p) p = p.next;
    }
  }

  return len1 > len2 ? l1 : l2;
};
// @lc code=end
