// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    //split a string, reverse it and make lowercasee
    let y = x.split('').reverse().join('').toLowerCase()
    //compare it with the original strirng
    if (x.toLowerCase() == y) {
      return true
      } else {
        return false
      }
  }
  
  //P a string case insensitive, always a word 
  //R true if the word is palindrom, false if it is not
  //E a, aba, Abba, hello, Bob
  //P

  //OR 

  const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }