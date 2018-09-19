// substring()
// The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
// This method extracts the characters in a string between "start" and "end", not including "end" itself.
// If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1, 4) == str.substring(4, 1).
// If either "start" or "end" is less than 0, it is treated as if it were 0.
// The substring() method does not change the original string.
// syntax:string.substring(start, end)

var str = "Hello world!";
alert("Given string is: "+str);

//Given position and to the end:
alert("Extracting from position 3 and to the end: "+str.substring(3));

//Swaping the two arguments
alert("Extracting from position 4 to 1 but results in 1 to 4: "+str.substring(4,1));

//Whole string: If "start" is less than 0, it will start extraction from index position 0.
alert("Extracting the whole string: "+str.substring(-1));

//First Character:
alert("Extracting first character: "+str.substring(0,1));

//End character:
alert("Extracting last character: "+str.substring(11,12));