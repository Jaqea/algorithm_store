/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head || !head.next || !head.next.next) return head;

  let oddHead, evenHead, oddSlow, oddFast, evenSlow, evenFast, oddEnd;

  oddHead = head;
  evenHead = head.next;
  oddSlow = oddFast = oddHead;
  evenSlow = evenFast = evenHead;

  while (oddFast || evenFast) {
    if (oddFast && oddFast.next) oddFast = oddFast.next.next;
    else oddFast = null;

    if (evenFast && evenFast.next) evenFast = evenFast.next.next;
    else evenFast = null;

    if (oddSlow) oddSlow.next = oddFast;
    if (evenSlow) evenSlow.next = evenFast;
    oddSlow = oddFast;
    evenSlow = evenFast;
  }

  oddEnd = oddHead;
  while (oddEnd.next) {
    oddEnd = oddEnd.next;
  }
  oddEnd.next = evenHead;

  return oddHead;
};
// @lc code=end
