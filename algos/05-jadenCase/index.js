function jadenCase(string) {
  
  return string.trim().split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
}

console.log(jadenCase("how can mirrors be real if our eyes aren't real"));
console.log(jadenCase("this is a test "));