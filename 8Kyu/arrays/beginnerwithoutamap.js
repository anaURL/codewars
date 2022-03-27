// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


function maps(x){
    if (x=== undefined || x.length ===0) {
        console.log('Array is invalid') 
    } else {
        return x.map(n => n*2)
    }
 
}