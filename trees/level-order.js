// LEVEL Order Traversal OR BREADTH First Search

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    levelOrderTraversal() {
        const result = [];
        const queue = [this.root];
        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.value);
            if (node.left) {
                queue.push(node.left);
            } 
            if (node.right) {
                queue.push(node.right);
            }
        }

        return result;
    }
}

const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

console.log(tree.levelOrderTraversal(tree.root)); // [1, 2, 3, 4, 5]