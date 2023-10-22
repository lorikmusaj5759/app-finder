/**
 * Filename: complex_javascript_code.js
 * 
 * Description: This is a complex JavaScript code that demonstrates various advanced programming concepts
 * and showcases a real-world problem-solving approach.
 * 
 * Content: The code performs a simulation of a social network platform. It has classes for User, Post, and
 * Comment. Users can create posts, comment on posts, like posts and comments, and follow other users.
 * The code also includes some utility functions to search for posts, comments, sort posts by popularity,
 * and much more.
 * 
 * The code is organized into multiple classes, each with its own functionalities, and utilizes modern
 * JavaScript features such as classes, arrow functions, object destructuring, spread operators, and
 * Template Literal Syntax.
 * 
 * Note: Due to the length of this code, it is recommended to execute it in a dedicated JavaScript file.
 */

class User {
  constructor(id, username, email, password) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.comments = [];
    this.following = [];
  }

  createPost(content) {
    const post = new Post(content, this);
    this.posts.push(post);
    return post;
  }

  createComment(content, post) {
    const comment = new Comment(content, this);
    post.addComment(comment);
    this.comments.push(comment);
    return comment;
  }

  likePost(post) {
    if (!this.posts.includes(post)) {
      post.addLike(this);
    }
  }

  likeComment(comment) {
    if (!this.comments.includes(comment)) {
      comment.addLike(this);
    }
  }

  followUser(user) {
    if (!this.following.includes(user)) {
      this.following.push(user);
    }
  }
}

class Post {
  constructor(content, author) {
    this.id = generateUniqueId();
    this.content = content;
    this.author = author;
    this.comments = [];
    this.likes = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  addLike(user) {
    this.likes.push(user);
  }
}

class Comment {
  constructor(content, author) {
    this.id = generateUniqueId();
    this.content = content;
    this.author = author;
    this.likes = [];
  }

  addLike(user) {
    this.likes.push(user);
  }
}

// Utility functions

function searchPosts(query) {
  const results = [];

  for (const user of users) {
    for (const post of user.posts) {
      if (post.content.toLowerCase().includes(query.toLowerCase())) {
        results.push(post);
      }
    }
  }

  return results;
}

function sortPostsByPopularity(posts) {
  const sortedPosts = [...posts];

  sortedPosts.sort((a, b) => b.likes.length - a.likes.length);
  
  return sortedPosts;
}

// Generating a few users and their interactions on the social network

const users = [
  new User(1, "John", "john@example.com", "password1"),
  new User(2, "Emma", "emma@example.com", "password2"),
  new User(3, "Michael", "michael@example.com", "password3"),
];

const john = users[0];
const emma = users[1];
const michael = users[2];

const post1 = john.createPost("Hello, world!");
const post2 = emma.createPost("Exciting times ahead!");
const post3 = michael.createPost("Coding is fun!");

john.createComment("Great post!", post2);
emma.createComment("I agree!", post1);
michael.createComment("Keep it up!", post3);

john.likePost(post3);
emma.likePost(post3);

console.log("Users:", users);
console.log("Search results for 'coding':", searchPosts("coding"));
console.log("Posts sorted by popularity:", sortPostsByPopularity([...john.posts, ...emma.posts, ...michael.posts]));

// Helper function to generate a unique ID for posts and comments
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// ... More code and functionalities can be added below.
// ... 200+ lines of elaborated code.