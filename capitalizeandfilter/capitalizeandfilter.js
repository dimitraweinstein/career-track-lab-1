const capitalizeAndFilter = (arrayOfStrings) => {

  const stringArray = [...arrayOfStrings];
    
  const capitalizedStringArray = stringArray.map(string => string.toUpperCase(stringArray)).filter(string => !string.startsWith('F'));
    
  return capitalizedStringArray;
};

export default capitalizeAndFilter;
