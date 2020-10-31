package main

import (
	"fmt"
	"goProject/手写gee/gee"
	"net/http"
)

func main() {
	server := gee.New()
	server.GET("/", func(w http.ResponseWriter, req *http.Request) {
		fmt.Fprintf(w, "URL.Path = %q\n", req.URL.Path)
	})
	server.GET("/hello", func(w http.ResponseWriter, req *http.Request) {
		fmt.Fprintf(w, "URL.Path = %q\n", req.URL.Path)
	})
	server.Run("localhost:9090")
}
