package main

// Go 的基本类型有Basic types

// bool

// string

// int  int8  int16  int32  int64
// uint uint8 uint16 uint32 uint64 uintptr

// byte // uint8 的别名

// rune // int32 的别名
//      // 代表一个Unicode码

// float32 float64

// complex64 complex128
// 这个例子演示了具有不同类型的变量。 同时与导入语句一样，变量的定义“打包”在一个语法块中。

import (
	"fmt"
	"math/cmplx"
)

var (
	toBe   bool       = false
	maxInt uint64     = 1<<64 - 1
	z      complex128 = cmplx.Sqrt(-5 + 12i)
)

func main() {
	const f = "%T(%v)\n"
	fmt.Printf(f, toBe, toBe)
	fmt.Printf(f, maxInt, maxInt)
	fmt.Printf(f, z, z)
}
