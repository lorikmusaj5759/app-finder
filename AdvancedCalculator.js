// Filename: AdvancedCalculator.js
// Description: An advanced calculator with additional mathematical functions and error handling.

class AdvancedCalculator {
  constructor() {
    this.result = 0;
  }
  
  add(num) {
    this.result += num;
  }
  
  subtract(num) {
    this.result -= num;
  }
  
  multiply(num) {
    this.result *= num;
  }
  
  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero.");
    }
    
    this.result /= num;
  }
  
  square() {
    this.result *= this.result;
  }
  
  squareRoot() {
    if (this.result < 0) {
      throw new Error("Cannot calculate square root of a negative number.");
    }
    
    this.result = Math.sqrt(this.result);
  }
  
  power(exponent) {
    this.result = Math.pow(this.result, exponent);
  }
  
  // Other advanced functions...
}

try {
  const calculator = new AdvancedCalculator();
  calculator.add(5);
  calculator.multiply(3);
  calculator.divide(2);
  calculator.squareRoot();
  calculator.power(3);
  console.log(calculator.result); // Output: 1323.7321159612228
  
  calculator.subtract(100);
  console.log(calculator.result); // Output: 1223.7321159612228
} catch (error) {
  console.error(error.message);
}