// Write a function that returns the total surface area and volume of a box as an array: [area, volume]


function getSize(width, height, depth) {
    let newArr = []
    let surface = (2*width*height) + (2*height*depth) + (2*depth*width)
    let vol = width * height * depth
    
    newArr = [surface, vol]
    return newArr
   
  }

  //OR 
  const getSize = (w, h, d) => [
    (w * h + w * d + h * d) * 2,
    w * h * d
  ];