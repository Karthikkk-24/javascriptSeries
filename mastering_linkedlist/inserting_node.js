// Inserting a node

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    prepend (data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;

    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data); 
            current = current.next;
        }
    }
}

const myList = new LinkedList();

myList.append(2);

myList.print(); // 2

myList.append(3);

myList.print(); // 2, 3

myList.prepend(1);

myList.print(); // 1, 2, 3
