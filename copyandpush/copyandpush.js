const copyAndPush = () => {
  //fucntion needs to pass in an array of numbers and return a new array with the numbers in original array and a new number added to the end
    
  const numbers = [1, 2, 3];
  const newNumber = [4];
  const newNumberArray = numbers.concat(newNumber);

  return newNumberArray;
};

export default copyAndPush;
