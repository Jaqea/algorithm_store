/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 反转整个
const reverseList = (head) => {
  if (!head || !head.next) return head;
  let last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};
// 反转前n个
let node;
const reverseListn = (head, n) => {
  if (n === 1) {
    node = head.next;
    return head;
  }
  let last = reverseListn(head.next, n - 1);
  head.next.next = head;
  head.next = node;
  return last;
};
var reverseBetween = function (head, left, right) {
  /** 非递归反转 */
  // if (left === right) return head;
  // let leftP,
  //   rightP,
  //   p,
  //   q,
  //   r,
  //   last,
  //   s,
  //   i = 1;
  // leftP = rightP = head;
  // p = leftP;
  // while (i < right) {
  //   if (i < left) {
  //     p = leftP;
  //     leftP = leftP.next;
  //   }
  //   rightP = rightP.next;
  //   i++;
  // }

  // q = new ListNode();
  // if (p !== leftP) p.next = null;

  // last = rightP.next;
  // rightP.next = null;
  // s = leftP;

  // while (leftP) {
  //   r = leftP.next;
  //   leftP.next = q.next;
  //   q.next = leftP;
  //   leftP = r;
  // }

  // if (p !== s) p.next = q.next;
  // s.next = last;
  // return p !== s ? head : q.next;

  /** 递归反转 */
  // return reverseList(head);

  // return reverseListn(head, 3)

  // if (left === 1) return reverseListn(head, right);
  // head.next = reverseBetween(head.next, left - 1, right - 1);
  // return head;

  const root = new ListNode();
  root.next = head;
  let p = root,
    q,
    rear,
    count = 0;
  while (count !== left - 1) {
    p = p.next;
    count++;
  }

  q = p.next;
  rear = q;
  while (count !== right) {
    const temp = q.next;
    if (count === left - 1) {
      q.next = null;
    } else {
      q.next = p.next;
    }
    p.next = q;
    q = temp;
    count++;
  }

  rear.next = q;

  return root.next;
};
// @lc code=end
