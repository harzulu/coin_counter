export class Counter {
  constructor(inputAmount) {
    this.inputAmount = inputAmount;
    // this.Quarters;
    // this.Dimes;
    // this.Nickels;
    // this.Pennies;
  }

  // calChange() {
  //   const inputAmountMod = this.inputAmount * 100;

  //   if (inputAmountMod === 0) {
  //     return [];
  //   }

  //   while ( inputAmountMod > 0) {
  //   if (inputAmountMod >= 25) {

  //   }

  //   }
  //   return inputAmountMod;
  // }
}

/*
function countCoins(value, arr) {
  if (value === 0)
  {
    return arr;
  } 
  else if (value >= 25) {
    arr.push(25);
    return countCoins(value - 25, arr);
  } 
  else if (value >= 10) {
    arr.push(10);
    return countCoins(value - 10, arr);
  } 
  else if (value >= 5) {
    arr.push(5);
    return countCoins(value - 5, arr);
  } 
  else if (value >= 1) {
    arr.push(1);
    return countCoins(value - 1, arr);
  }
}

countCoins(100);

*/