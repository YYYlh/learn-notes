package main

// 结构体文法表示通过结构体字段的值作为列表来新分配一个结构体。

// 使用 Name: 语法可以仅列出部分字段。（字段名的顺序无关。）

// 特殊的前缀 & 返回一个指向结构体的指针。

import (
	"fmt"
)

// Vertex 结构体
type Vertex struct {
	X, Y int
}

func main() {
	v1 := Vertex{1, 2}
	v2 := Vertex{X: 1}
	v3 := Vertex{}
	p := &Vertex{1, 2}

	fmt.Println(v1, v2, v3, p)
}
