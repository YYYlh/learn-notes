package gee

import (
	"fmt"
	"net/http"
)

// HandleFunc HandleFunc
type HandleFunc func(http.ResponseWriter, *http.Request)

// Engine Engine
type Engine struct {
	router map[string]HandleFunc
}

// New new
func New() *Engine {
	return &Engine{router: make(map[string]HandleFunc)}
}

func (e *Engine) addRoute(method string, pattern string, handler HandleFunc) {
	key := method + "-" + pattern
	e.router[key] = handler
}

// GET get请求
func (e *Engine) GET(pattern string, handler HandleFunc) {
	e.addRoute("GET", pattern, handler)
}

// POST post请求
func (e *Engine) POST(pattern string, handler HandleFunc) {
	e.addRoute("POST", pattern, handler)
}

// Run 启动服务
func (e *Engine) Run(addr string) (err error) {
	return http.ListenAndServe(addr, e)
}

// ServeHTTP ServeHTTP
func (e *Engine) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	key := req.Method + "-" + req.URL.Path
	if handler, ok := e.router[key]; ok {
		handler(w, req)
	} else {
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprintf(w, "404 NOT FOUND: %s\n", req.URL)
	}
}
