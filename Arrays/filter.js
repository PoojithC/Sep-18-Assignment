// filter()
// The filter() method creates an array filled with all array elements that pass a test (provided as a function).
// filter() does not execute the function for array elements without values.
// filter() does not change the original array.
// syntax:array.filter(function(currentValue, index, arr), thisValue)

var ages=[4,23,12,9,16,18,20,23,7];
alert("Given ages are: "+ages);
alert("Finding the Adults: "+ages.filter(checkAdult));

function checkAdult(age) {
    return age >= 18;
}