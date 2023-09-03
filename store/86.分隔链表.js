/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head || !head.next) return head;
  let p, more, less, r, s;
  p = head;
  more = new ListNode();
  less = new ListNode();
  r = more;
  s = less;
  while (p) {
    if (p.val < x) {
      r.next = p;
      r = p;
    } else {
      s.next = p;
      s = p;
    }
    p = p.next;
  }
  r.next = less.next;
  s.next = null;
  return more.next;
};
// @lc code=end
