// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
    //filter duplicates and returns a new array
     return a.filter(function (num,index,a) {
       return a.indexOf(num) === index
     })
  }

  //OR
  const distinct = a => a.filter((item, index) => a.indexOf(item) === index);
          
  
  //P array of nums
  //R array without duplicates 
  