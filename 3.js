//1
let checkAge = age => (age > 18) ? true : confirm('Do you have your parents permission to access this page?');


//2

function pow(x, n) {
    if (n === 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  console.log(pow(3, 2));   
  console.log(pow(3, 3));   
  console.log(pow(1, 100)); 

  //3

  let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  };
  
  ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
  );

  //4

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

  //5

  let min = (a, b) => (a < b) ? a : b;

console.log(min(5, 3)); 
console.log(min(-1, 10)); 
console.log(min(5, 5)); 


  