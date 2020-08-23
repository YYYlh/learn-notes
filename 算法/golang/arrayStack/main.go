package arraystack

type arrayStack interface {
	Size() int
	Pop() interface{}
	Push(data interface{})
	Clear()
	IsFull() bool
	IsEmpty() bool
}

// Stack 栈结构体
type Stack struct {
	dataSource  []interface{}
	sizeCaps    int
	currentSize int
}

// NewStack 初始化结构体
func NewStack() *Stack {
	stack := new(Stack)
	stack.dataSource = make([]interface{}, 0, 10)
	stack.sizeCaps = 10
	stack.currentSize = 0
	return stack
}

// Size 返回当前栈所用大小
func (stack *Stack) Size() int {
	return stack.currentSize
}

// IsPull 栈是否已经占满
func (stack *Stack) IsPull() bool {
	return stack.currentSize == stack.sizeCaps
}

// IsEmpty 栈是否为空
func (stack *Stack) IsEmpty() bool {
	return stack.currentSize == 0
}

// Push 压栈
func (stack *Stack) Push(data interface{}) {
	if !stack.IsPull() {
		stack.dataSource = append(stack.dataSource, data)
		stack.currentSize++
	}
}

// Pop 出栈
func (stack *Stack) Pop() interface{} {
	if stack.IsEmpty() {
		return nil
	}
	last := stack.dataSource[stack.currentSize-1]
	stack.dataSource = stack.dataSource[:stack.currentSize-1]
	stack.currentSize--
	return last
}

// Clear 清栈
func (stack *Stack) Clear() {
	stack.dataSource = make([]interface{}, 0, stack.sizeCaps)
}
