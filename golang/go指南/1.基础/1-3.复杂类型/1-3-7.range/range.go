package main

// for 循环的 range 格式可以对 slice 或者 map 进行迭代循环

import (
	"fmt"
)

var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

func main() {
	for i, v := range pow {
		fmt.Printf("2**%d = %d\n", i, v)
	}
}
