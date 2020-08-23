package arrayQueue

type arrayQueue interface {
	Front() interface{}
	End() interface{}
	IsEmpty() bool
	EnQueue(data interface{})
	DeQueue() interface{}
	Size() int
}

// Queue 队列
type Queue struct {
	dataSource []interface{}
	theSize    int
}

// NewQueue 生成一个队列
func NewQueue() *Queue {
	queue := new(Queue)
	queue.dataSource = make([]interface{}, 0)
	queue.theSize = 0
	return queue
}

// Size 队列的长度
func (queue *Queue) Size() int {
	return queue.theSize
}

// IsEmpty 队列是否为空
func (queue *Queue) IsEmpty() bool {
	return queue.theSize == 0
}

// Front 队列的第一条数据
func (queue *Queue) Front() interface{} {
	return queue.dataSource[0]
}

// End 队列的最后一条数据
func (queue *Queue) End() interface{} {
	if queue.theSize == 0 {
		return nil
	}
	return queue.dataSource[queue.theSize-1]
}

// EnQueue 入队列
func (queue *Queue) EnQueue(data interface{}) {
	queue.dataSource = append(queue.dataSource, data)
	queue.theSize++
}

// DeQueue 出队列
func (queue *Queue) DeQueue() interface{} {
	if queue.IsEmpty() {
		return nil
	}
	data := queue.dataSource[0]
	if queue.theSize > 1 {
		queue.dataSource = queue.dataSource[1:queue.theSize]
	}
	queue.theSize--
	return data
}
