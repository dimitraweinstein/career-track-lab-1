const copyAndPush = (array, x) => {
  //fucntion needs to pass in an array of numbers and return a new array with the numbers in original array and a new number added to the end
  const newArray = [...array, x];

  return newArray;
};

export default copyAndPush;
