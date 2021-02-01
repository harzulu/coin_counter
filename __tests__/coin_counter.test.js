import { Counter } from './../src/js/coin_counter.js';

describe('Counter', () => {
  let counter;

  beforeEach(() => {
    counter = new Counter(1.99);
  });

  test('should return given input amount', () => {
    expect(counter.initValue).toEqual(1.99);
  });

  test('should return given amount into whole number', () => {
    expect(counter.modValue()).toEqual(199);
  });

  test('should return an array of coins', () => {
    let arr = [25, 10, 5, 1];
    expect(counter.countCoins(counter.modValue(),[...arr] )).toEqual([25, 25, 25, 25, 25, 25, 25, 10, 10, 1, 1, 1, 1]);
  });
});