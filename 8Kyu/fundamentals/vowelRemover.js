// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut (s) {
    s = s.split('')
    for (let i = 0; i<s.length; i++) {
      let char = s[i].toLowerCase()
      if (char == "a" || char == "e"|| char == "i" || char == "o" || char == "u") {
        s[i] = ''
      }
    } return s.join('')
  }
  