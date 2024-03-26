// Create Linked List

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data); // 1, 2, 3
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

list.print();