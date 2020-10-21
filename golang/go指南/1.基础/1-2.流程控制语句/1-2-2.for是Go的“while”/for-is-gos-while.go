package main

// 跟 C 或者 Java 中一样，可以让前置、后置语句为空。

// 基于此可以省略分号：C 的 while 在 Go 中叫做 `for`。

import (
	"fmt"
)

func main() {
	sum := 1
	for sum < 1000 {
		sum++
	}
	fmt.Println(sum)
}
