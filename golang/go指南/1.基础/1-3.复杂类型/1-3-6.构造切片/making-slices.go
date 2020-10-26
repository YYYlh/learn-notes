package main

// slice 由函数 make 创建

import (
	"fmt"
)

func main() {
	a := make([]int, 5)
	printSlice("a", a)
	b := make([]int, 0, 5)
	printSlice("b", b)
	c := b[:2]
	printSlice("c", c)
	d := c[2:5]
	printSlice("d", d)
	var e []int
	fmt.Println(e == nil)
	printSlice("e", e)
	e = append(e, 1, 2, 3)
	printSlice("e", e)
}

func printSlice(s string, x []int) {
	fmt.Printf("%s len=%d cap=%d %v\n", s, len(x), cap(x), x)
}
