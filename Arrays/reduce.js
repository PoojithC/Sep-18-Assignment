// reduce()
// The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total).
// reduce() does not execute the function for array elements without values.
//syntax:array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

var ages=[4,23,12,9,16];
alert("Given ages are: "+ages);
alert("Finding sum of given ages: "+ages.reduce(ageSum,0));

function ageSum(total, num) {
    return total+Math.round(num);
}