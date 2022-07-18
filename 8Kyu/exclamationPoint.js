// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

function replace(s){
    let str = ''
    let vowel = 'aeiouAEIOU'
    for (let i=0; i<s.length; i++) {
      if (vowel.includes(s[i])) {
        str += '!'
      } else {
        str += s[i]
      }
    }
    return str

    //OR 

    const replace = w => (w.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('');
