export class Counter {
  constructor(initValue) {
    this.initValue = initValue;
  }
  modValue(){
    return this.initValue * 100;
  }

  countCoins(value, coins) {
    if (value === 0)
    {
      return [];
    } 
    else 
    {
      if (value >= coins[0]) {
        const left = (value - coins[0]);
        return [coins[0]].concat(this.countCoins(left, coins));
      }
      else
      {
        coins.shift();
        return this.countCoins(value, coins);
      }
    }
  }
}

/*
---Working Code---
function countCoins(coins) {
  return function(value) {
    if (value === 0)
    {
      return [];
    } 
    else 
    {
      if (value >= coins[0]) {
        const left = (value - coins[0]);
        return [coins[0]].concat(this.countCoins(coins)(left));
      }
      else
      {
        coins.shift();
        return this.countCoins(coins)(value);
      }
    }
  }
}
-----------

function countCoins(value, arr) {
  if (value === 0)
  {
    return arr;
  } 
  else if (value >= 25) {
    const newArr = arr.concat([ 25 ]);
    return countCoins(value - 25, newArr);
  } 
  else if (value >= 10) {
    const newArr = arr.concat([ 10 ]);
    return countCoins(value - 10, newArr);
  } 
  else if (value >= 5) {
    const newArr = arr.concat([ 5 ]);
    return countCoins(value - 5, newArr);
  } 
  else if (value >= 1) {
    const newArr = arr.concat([ 1 ]);
    return countCoins(value - 1, newArr);
  }
}

*/