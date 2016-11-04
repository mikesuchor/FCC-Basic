function reverseString(str) {
  str = str.split('');
  return str.reverse().join('');
}

console.log(reverseString("hello"));