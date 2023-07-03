// console.log("hello world")
/*
Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
    Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
    Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string
*/

class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    }
  }
  
  const calculator = new Calculator();
  
  const addRes = calculator.add(5, 3);
  console.log("Addition :", addRes);
  
  const subRes = calculator.subtract(10, 4);
  console.log("Subtraction :", subRes);
  
  const multRes = calculator.multiply(6, 2);
  console.log("Multiplication :", multRes);
  
  const divRes = calculator.divide(12, 3);
  console.log("Division :", divRes);
  