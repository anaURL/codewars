// Given two integer arrays a, b, both of length >= 1, create a program that returns true 
//if the sum of the squares of each element in a is strictly greater than the sum of the cubes
// of each element in b.

function arrayMadness(a,b) {
    return a.reduce((a, el) => a + Math.pow(el,2),0) > b.reduce((a,el) => a + Math.pow(el,3),0)
}