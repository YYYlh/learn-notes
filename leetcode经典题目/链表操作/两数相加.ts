/* 
* 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

* 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

* 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

* 链接：https://leetcode-cn.com/problems/add-two-numbers 
*/

// 示例子
/* 
* 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
* 输出：7 -> 0 -> 8
* 原因：342 + 465 = 807
 */
import ListNode from './ListNode'

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let root: ListNode = new ListNode(0)
    let tempNode: ListNode = root
    let carry = 0 // 保存逢10进1的值
    while(l1 != null || l2 != null || carry !== 0) {
        let l1Val: number = l1 ? l1.val : 0
        let l2Val: number = l2 ? l2.val : 0
        
        let sumVal = l1Val + l2Val + carry
        carry = ~~(sumVal / 10)
        let sumNode = new ListNode(sumVal % 10)
        tempNode.next = sumNode
        tempNode = sumNode
        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }
    return root.next
};
addTwoNumbers(l1, l2)