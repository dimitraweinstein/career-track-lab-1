const capitalizeAndFilter = (arrayOfStrings) => {
  //fucntion needs to take an array of strings and capitalize all strings and filter out any string that starts with f or F.

  //first we will need to create an array of all the strings
  const stringArray = ['freedom', 'apple', 'marley', 'farts', 'boredom', 'florida'];
    
  //then we will need to capitalize all the strings
  const capitalizedStringArray = stringArray.map(string => string.toUpperCase(stringArray));

  //then we will need to filter out all the strings that start with f or F
  const filteredStringArray = capitalizedStringArray.filter(string => !string.startsWith('F'));
    
  return filteredStringArray;
  //then we will need to return the array of strings

    
};

export default capitalizeAndFilter;
