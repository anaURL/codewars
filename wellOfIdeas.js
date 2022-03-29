function well(x){
  
    let ideas = x.filter(x => x =='good').length;
      return ideas < 1 ? 'Fail!' : ideas < 3 ? 'Publish!' : 'I smell a series!'
    } 