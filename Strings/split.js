// split()
// The split() method is used to split a string into an array of substrings, and returns the new array.
// If an empty string ("") is used as the separator, the string is split between each character.
// The split() method does not change the original string.
// Syntax:string.split(separator, limit)

var str = "How are you doing today?";
alert("Given string is: "+str);

//Omit the separator parameter:
alert("Split() without parameters: "+str.split());

//Separate each character, including white-space:
alert("Split() separating each character, including space: "+str.split(""));

//limit parameter:
alert("Split() use the limit parameter: "+str.split("",3));

//letter as a separator:
alert("Split() use a letter as a separator: "+str.split("o"));