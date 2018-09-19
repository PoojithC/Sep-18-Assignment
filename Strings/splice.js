// Splice()
// The splice() method adds/removes items to/from an array, and returns the removed item(s).
// This method changes the original array.
// Syntax:array.splice(index, howmany, item1, ....., itemX)

var fruits = ["Banana", "Orange", "Apple", "Mango"];
alert("Given array is: "+fruits);
alert("Removed element is: "+fruits.splice(2, 1, "Lemon", "Kiwi"));
alert("Updated array is: "+fruits);