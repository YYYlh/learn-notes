package main

// 一个结构体（`struct`）就是一个字段的集合。

import (
	"fmt"
)

// Vertex 结构体
type Vertex struct {
	X int
	Y int
}

func main() {
	v := Vertex{1, 2}
	// 结构体字段可以通过结构体指针来访问。
	// 通过指针间接的访问是透明的。
	p := &v
	// 结构体字段使用点号来访问。
	p.X = 3
	fmt.Println(v.X)
}
