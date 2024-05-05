// Design a Calculator class. The class should provide the mathematical operations of 
//addition, subtraction, multiplication, division, and exponentiation. It should also allow 
//consecutive operations to be performed using method chaining. The Calculator class
// constructor should accept a number which serves as the initial value of result.
// Your Calculator class should have the following methods:
// add - This method adds the given number value to the result and returns the updated Calculator.
// subtract - This method subtracts the given number value from the result and returns the updated Calculator.
// multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
// divide - This method divides the result by the given number value and returns the updated 
//Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
// power - This method raises the result to the power of the given number value and 
//returns the updated Calculator.
// getResult - This method returns the result.

 class Calculator 
{
    constructor(value)
    {
        
      this.result=value;
      
    }
     add(value)
      {
           this.result=this.result+value;
          return this;
      }
       subtract(value)
      {
             this.result=this.result-value;
           return this;
      }
      multiply(value)
      {      this.result=this.result*value;
              return this;
      }
      divide(value)
      {     this.result=this.result/value;
           return this;
      }
      power(value)
      {           this.result=this.result**value;
                return this;
      }
      getResult()
      {
        return this.result;
      }
      
}

const output=new Calculator(5).add(5).divide(2).power(2).getResult();
console.log(output);