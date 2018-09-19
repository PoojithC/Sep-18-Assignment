// Slice()
// The slice() method extracts parts of a string and returns the extracted parts in a new string.
// Use the start and end parameters to specify the part of the string you want to extract.
// The first character has the position 0, the second has position 1, and so on.
// Use a negative number to select from the end of the string.
// Syntax:string.slice(start, end)

var str = "Hello world!";
alert("Given string is: "+str);

//Whole string:
alert("Extracting the whole string: "+str.slice(0));

//Given position and to the end:
alert("Extracting from position 3 and to the end: "+str.slice(3));

//Between two positions:
alert("Extracting from position 3 to 8: "+str.slice(3,8));

//First Character:
alert("Extracting first character: "+str.slice(0,1));

//End character:
alert("Extracting last character: "+str.slice(-1));