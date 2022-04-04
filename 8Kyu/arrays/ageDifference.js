// At the annual family gathering, the family likes to find the oldest living family 
//member’s age and the youngest family member’s age and calculate the difference between them.

function differenceInAges(ages){
    sortedAge = ages.sort((a,b) => a -b);
    let min = ages[0]
      let max = ages[ages.length-1]
    let newArray = [min, max, (max-min)];
    return newArray;
  }