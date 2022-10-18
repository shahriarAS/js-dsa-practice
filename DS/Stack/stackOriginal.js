class Stack {
    constructor(MAX_STACK_SIZE) {
        this.top = -1
        this.MAX_STACK_SIZE = MAX_STACK_SIZE
        this.stack = Array(MAX_STACK_SIZE) // Array with max size `MAX_STACK_SIZE`
        this.EmptyError = new Error("Stack Is Empty")
        this.FullError = new Error("Stack Is Full")
    }

    isFull() {
        return (this.top + 1) == this.MAX_STACK_SIZE
    }

    isEmpty() {
        return this.top == -1
    }

    push(item) {
        if (this.isFull()) {
            throw this.FullError
        } else {
            this.top += 1
            this.stack[this.top] = item
        }
    }

    pop() {
        if (this.isEmpty()) {
            throw this.EmptyError
        } else {
            const popItem = this.stack[this.top]
            this.stack[this.top] = null
            this.top -= 1
            return popItem
        }
    }

    peek() {
        if (this.isEmpty()) {
            throw this.EmptyError
        } else {
            return this.stack[this.top]
        }
    }

    showStack() {
        return this.stack
    }
}

const stack1 = new Stack(5)
console.log(stack1.showStack())
stack1.push(3)
stack1.push(1)
stack1.push(0)
stack1.push(5)
stack1.push(21)
console.log(stack1.pop())
console.log(stack1.showStack())