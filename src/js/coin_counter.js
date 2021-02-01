export class Counter {
  constructor(inputAmount, inChange) {
    this.inputAmount = inputAmount;
    this.inChange = inChange;
  }

  givenInput(number) {
    return number + 1;
  }
}