import capitalizeAndFilter from './capitalizeandfilter';

describe('capitalize and filter', () => {
  it('should capitalize all strings in an array and filter out any string that starts with F/f', () => {
      
    const lowercaseStringArray = ['freedom', 'apple', 'marley', 'farts', 'boredom', 'florida'];
        
    const expected = ['APPLE', 'MARLEY', 'BOREDOM'];
        
    const actual = capitalizeAndFilter(lowercaseStringArray);

    expect(actual).toEqual(expected);
  });
});
