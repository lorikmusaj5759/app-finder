/* 
  Filename: ComplexCode.js
  Description: Complex JavaScript code demonstrating various programming concepts and functionality.
*/

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

// Function to check if a string is palindrome
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// Generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to calculate the factorial of a number
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Class representing a Rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  get perimeter() {
    return 2 * (this.width + this.height);
  }
}

// Function to convert decimal to binary
function decimalToBinary(decimal) {
  let binary = '';
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}

// Class representing a Stack
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      throw new Error('Stack is empty');
    } else {
      return this.items.pop();
    }
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
}

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Class representing a Queue
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    } else {
      return this.items.shift();
    }
  }

  front() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    } else {
      return this.items[0];
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Class representing a Node in a Binary Search Tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Class representing a Binary Search Tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      return false;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }
}

// Function to calculate the n-th Fibonacci number recursively
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Class representing a Point in 2D space
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceTo(otherPoint) {
    const dx = this.x - otherPoint.x;
    const dy = this.y - otherPoint.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

// Function to capitalize each word in a sentence
function capitalizeWords(sentence) {
  return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Class representing a linked list node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Class representing a linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  delete(value) {
    if (this.head === null) {
      throw new Error('List is empty');
    } else {
      if (this.head.value === value) {
        this.head = this.head.next;
        if (this.head === null) {
          this.tail = null;
        }
      } else {
        let currentNode = this.head;
        while (currentNode.next !== null) {
          if (currentNode.next.value === value) {
            currentNode.next = currentNode.next.next;
            if (currentNode.next === null) {
              this.tail = currentNode;
            }
            return;
          }
          currentNode = currentNode.next;
        }
      }
    }
  }
}

// Function to calculate the GCD of two numbers
function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

// Class representing a Matrix
class Matrix {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.data = [];
    for (let i = 0; i < rows; i++) {
      this.data.push(new Array(columns).fill(0));
    }
  }

  get(row, column) {
    return this.data[row][column];
  }

  set(row, column, value) {
    this.data[row][column] = value;
  }

  add(matrix) {
    if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
      throw new Error('Matrix dimensions must match');
    } else {
      const result = new Matrix(this.rows, this.columns);
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          result.set(i, j, this.get(i, j) + matrix.get(i, j));
        }
      }
      return result;
    }
  }

  multiply(matrix) {
    if (this.columns !== matrix.rows) {
      throw new Error('Invalid matrix dimensions');
    } else {
      const result = new Matrix(this.rows, matrix.columns);
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < matrix.columns; j++) {
          let sum = 0;
          for (let k = 0; k < this.columns; k++) {
            sum += this.get(i, k) * matrix.get(k, j);
          }
          result.set(i, j, sum);
        }
      }
      return result;
    }
  }

  transpose() {
    const result = new Matrix(this.columns, this.rows);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        result.set(j, i, this.get(i, j));
      }
    }
    return result;
  }
}

// Function to check if a number is perfect
function isPerfectNumber(number) {
  let sum = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum === number;
}

// Class representing a Book
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  }
}

// Function to check if a year is a leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Custom event listener
const myEventListener = new EventListener();

myEventListener.on('click', () => {
  console.log('Click event triggered');
});

myEventListener.trigger('click');

// Generate a random password
function generateRandomPassword(length) {
  let password = '';
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

// Exported module for other parts of the application
export default {
  Person,
  isPalindrome,
  getRandomNumber,
  factorial,
  Rectangle,
  decimalToBinary,
  Stack,
  isPrime,
  Queue,
  reverseString,
  Node,
  BinarySearchTree,
  fibonacci,
  Point,
  capitalizeWords,
  LinkedList,
  gcd,
  Matrix,
  isPerfectNumber,
  Book,
  isLeapYear,
  myEventListener,
  generateRandomPassword
};

// Usage example
const myPerson = new Person('John Doe', 25);
myPerson.greet();
console.log(isPalindrome('racecar'));
console.log(getRandomNumber(1, 10));
console.log(factorial(5));
const myRectangle = new Rectangle(5, 10);
console.log(myRectangle.area);
console.log(myRectangle.perimeter);
console.log(decimalToBinary(42));
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack.size());
console.log(isPrime(17));
const myQueue = new Queue();
myQueue.enqueue('Apple');
myQueue.enqueue('Banana');
console.log(myQueue.front());
console.log(myQueue.isEmpty());
console.log(myQueue.size());
console.log(reverseString('Hello World!'));
const myBST = new BinarySearchTree();
myBST.insert(5);
myBST.insert(3);
myBST.insert(7);
console.log(myBST.search(3));
console.log(fibonacci(6));
const pointA = new Point(0, 0);
const pointB = new Point(3, 4);
console.log(pointA.distanceTo(pointB));
console.log(capitalizeWords('hello world'));
const myLinkedList = new LinkedList();
myLinkedList.append(1);
myLinkedList.prepend(0);
myLinkedList.delete(1);
console.log(gcd(12, 18));
const matrixA = new Matrix(2, 2);
matrixA.set(0, 0, 1);
matrixA.set(0, 1, 2);
matrixA.set(1, 0, 3);
matrixA.set(1, 1, 4);
const matrixB = new Matrix(2, 2);
matrixB.set(0, 0, 5);
matrixB.set(0, 1, 6);
matrixB.set(1, 0, 7);
matrixB.set(1, 1, 8);
const matrixC = matrixA.add(matrixB);
const matrixD = matrixA.multiply(matrixB);
const matrixE = matrixA.transpose();
console.log(isPerfectNumber(28));
const myBook = new Book('Harry Potter', 'J.K. Rowling', 1997);
console.log(myBook.getSummary());
console.log(isLeapYear(2020));
console.log(generateRandomPassword(8));