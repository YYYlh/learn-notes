package main

import (
	"fmt"
	"goProject/array"
	queue "goProject/arrayQueue"
	stack "goProject/arrayStack"
)

func main1() {
	list := array.NewArray()
	for i := 0; i < 10; i++ {
		list.Append(i)
	}
	for it := list.Iterator(); it.HasNext(); {
		fmt.Println(it.Next())
	}
}
func main2() {
	stack1 := stack.NewStack()
	stack1.Push(5)
	reslut := 0
	for {
		data := stack1.Pop()
		if data == 0 {
			break
		}
		reslut += data.(int)
		stack1.Push(data.(int) - 1)
	}
	fmt.Print(reslut)

	stack2 := stack.NewStack()
	stack2.Push(7)
	reslut1 := 0
	for !stack2.IsEmpty() {
		data := stack2.Pop()
		if data == 1 || data == 2 {
			reslut1++
		} else {
			stack2.Push(data.(int) - 2)
			stack2.Push(data.(int) - 1)
		}
	}
	fmt.Print(reslut1)
}

func main() {
	queue := queue.NewQueue()
	queue.EnQueue(1)
	queue.EnQueue(2)
	queue.EnQueue(3)
	fmt.Println(queue.DeQueue())
	fmt.Println(queue.Size())
}
