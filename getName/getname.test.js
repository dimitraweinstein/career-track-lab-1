import getName from './getname';

describe('getName', () => {
  it('should return the name from an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const expected = 'spot';
    const actual = getName(spot);

    expect(actual).toEqual(expected);
  });
});
