package main

// 你可以对包中的 任意 类型定义任意方法，而不仅仅是针对结构体。

// 但是，不能对来自其他包的类型或基础类型定义方法。

import (
	"fmt"
)

// MyFloat 自定义类型
type MyFloat float64

func (f MyFloat) abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

func main() {
	f := MyFloat(-1)
	fmt.Println(f.abs())
}
