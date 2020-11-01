package main

import (
	"goProject/手写gee/gee"
	"net/http"
)

func main() {
	server := gee.New()
	server.GET("/", func(c *gee.Context) {
		c.HTML(http.StatusOK, "<h1>Hello Gee</h1>")
	})
	server.GET("/hello", func(c *gee.Context) {
		c.String(http.StatusOK, "hello %s, you're at %s\n", c.Query("name"), c.Path)
	})
	server.POST("/login", func(c *gee.Context) {
		c.JSON(http.StatusOK, gee.H{
			"userName": c.PostForm("userName"),
			"password": c.PostForm("password"),
		})
	})
	server.Run("localhost:9090")
}
