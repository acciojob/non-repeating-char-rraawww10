function firstNonRepeatedChar(str) {
 // Write your code here
	let charCount = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
