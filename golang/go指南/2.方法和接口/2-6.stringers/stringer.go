package main

// 一个普遍存在的接口是 fmt 包中定义的 Stringer。

// type Stringer struct {
//     String() string
// }
// Stringer 是一个可以用字符串描述自己的类型。`fmt`包 （还有许多其他包）使用这个来进行输出。

import (
	"fmt"
)

// Person person
type Person struct {
	Name string
	Age  int
}

func (p Person) String() string {
	// 当被打印时 会输出这里返回的值
	return fmt.Sprintf("%v (%v years)", p.Name, p.Age)
}

func main() {
	p := Person{"刘浩", 22}
	fmt.Println(p)
}
