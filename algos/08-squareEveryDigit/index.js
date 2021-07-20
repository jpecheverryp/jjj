// Function squares every digit
// if we run 9119 we get 811181 because 9^2 is 81 and 1^2 is 1

function squareDigits(num) {
  // turn number to string then split into array
  const charArray = num.toString().split('')
  // transform characters to numbers
  const numArray = [...charArray.map(num => parseInt(num))]
  // Square every digit
  const squaredArr = [...numArray.map(num => Math.pow(num, 2))]
  const result = [...squaredArr.map(num => num.toString())].join('')
  return parseInt(result)
}


console.log(squareDigits(9119));
console.log(squareDigits(223));