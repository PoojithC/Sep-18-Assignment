// find()
// The find() method returns the value of the first element in an array that pass a test (provided as a function).
// The find() method executes the function once for each element present in the array:
//     If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
//     Otherwise it returns undefined
// find() does not execute the function for empty arrays.
// find() does not change the original array.

var ages=[4,23,12,9,16];
alert("Given ages are: "+ages);
alert("Finding the first adult in the array: "+ages.find(checkAdult));

function checkAdult(age) {
    return age >= 18;
}

// var K=[];
// for(var i=0;i<ages.length;i++){
//     k.push(ages>=18);
// }
// alert("Adults in the given ages are: "+k);





// function checkAdult(a){
//     var k=[];
//     for(var i=0;i<a.length;i++){
//         if(a[i]>=18)
//         k.push(a[i]);
//     }
//     return k;
// }