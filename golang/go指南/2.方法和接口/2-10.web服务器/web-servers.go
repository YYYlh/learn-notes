package main

// 包 http 通过任何实现了 http.Handler 的值来响应 HTTP 请求：

// package http

// type Handler interface {
//     ServeHTTP(w ResponseWriter, r *Request)
// }

import (
	"fmt"
	"log"
	"net/http"
)

// Hello hello
type Hello struct{}

// ServeHTTP serveHttp
func (h Hello) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello!")
}

func main() {
	var h Hello
	err := http.ListenAndServe("localhost:9090", h)
	if err != nil {
		log.Fatal(err)
	}
}
