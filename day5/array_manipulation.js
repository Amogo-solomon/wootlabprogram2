// ARRAY REVERSAL FUNCTION
function arrayReverseFunction(array) {
  var arrayReversed = [];
  for(var i=array.length-1; i>=0; i--) {
    arrayReversed.push(array[i]);
  }
  return arrayReversed;
}

// testing the function with sample data
var theArray1 = [20, 40, 50, 10, 13, 2]
var reversedOutput = arrayReverseFunction(theArray1);
console.log(reversedOutput);

// ARRAY CONCATENATION FUNCTION
function concatenateArraysFunction(array1, array2) {
  var arrayConcatenated = [];

// copying array from array1 to arrayConcatenated
  for(var i=0; i<array1.length; i++) {
    arrayConcatenated.push(array1[i]);
  }

  for(var j=0; j<array2.length; j++) {
    arrayConcatenated.push(array2[j]);
  }

  return arrayConcatenated;
}

// testing the array function using sample data
var theArray1 = [40, 60, 20, 35, 21, 10]
var theArray2 = [41, 34, 23, 54, 70, 21]
concatenated = concatenateArraysFunction(theArray1, theArray2);

console.log("concatendated", concatenated)