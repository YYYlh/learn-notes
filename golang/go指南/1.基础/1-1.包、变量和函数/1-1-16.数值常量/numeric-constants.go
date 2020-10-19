package main

// 数值常量是高精度的 _值_。

// 一个未指定类型的常量由上下文来决定其类型。

// 也尝试一下输出 needInt(Big) 吧。

import (
	"fmt"
)

const (
	big   = 1 << 100
	small = big >> 99
)

func needInt(x int) int {
	return x*10 + 1
}
func needFloat(x float64) float64 {
	return x * 0.1
}

func main() {
	fmt.Println(needInt(small))
	fmt.Println(needFloat(small))
	// fmt.Println(needInt(big)) 溢出
}
