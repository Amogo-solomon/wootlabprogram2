// Create student object with initial properties
 student = {
  name: 'Rita Soul',
  age: 40,
  email: 'rita@gmail.com'
};

// Access nd print different properties of the student object
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Email:", student.email);

// Add new properties to the user object dynamically
student.adrress = "Kari-site";
student.city = "Abuja";

// Access and print the newly added properties
console.log("Address:", student.adrress);
console.log("City:", student.city); 

// ACCESSMENT
// Write a function that takes a user object as input and returns the user's name and age concatenated as a string.
function getNameAndAge(student1) {
  // Concatenate the user's name and age as a string
  return student1.name + ' is ' + student.age + 'years old';
};

// creating User object as student
const student1 = {
  name: 'Martin Noel',
  age: 25,
  email: 'martin@gmail.com'
};

// Call the function with user object and print the result
const result = getNameAndAge(student1);
console.log(result);



/* const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user to input name and age
rl.question("Enter your name: ", function(name) {
    rl.question("Enter your age: ", function(age) {
        // Create a user object using the provided input
        const user = {
            name: name,
            age: age
        };

        // Call the function with the user object and print the result
        const result = getNameAndAge(user);
        console.log(result); // Output: <name> is <age> years old.

        // Close the readline interface
        rl.close();
    });
});

// Define the getNameAndAge function as before
function getNameAndAge(user) {
    // Check if user object is provided
    if (!user || typeof user !== 'object') {
        return 'Invalid input. Please provide a valid user object.';
    }
    
    // Check if name and age properties exist in the user object
    if (!user.name || !user.age) {
        return 'Name and age properties are required in the user object.';
    }

    // Concatenate the user's name and age as a string
    return user.name + ' is ' + user.age + ' years old.';
}
 */
