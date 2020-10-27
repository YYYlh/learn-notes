package main

// map 映射键到值。

// map 在使用之前必须用 make 而不是 new 来创建；值为 nil 的 map 是空的，并且不能赋值。

import (
	"fmt"
)

// Vertex 结构体
type Vertex struct {
	lat, long float64
}

var m map[string]Vertex

// map 的文法跟结构体文法相似，不过必须有键名。
var m1 = map[string]Vertex{
	"Bell Labs": Vertex{
		40.68433, -74.39967,
	},
	// 如果顶级的类型只有类型名的话，可以在文法的元素中省略键名。
	"Google": {
		37.42202, -122.08408,
	},
}

func main() {
	m = make(map[string]Vertex)
	m["Bell Labs"] = Vertex{40.68433, -74.39967}
	fmt.Println(m)
	fmt.Println(m["Bell Labs"])
	fmt.Println(m1)
	fmt.Println(m1["Bell Labs"])
}
