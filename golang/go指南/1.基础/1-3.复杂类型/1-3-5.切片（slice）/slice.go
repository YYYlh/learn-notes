package main

// 一个 slice 会指向一个序列的值，并且包含了长度信息。

// []T 是一个元素类型为 T 的 slice。

import (
	"fmt"
)

func main() {
	p := []int{1, 2, 3, 4, 5}
	fmt.Println(p)

	for i := 0; i < len(p); i++ {
		fmt.Printf("p[%d] == %d\n", i, p[i])
	}

	// 	slice 可以重新切片，创建一个新的 slice 值指向相同的数组。

	// 表达式

	// s[lo:hi]
	// 表示从 lo 到 hi-1 的 slice 元素，含两端。因此

	// s[lo:lo]
	// 是空的，而

	// s[lo:lo+1]
	// 有一个元素。
	fmt.Println("p[1:4]", p[1:4])
	fmt.Println("p[:3]", p[:3])
	fmt.Println("p[3:]", p[3:])
}
