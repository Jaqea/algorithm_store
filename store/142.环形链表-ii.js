/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // if (head && head.next) {
  //   let slow, fast, p;
  //   slow = fast = p = head;
  //   while (fast) {
  //     slow = slow.next;
  //     if (fast.next) fast = fast.next.next;
  //     if (slow === fast) break;
  //   }
  //   if (fast) {
  //     while (p !== fast && fast && p) {
  //       p = p.next;
  //       fast = fast.next;
  //     }
  //     return fast;
  //   } else return null;
  // }
  // return null;

  // if (!head || !head.next) return null;
  // let slow, fast;
  // slow = fast = head;
  // while (fast && fast.next) {
  //   slow = slow.next;
  //   fast = fast.next.next;
  //   if (slow === fast) break;
  // }
  // if (slow !== fast) return null;
  // slow = head;
  // while (slow !== fast) {
  //   slow = slow.next;
  //   fast = fast.next;
  // }
  // return fast;

  if (!head || !head.next) {
    return null;
  }

  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }

  if (slow !== fast) {
    return null;
  }

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};
// @lc code=end
