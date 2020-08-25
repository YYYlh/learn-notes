package main

import "fmt"

// SelectSort 选择排序
func SelectSort(arr []int) []int {
	len := len(arr)
	if len <= 1 {
		return arr
	}
	for i := 0; i < len-1; i++ {
		max := i
		for j := i + 1; j < len; j++ {
			if arr[max] < arr[j] {
				max = j
			}
		}
		if i != max {
			arr[i], arr[max] = arr[max], arr[i]
		}
	}
	return arr
}

// InsertSort 插入排序
func InsertSort(arr []int) []int {
	len := len(arr)
	if len <= 0 {
		return arr
	}
	for i := 1; i < len; i++ {
		temp := arr[i]
		j := i - 1
		for j >= 0 && temp > arr[j] {
			arr[j+1] = arr[j]
			j--
		}
		arr[j+1] = temp
	}
	return arr
}

// BubbleSort 冒泡排序
func BubbleSort(arr []int) []int {
	len := len(arr)
	if len <= 1 {
		return arr
	}
	for i := 0; i < len-1; i++ {
		isNeedExchange := false
		for j := 0; j < len-1-i; j++ {
			if arr[j] < arr[j+1] {
				arr[j], arr[j+1] = arr[j+1], arr[j]
				isNeedExchange = true
			}
		}
		if !isNeedExchange {
			break
		}
	}
	return arr
}

// HeapSort 堆排序
func HeapSort(arr []int) []int {
	len := len(arr)
	if len <= 1 {
		return arr
	}
	for i := 0; i < len; i++ {
		lastLen := len - i
		HeapSortMax(arr, lastLen)
		arr[0], arr[lastLen-1] = arr[lastLen-1], arr[0]
	}
	return arr
}

// HeapSortMax 找到数组中的最大值
func HeapSortMax(arr []int, length int) {
	rootNodeNum := length / 2 // n 2*i+1 2*i+2
	for i := rootNodeNum; i >= 0; i-- {
		maxTop := i
		leftChild := 2*i + 1
		rightChild := 2*i + 2
		if leftChild <= length-1 && arr[leftChild] > arr[maxTop] {
			maxTop = leftChild
		}
		if rightChild <= length-1 && arr[rightChild] > arr[maxTop] {
			maxTop = rightChild
		}
		if maxTop != i {
			arr[maxTop], arr[i] = arr[i], arr[maxTop]
		}
	}
}

// QuickSort 快速排序
func QuickSort(arr []int) []int {
	len := len(arr)
	if len <= 1 {
		return arr
	}
	splitData := arr[0]
	low := make([]int, 0, 0)
	hight := make([]int, 0, 0)
	mid := make([]int, 0, 0)
	mid = append(mid, splitData)
	for i := 1; i < len; i++ {
		if arr[i] < splitData {
			low = append(low, arr[i])
		} else if arr[i] > splitData {
			hight = append(hight, arr[i])
		} else {
			mid = append(mid, arr[i])
		}
	}
	low, hight = QuickSort(low), QuickSort(hight)
	result := append(append(low, mid...), hight...)
	return result
}

func main() {
	arr := []int{4, 3, 9, 2, 1, 6, 7, 8, 5}
	// fmt.Println(SelectSort(arr))
	// fmt.Println(InsertSort(arr))
	// fmt.Println(BubbleSort(arr))
	// fmt.Println(HeapSort(arr))
	fmt.Println(QuickSort(arr))
}
