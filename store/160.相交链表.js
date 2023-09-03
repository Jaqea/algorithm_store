/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let lenA, lenB, p, q;
  lenA = lenB = 0;
  p = headA;
  q = headB;
  while (p) {
    lenA++;
    p = p.next;
  }
  while (q) {
    lenB++;
    q = q.next;
  }
  p = headA;
  q = headB;
  if (lenA > lenB) {
    n = lenA - lenB;
    while (n) {
      p = p.next;
      n--;
    }
  } else {
    n = lenB - lenA;
    while (n) {
      q = q.next;
      n--;
    }
  }
  while (p && q && p != q) {
    p = p.next;
    q = q.next;
  }
  return p;
};
// @lc code=end
