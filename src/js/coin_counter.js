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

/*
export class Counter {
  constructor(initValue) {
    this.initValue = initValue;
  }
  function coins(coinValue) {
    return function(initValue) {
      return this.initValue * 100 ;
    }
    if (initValue === 0)
      {
        return [];
      } 
      else 
      {
        if (initValue >= coinsValue[0]) {
          const left = (initValue - coinsValue[0]);
          return [coinsValue[0]].concat(this.coins(left, coinsValue));
        }
        else
        {
          coinsValue.shift();
          return this.coins(initValue, coinsValue);
        }
      }
  }
}

const countCoins = coins([25, 10, 5, 1]);
countCoins(4.85);
*/