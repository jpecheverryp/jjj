// Create a function that does this
// accum("abcd"); => "A-Bb-Ccc-Dddd"
// accum("RqaEzty") => "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") => "C-Ww-Aaa-Tttt"

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1)
}

function accum(string) {
  const lowerCaseString = string.toLowerCase();
  let result = []
  letterArray = lowerCaseString.split('')
  for(let i = 0; i < letterArray.length; i++) {
    let word = ''
    for(let j=0; j <= i; j++){
      word = word + letterArray[i]
    }
    result.push(capitalize(word))
  }

  return result.join('-')
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));