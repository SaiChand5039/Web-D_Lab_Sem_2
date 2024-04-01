    function usingwhile(){
    let sum = 0;
    let count = 0;
    while (count < 5) {
      let number = parseInt(prompt("Enter an integer number:"));
      if (!isNaN(number)) {
        sum += number;
        count++;
      } else {
        alert("Invalid input! Please enter a valid integer number.");
      }
    }
    document.write("Sum of the numbers using while loop: " + sum + "<br>");
  }
  function usingfor(){
    sums = 0;
    for (let i = 0; i < 5; i++) {
      let numbers = parseInt(prompt("Enter an integer number:"));
      if (!isNaN(numbers)) {
        sums += numbers;
      } else {
        alert("Invalid input! Please enter a valid integer number.");
        i--; // Decrement i to repeat the current iteration
      }
    }
    document.write("Sum of the numbers using for loop: " + sums);
}