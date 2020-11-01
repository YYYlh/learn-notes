package gee

import (
	"net/http"
)

// HandleFunc HandleFunc
type HandleFunc func(c *Context)

// Engine Engine
type Engine struct {
	router *Router
}

// New new
func New() *Engine {
	return &Engine{router: NewRouter()}
}

// GET get请求
func (e *Engine) GET(pattern string, handler HandleFunc) {
	e.router.addRoute("GET", pattern, handler)
}

// POST post请求
func (e *Engine) POST(pattern string, handler HandleFunc) {
	e.router.addRoute("POST", pattern, handler)
}

// Run 启动服务
func (e *Engine) Run(addr string) (err error) {
	return http.ListenAndServe(addr, e)
}

// ServeHTTP ServeHTTP
func (e *Engine) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	c := NewContext(w, req)
	e.router.handle(c)
}
