class Stack{
	constructor(){
		this.stack = []
	}

	show_stack(){
		return this.stack
	}

	push(item){
		this.stack.push(item)
	}

	pop(){
		return this.stack.pop()
	}

	isEmpty(){
		return this.stack.length == 0
	}
}

const firstStack = new Stack()
console.log(firstStack.show_stack())
firstStack.push(2)
firstStack.push(4)
firstStack.push(1)
console.log(firstStack.show_stack())
console.log(firstStack.pop())
console.log(firstStack.show_stack())
console.log(firstStack.isEmpty())