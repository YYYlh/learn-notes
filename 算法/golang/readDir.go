package main

import (
	"errors"
	"fmt"
	stack "goProject/arrayStack"
	"io/ioutil"
)

func getAllFile(path string, files []string) ([]string, error) {
	read, error := ioutil.ReadDir(path)
	if error != nil {
		return files, errors.New("文件夹不可读取")
	}
	for _, fi := range read {
		fmt.Println(fi.Name())
		if fi.IsDir() {
			fullPath := path + "//" + fi.Name()
			files = append(files, fullPath)
			files, _ = getAllFile(fullPath, files)
		} else {
			fullPath := path + "//" + fi.Name()
			files = append(files, fullPath)
		}
	}
	return files, nil
}
func main3() {
	files := []string{}
	path := "/Users/liuhao/Documents/日常/图片"
	files, _ = getAllFile(path, files)
	fmt.Print(files)
}
func main4() {
	files := []string{}
	path := "/Users/liuhao/Documents/日常/图片"
	myStack := stack.NewStack()
	myStack.Push(path)
	if !myStack.IsEmpty() {
		getPath := myStack.Pop()
		files = append(files, getPath.(string))
		read, _ := ioutil.ReadDir(getPath.(string))

		for _, fi := range read {
			if fi.IsDir() {
				fullPath := path + "//" + fi.Name()
				files = append(files, fullPath)
				myStack.Push(fullPath)
			} else {
				fullPath := path + "//" + fi.Name()
				files = append(files, fullPath)
			}
		}
	}
	fmt.Println(files)
}
