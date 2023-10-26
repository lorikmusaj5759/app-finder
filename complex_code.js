/*
Filename: complex_code.js

This code is a complex implementation of a shopping cart system. It allows users to add and remove items from the cart, calculate the total cost, apply discounts, and process payments.

Some key features of this code:
- Uses Object-Oriented Programming (OOP) principles
- Provides error handling and validation
- Supports multiple payment methods
- Implements a custom discount system
- Includes comprehensive documentation and extensive code comments

Note: This code is only for demonstration purposes and may not be a fully functioning implementation. It is meant to showcase complexity and creativity in JavaScript.

*/

// Shopping cart class
class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.discount = 0;
    this.paymentMethod = null;
  }

  // Add item to the cart
  addItem(item) {
    if (!item) {
      throw new Error("Item not provided.");
    }

    this.items.push(item);
    this.calculateTotal();
  }

  // Remove item from the cart
  removeItem(item) {
    const itemIndex = this.items.indexOf(item);
    
    if (itemIndex === -1) {
      throw new Error("Item not found in the cart.");
    }

    this.items.splice(itemIndex, 1);
    this.calculateTotal();
  }

  // Calculate total cost of items in the cart
  calculateTotal() {
    let total = 0;
    
    for (const item of this.items) {
      total += item.price;
    }

    this.total = total - this.discount;
    this.applyDiscount();
  }

  // Apply discount based on a custom discount logic
  applyDiscount() {
    // Custom discount logic goes here
    // ...
    this.discount = 10; // Sample discount value
  }

  // Set the payment method for the cart
  setPaymentMethod(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  // Process payment
  processPayment() {
    if (!this.paymentMethod) {
      throw new Error("Payment method not set.");
    }

    switch (this.paymentMethod) {
      case "Credit Card":
        // Credit card payment processing logic
        break;
      case "PayPal":
        // PayPal payment processing logic
        break;
      case "Stripe":
        // Stripe payment processing logic
        break;
      default:
        throw new Error("Invalid payment method.");
    }

    // Payment processing steps
    // ...
  }
}

// Item class
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Usage example
const cart = new ShoppingCart();

const item1 = new Item("Product 1", 100);
const item2 = new Item("Product 2", 50);
const item3 = new Item("Product 3", 75);

cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);

cart.setPaymentMethod("Credit Card");

cart.processPayment();

// Remove an item
cart.removeItem(item2);

console.log("Total Cost:", cart.total);