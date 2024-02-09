//
/*const checkAge = age => age > 18 ? true : confirm('Do you have your parents permission to access this page?');

// Example usage:
const result = checkAge(20); // Example age
console.log(result);*/


/*
function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

// Examples:
console.log(pow(3, 2)); // Output: 9
console.log(pow(3, 3)); // Output: 27
console.log(pow(1, 100)); // Output: 1
*/

//
/*const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => { alert("You agreed.") },
    () => { alert("You canceled the execution.") }
  );
  */

  let calculator = {
    read() {
      this.a = +prompt('Enter the first value:', '');
      this.b = +prompt('Enter the second value:', '');
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    }
  };
  
  calculator.read();
  alert(calculator.sum());
  alert(calculator.mul());
*/
  
/*
  const min = (a, b) => (a < b ? a : b);

// Example usage:
console.log(min(5, 3)); // Output: 3
console.log(min(-1, 7)); // Output: -1
console.log(min(10, 10)); // Output: 10 (both are equal)
*/
