package main

// 接口
// 接口类型是由一组方法定义的集合。

// 接口类型的值可以存放实现这些方法的任何值。

// 注意： 列子代码的 48 行存在一个错误。 由于 Abs 只定义在 *Vertex（指针类型） 上， 所以 Vertex（值类型） 不满足 `Abser`。

import (
	"fmt"
	"math"
)

// Abser abser
type Abser interface {
	Abs() float64
}

// Myfloat Myfloat
type Myfloat float64

// Vertex Vertex
type Vertex struct {
	x, y float64
}

// Abs abs
func (v *Vertex) Abs() float64 {
	return math.Sqrt(v.x*v.x + v.y*v.y)
}

// Abs abs
func (f Myfloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

func main() {
	var a Abser
	f := Myfloat(0.1)
	a = f // MyFloat 实现了 Abser
	v := Vertex{3, 4}
	a = &v // *Vertex 实现了 Abser
	// a = v // Vertex 没有实现 Abser
	fmt.Println(a.Abs())
}
