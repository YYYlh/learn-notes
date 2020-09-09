/* 
* 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
*/

// 示例
/* 
* 给定一个链表: 1->2->3->4->5, 和 n = 2.
* 当删除了倒数第二个节点后，链表变为 1->2->3->5. 
*/

import ListNode from './ListNode'

let head: ListNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
// let head: ListNode = new ListNode(1)
let count: number = 0

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null) return null
    head.next = removeNthFromEnd(head.next, n)
    count++
    if(count === n) { // 回溯，所以这里count可以看作是倒数第n位
        return head.next
    } else {
        return head
    }
};
console.log(removeNthFromEnd(head, 3));