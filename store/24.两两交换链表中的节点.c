/*
 * @lc app=leetcode.cn id=24 lang=c
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode *swapPairs(struct ListNode *head)
{
  if (head == NULL || head->next == NULL)
    return head;
  struct ListNode *p, *q, *root, *last;
  root = (struct ListNode *)malloc(sizeof(struct ListNode));
  p = head;
  q = head->next;
  root->next = p;
  last = root;
  while (q != NULL && p != NULL)
  {
    p->next = q->next;
    q->next = p;
    last->next = q;
    last = p;
    p = p->next;
    if (p != NULL)
      q = p->next;
  }
  return root->next;
}
// @lc code=end
