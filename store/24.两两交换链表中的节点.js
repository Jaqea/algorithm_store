/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  // 法一：无虚拟头节点
  // if (head && head.next) {
  //   let p, q, temp, root, pre;
  //   p = head;
  //   q = root = head.next;
  //   while (p && q) {
  //     p.next = q.next;
  //     temp = q.next;
  //     q.next = p;
  //     if (pre) pre.next = q;
  //     pre = p;
  //     p = temp;
  //     if (temp) q = temp.next;
  //   }
  //   return root;
  // }
  // return head;
  // 法二：虚拟头节点
  // if (head && head.next) {
  //   let vHead, p, q, cur;
  //   vHead = new ListNode();
  //   vHead.next = p = head;
  //   q = p.next;
  //   cur = vHead;
  //   while (p && q) {
  //     cur.next = q;
  //     p.next = q.next;
  //     q.next = p;
  //     cur = p;
  //     p = p.next;
  //     if (p) q = p.next;
  //   }
  //   return vHead.next;
  // }
  // return head;

  // if (!head || !head.next) return head;
  // let front,
  //   rear,
  //   root = new ListNode();
  // root.next = head;
  // front = root;
  // rear = front.next.next;

  // while (rear) {
  //   const temp = front.next;
  //   temp.next = rear.next;
  //   front.next = rear;
  //   rear.next = temp;
  //   front = temp;
  //   if (temp.next) rear = temp.next.next;
  //   else break;
  // }

  // return root.next;

  if (!head || !head.next) {
    return head;
  }
  let dummyNode = new ListNode(0, head),
    p = head,
    q = p.next,
    headNode = dummyNode;
  while (p && q) {
    headNode.next = q;
    p.next = q.next;
    q.next = p;

    headNode = p;
    p = p.next;
    if (p) {
      q = p.next;
    }
  }

  return dummyNode.next;
};
// @lc code=end
