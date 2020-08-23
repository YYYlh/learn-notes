package array

import (
	"errors"
)

// Iterator 迭代器
type Iterator interface {
	HasNext() bool
	Next() (interface{}, error)
	Remove()
	GetIndex() int
}

// ArrayIterator 迭代器
type ArrayIterator struct {
	list         *Array // 数组指针
	currentIndex int    // 当前索引
}

// Iterator 初始化
func (list *Array) Iterator() Iterator {
	it := new(ArrayIterator)
	it.currentIndex = 0
	it.list = list
	return it
}

// HasNext 是否有下一个索引
func (it *ArrayIterator) HasNext() bool {
	return it.currentIndex < it.list.theSize
}

// Next 迭代下一个
func (it *ArrayIterator) Next() (interface{}, error) {
	if !it.HasNext() {
		return nil, errors.New("没有下一个")
	}
	value, err := it.list.Get(it.currentIndex)
	it.currentIndex++
	return value, err
}

// Remove 移除一位
func (it *ArrayIterator) Remove() {
	it.currentIndex--
	it.list.Delete(it.currentIndex)
}

// GetIndex 获取当前索引
func (it *ArrayIterator) GetIndex() int {
	return it.currentIndex
}
