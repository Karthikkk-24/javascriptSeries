class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start, visited = new Set(), result = []) {
    visited.add(start);

    result.push(start);

    this.adjacencyList[start].forEach((vertex) => {
      if (!visited.has(vertex)) {
        this.depthFirstRecursive(vertex, visited, result);
      }
    });
    return result;
  }

  breadthFirst(start) {
    const queue = [start];
    const visited = new Set();
    const result = [];
    visited.add(start);

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");

console.log(g.breadthFirst("A"));

// ["A", "B", "C", "D", "E", "F"]

console.log(g.depthFirstRecursive("A"));
// ["A", "B", "D", "C", "E", "F"]