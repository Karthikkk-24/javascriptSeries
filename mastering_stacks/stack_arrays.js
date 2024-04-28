// Stack Implementation Using Arrays

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}


// Reverse a String

function reverseString(Str) {
    const stack = new Stack();
    for (let i = 0; i < Str.length; i++) {
        stack.push(Str[i]);
    }
    let reverse = "";
    for (let i = 0; i < Str.length; i++) {
        reverse += stack.pop();
    }
    return reverse;
}

console.log(reverseString("thecodinghacker")); // rekcahgnidoceht

// Checking for Duplicates in an Array

function hasDuplicates(arr) {
    const stack = new Stack();
    const set = new Set();

    for (let element of arr) {
        if (set.has(element)) {
            return true;
        }
        set.add(element);
        stack.push(element);
    }

    return false;
}

const array1 = [1, 2, 3, 4, 5, 6];
console.log(hasDuplicates(array1)); // false

const array2 = [1, 2, 3, 4, 5, 6, 1];
console.log(hasDuplicates(array2)); // true