// creating arrays of numbers
numbers = [2, 7, 9, 10, 11, 50];

function sumWithForLoop(numbers) {
  let sum  = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// calculate the sum using the sumWithForLoop function
let sum = sumWithForLoop(numbers);

// printing the result
console.log("Sum of the numbers using ForLoop:", sum)


// IMPLEMENTATION USING REDUCE
// Define the array of numbers
const numbers1 = [2, 7, 9, 10, 11, 50];

// Define the function to calculate the sum using the reduce method
function sumWithReduce(numbers1) {
  return numbers1.reduce((accumulator, currentValue) => accumulator + currentValue, 0 );
}

// Calculate the sum using the sumWithReduce function
const sum1 = sumWithReduce(numbers1);

// Print the result
console.log("Sum of the numbers using Reduce method:", sum1);

//COMPARISON OF THE IMPLEMENTATION AND DIFFERENCES
// 1. Methodology: 
/* For Loop: The for loop iterates through each element of the array and accumulates the sum  by adding each each element to a variable.For
Reduced Method: The reduce method applies a callback function to each element of the array, accumulating a single printValueAtPosition(in this case , the sum) by repeatedly applying the function to pairs of ElementInternals. */

// 2. Readability:
/*  For Loop: the for loop implementation might be more familiar and easier to understand for developers who are used to traditional looping constructs
 Reduce Method: The reduce method implementation might be more concise ad expressive, but it might require additional uderstanding of functional programming concepts for some developers */