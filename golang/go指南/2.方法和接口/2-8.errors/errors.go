package main

// Go 程序使用 error 值来表示错误状态。

// 与 fmt.Stringer 类似，`error` 类型是一个内建接口：

// type error interface {
//     Error() string
// }
// （与 fmt.Stringer 类似，`fmt` 包在输出时也会试图匹配 `error`。）

import (
	"fmt"
	"time"
)

// MyError MyError
type MyError struct {
	when time.Time
	what string
}

func (e *MyError) Error() string {
	return fmt.Sprintf("at %v, %s", e.when, e.what)
}

func run() error {
	return &MyError{
		time.Now(),
		"it didn't work",
	}
}

func main() {
	if err := run(); err != nil {
		fmt.Println(err)
	}
}
