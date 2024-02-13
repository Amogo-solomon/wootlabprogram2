// creating arrays containing favourite colors
const favouriteColors = ["geen", "black", "orange", "blue"]

// Adding a new color using array method
favouriteColors.push("red");

//removing an existing color using array method
const removeColor = favouriteColors.splice(1, 1);


console.log("removed color", removeColor);
console.log("final array of favourite colors", favouriteColors)

