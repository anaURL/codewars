// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
    //P  loop through the array, find min value and max value 
    let arr = []
    for (let i = numbers[0]; i <= numbers[numbers.length -1]; i++) {
     arr.push(i)
    }
    return arr
   
  }
  
  //P an array of numbers, always negative and positive integers
  //R a new list with each value incremented by one for each element 
  //from the minimum value to the maximum value, both included
  