import { Counter } from './../src/js/coin_counter.js';

describe('Counter', () => {
  let counter;

  beforeEach(() => {
    counter = new Counter(5, 6);
  });

  test('should return given input', () => {
    expect(counter.givenInput(5)).toEqual(5);
  });
});