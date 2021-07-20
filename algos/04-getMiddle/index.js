function getMiddle(str) {
  const len = str.length;
  const mid = len/2;
  // even cases return 2 middle chars
  if (len % 2 === 0) {
    return str.substring(mid-1, mid+1)
  }
  return str[Math.floor(mid)]
}

console.log(getMiddle('middle'));
console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('A'));
console.log(getMiddle('dog'));

