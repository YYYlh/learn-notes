package main

// Go 没有类。然而，仍然可以在结构体类型上定义方法。

// 方法接收者 出现在 func 关键字和方法名之间的参数中。

import (
	"fmt"
	"math"
)

// Vertex 结构体
type Vertex struct {
	x, y float64
}

// Abs abs
func (v *Vertex) Abs() float64 {
	return math.Sqrt(v.x*v.x + v.y*v.y)
}

func main() {
	v := &Vertex{3, 4}
	fmt.Println(v.Abs())
}
