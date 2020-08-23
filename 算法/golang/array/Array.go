package array

import (
	"errors"
	"fmt"
)

type list interface {
	Size() int
	Get(index int) (interface{}, error)
	Set(index int, newVal interface{}) error
	Insert(index int, newVal interface{}) error
	Append(newVal interface{})
	Clear()
	Delete(index int) error
	String() string
	Iterator() Iterator
}

// Array 封装的数组结构
type Array struct {
	dataStore []interface{}
	theSize   int
}

// NewArray 初始化一个数组
func NewArray() *Array {
	list := new(Array)
	list.dataStore = make([]interface{}, 0, 10)
	list.theSize = 0
	return list
}

// Append 向数组中添加数据
func (list *Array) Append(val interface{}) error {
	list.dataStore = append(list.dataStore, val)
	list.theSize++
	return nil
}

// Size 返回数组的长度
func (list *Array) Size() int {
	return list.theSize
}

// Get 得到数组中的某一项
func (list *Array) Get(index int) (interface{}, error) {
	if index < 0 || index >= list.theSize {
		return nil, errors.New("索引越界")
	}
	return list.dataStore[index], nil
}

func (list *Array) String() string {
	return fmt.Sprint(list.dataStore)
}

// Clear 清空
func (list *Array) Clear() {
	list.dataStore = make([]interface{}, 0, 10)
	list.theSize = 0
}

// Insert 在数组的某一项中插入一条数据
func (list *Array) Insert(index int, val interface{}) error {
	if index < 0 || index >= list.theSize {
		return errors.New("索引越界")
	}
	list.isCheckFull()
	list.dataStore = list.dataStore[:list.theSize+1]
	for i := list.theSize; i > index; i-- {
		list.dataStore[i] = list.dataStore[i-1]
	}
	list.dataStore[index] = val
	list.theSize++
	return nil
}

// Delete 删除数组的某一项
func (list *Array) Delete(index int) error {
	if index < 0 || index >= list.theSize {
		return errors.New("索引越界")
	}
	list.dataStore = append(list.dataStore[:index], list.dataStore[index+1:]...)
	list.theSize--
	return nil
}

func (list *Array) isCheckFull() {
	if list.theSize == cap(list.dataStore) {
		newDataStore := make([]interface{}, list.theSize, list.theSize*2)
		copy(newDataStore, list.dataStore)
		list.dataStore = newDataStore
	}
}
