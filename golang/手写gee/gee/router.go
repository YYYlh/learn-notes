package gee

import (
	"net/http"
)

// Router router
type Router struct {
	handles map[string]HandleFunc
}

// NewRouter newRouter
func NewRouter() *Router {
	return &Router{make(map[string]HandleFunc)}
}

func (r *Router) addRoute(method string, pattern string, handler HandleFunc) {
	key := method + "-" + pattern
	r.handles[key] = handler
}

func (r *Router) handle(c *Context) {
	key := c.Method + "-" + c.Path
	if handler, ok := r.handles[key]; ok {
		handler(c)
	} else {
		c.String(http.StatusNotFound, "404 NOT FOUND: %s\n", c.Path)
	}
}
