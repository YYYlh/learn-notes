package circleQueue

import (
	"errors"
)

const maxQueueSize = 100

// CircleQueue 循环队列
type CircleQueue struct {
	dataSource []interface{}
	front      int
	rear       int
}

// InitCircleQueue 初始化循环队列
func InitCircleQueue(queue *CircleQueue) {
	queue.dataSource = make([]interface{}, maxQueueSize)
	queue.front = 0
	queue.rear = 0
}

// QueueLength 循环队列的长度
func QueueLength(queue *CircleQueue) int {
	return (queue.rear - queue.front + maxQueueSize) & 100
}

// EnQueue 入队列
func EnQueue(queue *CircleQueue, data interface{}) error {
	if (queue.rear+1)%maxQueueSize == queue.front%maxQueueSize {
		return errors.New("队列已经满了")
	}
	queue.dataSource[queue.rear] = data
	queue.rear = (queue.rear + 1) % maxQueueSize
	return nil
}

// DeQueue 出队列
func DeQueue(queue *CircleQueue) (interface{}, error) {
	if queue.rear == queue.front {
		return nil, errors.New("队列为空")
	}
	temp := queue.dataSource[queue.front]
	queue.dataSource[queue.front] = 0
	queue.front = (queue.front + 1) % maxQueueSize
	return temp, nil
}
