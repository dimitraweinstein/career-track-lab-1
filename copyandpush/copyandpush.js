const copyAndPush = (numbers, n) => {
  //fucntion needs to pass in an array of numbers and return a new array with the numbers in original array and a new number added to the end
  const numbersArray = numbers;
  const newNumber = n;

  const newArray = [...numbersArray, newNumber];

  return newArray;
};

export default copyAndPush;
