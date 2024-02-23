// QUESTION
/* Create an object representing a car with properties like make, model, year, etc.
Add a method to the car object to calculate its age based on the current year.
Iterate through the car object's properties and print them. */

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2018,
  color: "Silver",
  calculateAge: function() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year
  }
};

// Iterate throught the car object's properties and print them
for (let i in car) {
  console.log(i + ": " + car[i]);
} 

// Calculate and print the age of the car
console.log("Age of the car:", car.calculateAge());

// 
// ASSESSMENT
/* Write a function that takes a car object as input and checks if it has a method to calculate its age. Return true if the method exists, otherwise false. */
function availableCalculateAgeMethod(car) {
  return typeof car.calculateAge === 'function'
}
console.log(availableCalculateAgeMethod(car));