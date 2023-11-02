function removeSpaces(array) {
  //filter - creates a new array from existing array
  //includes elements that pass a specific test
  //pass a parameter element
  //returns true  if element is not null or undefined
  return array.filter((element) => element != null && element !== undefined);
}

const array = [1, 2, , , 4];
const newArray = removeSpaces(array);
console.log(newArray);

// .flat() - removes sub arrays and add to main array
//removes empty spaces
