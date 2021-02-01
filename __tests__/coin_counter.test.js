import { Counter } from './../src/js/coin_counter.js';

describe('Counter', () => {
  let counter;

  beforeEach(() => {
    counter = new Counter(5.99);
  });

  test('should return given input amount', () => {
    expect(counter.inputAmount).toEqual(5.99);
  });

  test('should return given amount into whole number', () => {
    expect(counter.calChange()).toEqual(599);
  });
});