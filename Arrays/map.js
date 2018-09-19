// map()
// The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.
// map() does not execute the function for array elements without values.
// map() does not change the original array.
// syntax:array.map(function(currentValue, index, arr), thisValue)

var ages=[4,23,12,9,16];
alert("Given ages are: "+ages);
alert("Multiplying the ages: "+ages.map(mulAges));

function mulAges(age) {
    return age * 5;
}