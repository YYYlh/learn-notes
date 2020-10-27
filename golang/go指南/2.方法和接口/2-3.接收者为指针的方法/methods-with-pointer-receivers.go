package main

// 方法可以与命名类型或命名类型的指针关联。

// 刚刚看到的两个 Abs 方法。一个是在 *Vertex 指针类型上，而另一个在 MyFloat 值类型上。 有两个原因需要使用指针接收者。首先避免在每个方法调用中拷贝值（如果值类型是大的结构体的话会更有效率）。其次，方法可以修改接收者指向的值。

import (
	"fmt"
	"math"
)

// Vertex 结构体
type Vertex struct {
	x, y float64
}

func (v *Vertex) scale(f float64) {
	v.x = v.x * f
	v.y = v.y * f
}

func (v *Vertex) abs() float64 {
	return math.Sqrt(v.x*v.x + v.y*v.y)
}

func main() {
	v := Vertex{3, 4}
	v.scale(5)
	fmt.Println(v, v.abs(), v.x)
}
