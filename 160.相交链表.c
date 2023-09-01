/*
 * @lc app=leetcode.cn id=160 lang=c
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode *getIntersectionNode(struct ListNode *headA, struct ListNode *headB)
{
  struct ListNode *p1, *p2, *root1, *root2;
  int len1, len2, i, n;
  len1 = 0;
  len2 = 0;
  root1 = (struct ListNode *)malloc(sizeof(struct ListNode));
  root2 = (struct ListNode *)malloc(sizeof(struct ListNode));
  root1->next = headA;
  root2->next = headB;
  p1 = root1;
  p2 = root2;
  while (p1 != NULL)
  {
    len1++;
    p1 = p1->next;
  }
  while (p2 != NULL)
  {
    len2++;
    p2 = p2->next;
  }
  n = len1 > len2 ? len1 - len2 : len2 - len1;
  i = 0;
  p1 = root1;
  p2 = root2;
  if (len1 > len2)
  {
    while (p1 != NULL)
    {
      if (i >= n)
        p2 = p2->next;
      p1 = p1->next;
      if (p1 == p2)
        break;
      i++;
    }
  }
  else
  {
    while (p2 != NULL)
    {
      if (i >= n)
        p1 = p1->next;
      p2 = p2->next;
      if (p1 == p2)
        break;
      i++;
    }
  }
  return p1;
}
// @lc code=end
