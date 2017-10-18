function checkPermutation(word1, word2) {
  if(word1.length !== word2.length) {
    return false
  } else {
    let sortedWord1 === word1.split('').sort().join('')
    let sortedWord2 === word2.split('').sort().join('')
    return sortedWord1 === sortedWord2
  }
}
