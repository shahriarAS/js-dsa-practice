class Queue {
    constructor(MAX_STACK_SIZE) {
        this.MAX_STACK_SIZE = MAX_STACK_SIZE
        this.queue = Array(MAX_STACK_SIZE)
        this.front = -1
        this.rear = -1
        this.EmptyError = new Error("Queue Is Empty")
        this.FullError = new Error("Queue Is Full")
    }

    isEmpty() {
        return this.rear == -1
    }

    isFull() {
        return this.rear == this.MAX_STACK_SIZE - 1
    }

    enqueue(item) {
        if (this.isFull()) {
            throw this.FullError
        } else {
            if (this.isEmpty()) {
                this.front++
                this.rear++
                this.queue[this.rear] = item
            } else {

                this.rear++
                this.queue[this.rear] = item
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            throw this.EmptyError
        } else {
            const dequeueItem = this.queue[this.front]
            if (this.front == this.rear) {
                this.front = this.rear = -1
            } else {
                this.front++
            }
            return dequeueItem
        }
    }

    peek() {
        if (this.isEmpty()) {
            throw this.EmptyError
        } else {
            const dequeueItem = this.queue[this.front]
            return dequeueItem
        }
    }

    // Utility method. Have no relation with queue
    showQueue() {
        if (this.isEmpty()) {
            throw this.EmptyError
        } else {
            let logQueue = []

            for (let i = this.front; i <= this.rear; i++) {
                logQueue.push(this.queue[i])
            }

            return logQueue
        }
    }
}

const queue1 = new Queue(5)
queue1.enqueue(4)
queue1.enqueue(23)
queue1.enqueue(78)
console.log(queue1.showQueue())
console.log(queue1.peek())
console.log(queue1.showQueue())
console.log(queue1.dequeue())
console.log(queue1.showQueue())