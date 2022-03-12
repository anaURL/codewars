// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

function findDifference(a, b) {
    //use reduce to get the cuboids of each array
     let a1 = a.reduce((total,i) => total * i);
     let b1 = b.reduce((total,i) => total * i);
    //return the difference
    return Math.abs (a1-b1)
   
  }
  
  //Params two list of integers - a and b, each list 3 +integers > 0, 
  //representing dimesions of cuboids a and b
  //Return the difference between their volumes 
  //Examples findDifference([3, 2, 5], [1, 4, 4]), 14); findDifference([9, 7, 2], [5, 2, 2]), 106)

  //OR
  function find_difference(a, b) {
    return Math.abs(a.reduce((a1, a2) => a1 * a2) - b.reduce((b1, b2) => b1 * b2));
  }
  